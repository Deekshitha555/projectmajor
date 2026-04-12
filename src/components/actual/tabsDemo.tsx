"use client"
import { Tabs } from "../ui/tabs";
import { useState } from "react";
interface QuestionProps {
  answers: Record<string, string[]>;
  handleCheckboxChange: (question: keyof Answers, option: string) => void;
}

type Answers = Record<string, string[]>;
export function TabsDemo() {
  const [answers, setAnswers] = useState<Answers>({
    question3: [],
    question10: [],
  });


  const handleCheckboxChange = (question: keyof Answers, value: string) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = { ...prevAnswers };
      if (updatedAnswers[question].includes(value)) {
        updatedAnswers[question] = updatedAnswers[question].filter((item) => item !== value);
      } else {
        updatedAnswers[question].push(value);
      }
      return updatedAnswers;
    });
  };

  const Results: React.FC<{ answers: Answers }> = ({ answers }) => {
    const question3Answers = answers.question3;

    const handleRedirection = (answer: string) => {
      if (answer === "Relaxing Music") return "/features/music";
      if (answer === "Guided Meditation") return "/features/meditation";
      if (answer === "Breathing Exercises") return "/features/breathing-exercise";
      if (answer === "Stress Relief Yoga") return "/features/yoga";
      if (answer === "Mindfulness Activities") return "/features/mindful-activities";
      if (answer === "Healthy Recipes") return "/features/healthy-recipes";

      return "/";
    };

    return (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>According to Your Answers</p>
        <div className="mt-5">
          <div>
            {question3Answers.length === 0 ? (
              <span>No responses selected</span>
            ) : (
              <>
                <p className="mt-5">Try these for relaxation:</p>
                <div className="mt-2 space-y-2">
                  {question3Answers.map((answer, index) => (
                    <div key={index}>
                      <a
                        href={handleRedirection(answer)}
                        className="text-blue-500 hover:underline"
                      >
                        {answer}
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };
  const tabs = [
    {
      title: "Question 1",
      value: "question1",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>How often do you feel stressed or overwhelmed in your daily life?</p>
          <Question1 />
        </div>
      ),
    },
    {
      title: "Question 2",
      value: "question2",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>What are the most common stressors in your life? (Select all that apply)</p>
          <Question2 />
        </div>
      ),
    },
    {
      title: "Question 3",
      value: "question3",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>What strategies do you use to cope with stress? (Select all that apply)</p>
          <Question3 answers={answers} handleCheckboxChange={handleCheckboxChange} />
        </div>
      ),
    },
    {
      title: "Question 4",
      value: "question4",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Which of the following activities help you relax after a stressful day? (Select all that apply)</p>
          <Question4 />
        </div>
      ),
    },
    {
      title: "Question 5",
      value: "question5",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>What triggers your stress the most in your day-to-day activities? (Select all that apply)</p>
          <Question5 />
        </div>
      ),
    },
    {
      title: "Question 6",
      value: "question6",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>What types of environments make you feel more stressed? (Select all that apply)</p>
          <Question6 />
        </div>
      ),
    },
    {
      title: "Question 7",
      value: "question7",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Which of these emotions do you often experience when you are stressed? (Select all that apply)</p>
          <Question7 />
        </div>
      ),
    },
    {
      title: "Question 8",
      value: "question8",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>When you are feeling stressed, which of the following would help you feel better? (Select all that apply)</p>
          <Question8 />
        </div>
      ),
    },
    {
      title: "Question 9",
      value: "question9",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>What activities do you engage in to prevent stress from building up in your life? (Select all that apply)</p>
          <Question9 />
        </div>
      ),
    },
    {
      title: "Question 10",
      value: "question10",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>How often do you feel that stress negatively impacts your mental or physical health? (Select all that apply)</p>
          <Question10/>
        </div>
      ),
      
    },
    {
      title: "Results",
      value: "results",
      content: <Results answers={answers} />,
    },
  
  ];
  return (
    <div className="h-[20rem] mobile:h-[40rem] [perspective:1000px] relative flex flex-col items-center justify-center w-full sm:w-[80%] md:w-[800px] my-20 ">
      <Tabs tabs={tabs} />
    </div>
  );
}  

