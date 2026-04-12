import connectToDB from "../../../../utils/connectTodb";
import Question from "../../../../models/Question";

export async function POST(req) {
  try {
    // Connect to the database
    await connectToDB();

    // Parse the request body
    const { questionText } = await req.json();

    if (!questionText) {
      return new Response(JSON.stringify({ error: "Question text is required" }), {
        status: 400,
      });
    }

    // Create a new question document
    const newQuestion = await Question.create({ questionText });

    return new Response(JSON.stringify({ success: true, question: newQuestion }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error adding question:", error);
    return new Response(JSON.stringify({ error: "Failed to add question" }), {
      status: 500,
    });
  }
}
