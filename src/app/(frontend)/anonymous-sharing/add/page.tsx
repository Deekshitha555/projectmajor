'use client'; // Ensure client-side rendering

import React, { useState } from 'react';
import { FlipWordsDemo } from '../../../../components/actual/flipword';

const AnonymousAdd = () => {
  const [questionText, setQuestionText] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // Function to handle the API call
  const addQuestion = async () => {
    if (!questionText.trim()) {
      setResponseMessage('Question text cannot be empty!');
      return;
    }

    try {
      const res = await fetch('/api/questions/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questionText }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMessage('Question added successfully!');
        setQuestionText(''); // Clear the input field
      } else {
        setResponseMessage(data.error || 'Failed to add question.');
      }
    } catch (error) {
      console.error('Error adding question:', error);
      setResponseMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <FlipWordsDemo />
      <div className="max-w-lg mx-auto mt-10 h-[100vh]">
        <h1 className="text-2xl font-bold mb-4">Share your thought</h1>
        <textarea
          className="w-full p-3 h-48 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your question here..."
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        ></textarea>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition"
          onClick={addQuestion}
        >
          Submit
        </button>
        {responseMessage && (
          <p className="mt-4 text-sm text-gray-700">{responseMessage}</p>
        )}
      </div>

    </div>
  );
};

export default AnonymousAdd;
