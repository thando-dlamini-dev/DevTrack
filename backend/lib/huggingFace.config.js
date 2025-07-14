import { InferenceClient } from "@huggingface/inference";

const huggingFaceInstance = async (prompt) => {
  try {
    if (!process.env.HF_TOKEN) {
      throw new Error("HuggingFace token is not configured");
    }

    const client = new InferenceClient(process.env.HF_TOKEN);
    const chatCompletion = await client.chatCompletion({
      provider: process.env.HF_PROVIDER,
      model: process.env.HF_MODEL,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return chatCompletion.choices[0].message;
  } catch (error) {
    console.error(`Error in huggingFaceInstance function: ${error}`);
    throw new Error("Failed to generate contribution repos");
  }
};

export const generateContributionRepos = async (techStack, userProfile, repos) => {
  try {
    // Fixed: Pass repos parameter to prompt instead of undefined variable
    const prompt = `You are a contribution suggestion bot. A user has a profile ${JSON.stringify(userProfile)}. They are an expert in ${JSON.stringify(techStack)}. Here are GitHub repos: ${JSON.stringify(repos)}. Based on the profile, recommend the best fitting repos for contribution.
    Return an array of the best fitting repo objects in this format: {
        "url": "" The exact same URL as the repo,
        "description": "A short description of the repo",
        "reason": "A reason why this repo fits their profile best"
    }. In each repo, return the fields of the URL, a short description of the repo and a reason why it fits their profile best. If the repo doesn't fit the profile, return null.`;
    
    const response = await huggingFaceInstance(prompt);
    return response;
  } catch (error) {
    console.error(`Error in generateContributionRepos function: ${error}`);
    throw new Error("Failed to generate contribution repos");
  }
};