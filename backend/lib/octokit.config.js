import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_REPO_TOKEN, // optional for higher rate limit
});

const getUserContributions = async (username) => {
  try {
    const { data: events } = await octokit.activity.listPublicEventsForUser({
      username,
      per_page: 100, // Max 100 events per page
    });

    const contributions = events.map(event => ({
      type: event.type,
      repo: event.repo.name,
      date: event.created_at,
    }));

    console.log(`Recent contributions by ${username}:`);
    console.log(contributions);
  } catch (error) {
    console.error("Error fetching contributions:", error);
  }
}

export default getUserContributions;