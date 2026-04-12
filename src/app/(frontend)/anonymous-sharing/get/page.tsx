'use client';

import React, { useEffect, useState } from 'react';
interface Question {
  _id: string;
  questionText: string;
  votes?: number;
  createdAt?: string;
}
const GetQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const fetchQuestions = async () => {
    try {
      const res = await fetch('/api/questions/get');
      const data = await res.json();

      if (res.ok) {
        setQuestions(data.questions || []);
      } else {
        console.error('Failed to fetch questions:', data.error);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10 h-[100vh]">
      <h2 className="text-2xl font-bold mb-4">Questions</h2>
      {questions.length === 0 ? (
        <p className="text-sm text-gray-600">No questions available.</p>
      ) : (
        <ul className="space-y-4">
          {questions.map((question) => (
            <li
              key={question._id}
              className="p-4 bg-gray-100 text-black border border-gray-300 rounded-lg"
            >
              {question.questionText}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetQuestions;
