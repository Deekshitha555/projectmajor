"use client";

import React, { useState } from "react";

interface Question {
  id: string;
  text: string;
}

interface Option {
  label: string;
  value: number;
}

const QUESTIONS: Question[] = [
  { id: "q1", text: "How often have you felt anxious or stressed in the last week?" },
  { id: "q2", text: "Do you experience sudden mood changes?" },
  { id: "q3", text: "Do you find it hard to focus or stay motivated?" },
  { id: "q4", text: "How often do negative thoughts disturb your day?" },
  { id: "q5", text: "How is your sleep and appetite recently?" },
];

const OPTIONS: Option[] = [
  { label: "Never", value: 0 },
  { label: "Sometimes", value: 1 },
  { label: "Often", value: 2 },
  { label: "Always", value: 3 },
];

// UPDATED Interface to match the enhanced API response
interface AssessmentReport {
  label: string;
  confidence: number;
  questionnaireScore: number;
  maxScore: number;
  severity?: string;
  recommendations: string[];
  resources: { 
    title: string; 
    url: string; 
    type: string;
    description?: string;
  }[];
  assessmentNote?: string;
  nextSteps?: string;
}

export default function Assessment() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<AssessmentReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnswer = (qid: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
  };

  const showProbe = Object.values(answers).some((v) => v >= 2);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setReport(null);

    if (!text.trim()) {
      setError("Please describe how you feel.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/analyzer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, text }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Server error. Try again.");
      }

      const data: AssessmentReport = await res.json();
      setReport(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Calculate severity based on score for fallback
  const calculateSeverity = (score: number, maxScore: number) => {
    const ratio = score / maxScore;
    if (ratio >= 0.8) return "High - Professional consultation recommended";
    if (ratio >= 0.6) return "Moderate to High";
    if (ratio >= 0.4) return "Moderate";
    return "Mild";
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Mental Health Assessment</h1>
      <p className="text-gray-800 mb-6">
        Answer a few questions and describe your feelings. We will analyze your responses and provide guidance.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Questionnaire */}
        <section className="border p-5 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Questionnaire</h2>

          {QUESTIONS.map((q) => (
            <div key={q.id} className="mb-4">
              <label className="font-medium">{q.text}</label>
              <div className="mt-2 flex gap-4 flex-wrap">
                {OPTIONS.map((opt) => (
                  <label key={opt.value} className="cursor-pointer flex items-center">
                    <input
                      type="radio"
                      name={q.id}
                      className="mr-1"
                      checked={answers[q.id] === opt.value}
                      onChange={() => handleAnswer(q.id, opt.value)}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
          ))}

          {/* Dynamic Probe */}
          {showProbe && (
            <div className="bg-yellow-50 border p-3 rounded-lg mt-4 text-black">
              <p className="font-medium ">This seems to impact you frequently. Does it affect your daily tasks?</p>

              <div className="flex gap-4 mt-2">
                <label className="cursor-pointer flex items-center">
                  <input
                    type="radio"
                    name="probe"
                    className="mr-1"
                    onChange={() => handleAnswer("probe", 1)}
                  />
                  Yes
                </label>

                <label className="cursor-pointer flex items-center">
                  <input
                    type="radio"
                    name="probe"
                    className="mr-1"
                    onChange={() => handleAnswer("probe", 0)}
                  />
                  No
                </label>
              </div>
            </div>
          )}
        </section>

        {/* Free Text Input */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Describe how you feel</h2>
          <textarea 
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            rows={6}
            placeholder="Write about your feelings, thoughts, and any symptoms you're experiencing..."
          />
        </section>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-black py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Analyzing..." : "Get Assessment"}
        </button>
      </form>

      {/* Error */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 font-medium">{error}</p>
        </div>
      )}

      {/* Report */}
      {report && (
        <section className="mt-8 p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-2xl font-bold mb-4 text-yellow-800">Assessment Report</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800">AI Classification</h3>
              <p className="text-xl text-black">{report.label}</p>
              <p className="text-sm text-gray-800">
                Confidence: {(report.confidence * 100).toFixed(0)}%
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800">Questionnaire Score</h3>
              <p className="text-xl text-black">{report.questionnaireScore} / {report.maxScore}</p>
              <p className="text-sm text-gray-900">
                Severity: {report.severity || calculateSeverity(report.questionnaireScore, report.maxScore)}
              </p>
            </div>
          </div>

          {/* Only show assessment note if available */}
          {report.assessmentNote && (
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-yellow-800">Assessment Note</h3>
              <p>{report.assessmentNote}</p>
              {report.nextSteps && (
                <p className="mt-2 font-medium text-black">{report.nextSteps}</p>
              )}
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-yellow-800">Recommended Actions</h3>
            <ul className="list-disc ml-5 space-y-2">
              {report.recommendations.map((rec, i) => (
                <li key={i} className="text-gray-700">{rec}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-yellow-800">Helpful Resources</h3>
            <div className="space-y-3">
              {report.resources.map((resource, i) => (
                <div key={i} className="border-l-4 border-blue-500 pl-4 py-2">
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium block"
                  >
                    {resource.title}
                  </a>
                  <p className="text-sm text-gray-600">
                    {resource.type} 
                    {resource.description && ` • ${resource.description}`}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Disclaimer:</strong> This assessment is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified health providers with any questions you may have regarding medical conditions.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}