// Question Components
const Question1 = () => {
  return (
    <div className="flex flex-col mt-8">
      <label className="flex items-center mr-4">
        <input type="checkbox" className="mr-2 h-10 w-5" value="never" /> Never
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2 h-10 w-5" value="occasionally" /> Occasionally
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2 h-10 w-5" value="frequently" /> Frequently
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2 h-10 w-5" value="almost_always" /> Almost Always
      </label>
    </div>
  );
};

const Question2 = () => {
  return (
    <div className="flex flex-col mt-8">
      <label className="flex items-center mr-4">
        <input type="checkbox" className="mr-2 h-10 w-5" /> Work/Study pressure
      </label>
      <label className="flex items-center mr-4">
        <input type="checkbox" className="mr-2 h-10 w-5" /> Personal life challenges
      </label>
      <label className="flex items-center mr-4">
        <input type="checkbox" className="mr-2 h-10 w-5" /> Health-related concerns
      </label>
      <label className="flex items-center mr-4">
        <input type="checkbox" className="mr-2 h-10 w-5" /> Family and relationships
      </label>
      <label className="flex items-center mr-4">
        <input type="checkbox" className="mr-2 h-10 w-5" /> Financial issues
      </label>
      <label className="flex items-center mr-4">
        <input type="checkbox" className="mr-2 h-10 w-5" /> Lack of personal time
      </label>
      <label className="flex items-center mr-4">
        <input type="checkbox" className="mr-2 h-10 w-5" /> External expectations
      </label>
    </div>
  );
};

const Question3: React.FC<QuestionProps> = ({ answers, handleCheckboxChange }) => {
  const options = [
    "Relaxing Music",
    "Guided Meditation",
    "Breathing Exercises",
    "Stress Relief Yoga",
    "Mindfulness Activities",
    "Healthy Recipes",
    "Daily Motivation",
    "Fitness",
    "Sleeping Better",
    "Wellness Webinars",
    "Spiritual Connections",
    "Others (please specify)"
  ];

  return (
    <div className="flex flex-col mt-8">
      {options.map((option, idx) => (
        <label key={idx} className="flex items-center mr-4">
          <input
            type="checkbox"
            className="mr-2 h-10 w-5"
            checked={answers.question3.includes(option)}
            onChange={() => handleCheckboxChange("question3", option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

const Question4 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Reading a book
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Watching movies or shows
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Taking a walk outdoors
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Listening to calming music
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Meditating or practicing mindfulness
      </label>
    </div>
  );
};

const Question5 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Tight deadlines
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Lack of work-life balance
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Poor health or illness
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Conflicts with others
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Financial uncertainty
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Personal doubts or lack of confidence
      </label>
    </div>
  );
};

const Question6 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Workplaces with high noise levels
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Crowded public spaces
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Messy or cluttered environments
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> High-pressure social situations
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Environments with little privacy or personal space
      </label>
    </div>
  );
};

const Question7 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Anxiety
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Irritability
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Exhaustion
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Overwhelm
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Restlessness
      </label>
    </div>
  );
};

const Question8 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Listening to calming music
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Taking a break outdoors
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Engaging in physical exercise
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Talking to a friend or family member
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Practicing mindfulness
      </label>
    </div>
  );
};

const Question9 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Regular exercise routines
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Meditation and mindfulness practices
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Time management techniques
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Having a strong support system
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Personal hobbies or creative outlets
      </label>
    </div>
  );
};

const Question10 = () => {
  return (
    <div className="flex flex-col mt-5">
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Rarely
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Sometimes
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Often
      </label>
      <label>
        <input type="checkbox" className="mr-2 h-10 w-5" /> Always
      </label>
    </div>
  );
};



