"use client"
import { useState } from "react";

type Recipe = {
  name: string;
  ingredients: string[];
  process: string;
};

export default function HealthCalculator() {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const recipes: Recipe[] = [
    {
      name: "Avocado Toast",
      ingredients: [
        "1 slice of whole-grain bread",
        "1/2 avocado",
        "Salt and pepper to taste",
        "Lemon juice (optional)",
      ],
      process: "Toast the bread. Mash the avocado and spread it on the toast. Sprinkle with salt, pepper, and lemon juice if desired.",
    },
    {
      name: "Greek Yogurt with Berries",
      ingredients: [
        "1 cup Greek yogurt",
        "1/2 cup fresh berries (blueberries, strawberries, etc.)",
        "1 tbsp honey",
        "1 tbsp chia seeds (optional)",
      ],
      process: "Mix the yogurt with honey. Top with fresh berries and chia seeds for added nutrition.",
    },
    {
      name: "Grilled Salmon Salad",
      ingredients: [
        "1 fillet of salmon",
        "Mixed greens",
        "1/2 avocado",
        "1 tbsp olive oil",
        "Lemon juice",
      ],
      process: "Grill the salmon. Toss the mixed greens with olive oil and lemon juice. Top with salmon and sliced avocado.",
    },
    // Add more recipes here
  ];

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    setBmi(parseFloat(bmiValue.toFixed(1)));

    let bmiCategory = "";
    let rec: string[] = [];
    if (bmiValue < 18.5) {
      bmiCategory = "Underweight";
      rec = [
        "Calorie Intake: 2500 kcal/day",
        "Water Intake: 2.5 liters/day",
        "Step Count: 8,000 steps/day",
        "Exercise Time: 30 minutes/day of light activity",
      ];
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      bmiCategory = "Normal Weight";
      rec = [
        "Calorie Intake: 2000 kcal/day",
        "Water Intake: 3 liters/day",
        "Step Count: 10,000 steps/day",
        "Exercise Time: 30-45 minutes/day of moderate activity",
      ];
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      bmiCategory = "Overweight";
      rec = [
        "Calorie Intake: 1800 kcal/day",
        "Water Intake: 3 liters/day",
        "Step Count: 12,000 steps/day",
        "Exercise Time: 45-60 minutes/day of moderate to intense activity",
      ];
    } else {
      bmiCategory = "Obese";
      rec = [
        "Calorie Intake: 1500 kcal/day",
        "Water Intake: 3.5 liters/day",
        "Step Count: 12,000+ steps/day",
        "Exercise Time: 60+ minutes/day of intense activity",
      ];
    }

    setCategory(bmiCategory);
    setRecommendations(rec);
  };

  return (
    <div className="p-6  min-h-screen">
      <div className="max-w-md mx-auto bg-gray-200 p-6 rounded-lg shadow-lg mt-10">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 ">
          <h2 className="text-2xl font-bold text-center text-black">Health Calculator</h2>
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
          <button
            onClick={calculateBMI}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Calculate
          </button>
        </form>
      </div>

      {bmi && (
        <div className="mt-6 max-w-md mx-auto bg-gray-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold  text-black">Results</h3>
          <p className="mt-2  text-black">
            Your BMI is <span className="font-bold">{bmi}</span>, which is categorized as{" "}
            <span className="font-bold">{category}</span>.
          </p>
          <ul className="mt-4 space-y-2">
            {recommendations.map((rec, i) => (
              <li key={i} className="p-2 bg-gray-100 rounded  text-black">{rec}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-2xl font-bold text-center">🍳 Healthy Recipes 🍎</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {recipes.map((recipe, i) => (
            <div
              key={i}
              className="bg-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition text-black"
            >
              <h4 className="text-lg font-extrabold">📖 {recipe.name}</h4>
              <p className="mt-4 font-bold">🍴 <strong>Ingredients:</strong></p>
              <ul className="list-disc ml-6 mt-2 text-gray-800">
                {recipe.ingredients.map((ingredient, j) => (
                  <li key={j} className="mb-1">✅ {ingredient}</li>
                ))}
              </ul>
              <p className="mt-4 font-bold">🥄 <strong>Process:</strong></p>
              <p className="mt-2 text-gray-800">{recipe.process}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-center mb-6">🌟 Manage Stress Through Food 🌟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Foods to Eat */}
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-700 mb-4">🥗 Foods to Eat</h3>
            <ul className="list-disc pl-6 text-green-900 space-y-2">
              <li>🍌 Bananas: Rich in potassium and magnesium, which help regulate stress levels and improve mood.</li>
              <li>🌱 Chia seeds :  High in omega-3 fatty acids, which reduce cortisol and inflammation.</li>
              <li>🍫 Dark chocolate : Contains antioxidants and compounds that lower stress hormone levels and boost serotonin.</li>
              <li>🫒 Extra virgin olive oil : Packed with healthy fats that support brain health and reduce inflammation.</li>
              <li>🌾 Flaxseed : A great source of lignans and omega-3s that combat stress and promote hormonal balance.</li>
              <li>🥛 Kefir : Contains probiotics that improve gut health and reduce stress and anxiety.</li>
              <li>🍹 Kombucha : Fermented drink rich in probiotics, which aid in gut health and lower cortisol.</li>
              <li>🥣 Fortified cereal : Provides essential B vitamins and iron to combat fatigue and reduce stress.</li>
              <li>🍲 Lentils : High in folate and magnesium, which improve serotonin production and reduce stress.</li>
              <li>🥄 Oatmeal : A complex carbohydrate that boosts serotonin levels and provides sustained energy.</li>
            </ul>
          </div>

          {/* Foods to Avoid */}
          <div className="bg-red-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-red-700 mb-4">🚫 Foods to Avoid</h3>
            <ul className="list-disc pl-6 text-red-900 space-y-2">
              <li>🍷 Alcohol: Initially reduces anxiety but acts as a depressant.</li>
              <li>☕ Caffeine: Stimulates the nervous system, causing jitteriness.</li>
              <li>🍬 High-sugar foods: Causes blood sugar spikes and crashes.</li>
              <li>🍟 Trans fats: Found in fried foods and linked to mood swings.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
