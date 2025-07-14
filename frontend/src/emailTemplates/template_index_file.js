// templates/index.js
// Central export file for all email templates

export { welcomeEmailTemplate } from './welcomeEmail.js';
export { dailyReminderTemplate } from './dailyReminderEmail.js';
export { weeklyProgressTemplate } from './weeklyProgressEmail.js';
export { achievementEmailTemplate } from './achievementEmail.js';

// Template utility functions
export const getTemplateByType = (type, userData) => {
  switch (type) {
    case 'welcome':
      return welcomeEmailTemplate(userData);
    case 'daily-reminder':
      return dailyReminderTemplate(userData);
    case 'weekly-progress':
      return weeklyProgressTemplate(userData);
    case 'achievement':
      return achievementEmailTemplate(userData);
    default:
      throw new Error(`Unknown email template type: ${type}`);
  }
};

// Email subjects for each template type
export const emailSubjects = {
  'welcome': (userData) => `Welcome to GitHack, ${userData.name}! 🚀`,
  'daily-reminder': (userData) => `Your Daily GitHack Challenge is Ready! 🎯`,
  'weekly-progress': (userData) => `${userData.name}, Your Weekly Progress Report 📊`,
  'achievement': (userData) => `Achievement Unlocked: ${userData.achievement.title}! 🏆`
};

// Default user data templates for testing
export const sampleUserData = {
  welcome: {
    name: 'John Doe',
    githubUsername: 'johndoe',
    techStack: ['JavaScript', 'Python', 'React', 'Node.js']
  },
  
  dailyReminder: {
    name: 'John Doe',
    streak: 7,
    contributionsThisWeek: 12,
    motivationalQuote: {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    todaysProjects: [
      {
        name: 'awesome-react-components',
        description: 'A curated list of awesome React components and libraries',
        stars: 1234,
        forks: 234,
        openIssues: 12,
        difficulty: 'Beginner',
        technologies: ['React', 'JavaScript', 'CSS'],
        url: 'https://github.com/example/awesome-react-components'
      },
      {
        name: 'ml-algorithms',
        description: 'Implementation of machine learning algorithms from scratch',
        stars: 2567,
        forks: 445,
        openIssues: 8,
        difficulty: 'Intermediate',
        technologies: ['Python', 'NumPy', 'Scikit-learn'],
        url: 'https://github.com/example/ml-algorithms'
      }
    ]
  },
  
  weeklyProgress: {
    name: 'John Doe',
    weeklyStats: {
      contributions: 15,
      repositories: 5,
      linesOfCode: 847,
      issuesClosed: 3
    },
    achievements: [
      {
        icon: '🔥',
        title: 'Week Warrior',
        description: 'Contributed to projects for 7 consecutive days'
      }
    ],
    topContributions: [
      {
        repository: 'facebook/react',
        type: 'Bug Fix',
        description: 'Fixed memory leak in useEffect hook',
        language: 'JavaScript',
        date: '2 days ago',
        impact: 'High Impact'
      },
      {
        repository: 'microsoft/vscode',
        type: 'Feature',
        description: 'Added new syntax highlighting for GitHack files',
        language: 'TypeScript',
        date: '4 days ago',
        impact: 'Medium Impact'
      }
    ],
    personalBests: {
      'Longest Streak': '14 days',
      'Most Contributions in a Day': '8 contributions',
      'Biggest PR': '234 lines changed'
    },
    communityStats: {
      rank: 142,
      percentile: 85,
      helpedProjects: 23
    },
    nextWeekGoals: [
      'Contribute to 3 new repositories',
      'Close 5 issues',
      'Maintain daily contribution streak',
      'Try a new programming language'
    ]
  },
  
  achievement: {
    name: 'John Doe',
    achievement: {
      icon: '🚀',
      title: 'First Contribution',
      description: 'Made your very first open source contribution!',
      rarity: 'Common'
    },
    userStats: {
      totalContributions: 1,
      currentStreak: 1,
      repositoriesHelped: 1,
      achievementsUnlocked: 1
    },
    nextMilestone: {
      description: 'Reach 10 total contributions',
      current: 1,
      target: 10,
      progress: 10
    }
  }
};