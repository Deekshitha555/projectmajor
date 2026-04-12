import connectToDB from "../../../../utils/connectTodb";
import Question from "../../../../models/Question";

export async function GET() {
  try {
    // Connect to the database
    await connectToDB();

    // Fetch all questions from the database
    const questions = await Question.find({}); // Sort by creation date (most recent first)

    return new Response(JSON.stringify({ success: true, questions }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching questions:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch questions" }), {
      status: 500,
    });
  }
}
