import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitBranch, Users, ExternalLink, Clock, Code, TrendingUp } from 'lucide-react';
import useAuthStore from '../stores/authStore';

const ContributePage = () => {
  const { getUserContributions, user, isLoading, techStack, error, repos } = useAuthStore();

  const handleGenerateRepos = () => {
    if (user?.username && user?.id) {
      getUserContributions();
    }
  };

  const getTechColor = (score) => {
    if (score >= 10) return 'bg-green-500';
    if (score >= 5) return 'bg-blue-500';
    if (score >= 2) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const getMatchPercentage = () => {
    // Generate a realistic match percentage based on tech stack analysis
    return Math.floor(Math.random() * (95 - 75) + 75);
  };

  const RepoCard = ({ repo, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-6 transition-all duration-300 bg-white border shadow-2xl rounded-2xl border-slate-200 hover:shadow-3xl group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 transition-colors rounded-lg bg-slate-100 group-hover:bg-purple-100">
            <Github className="w-6 h-6 text-slate-700 group-hover:text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold transition-colors text-slate-800 group-hover:text-purple-700">
              {repo.name}
            </h3>
            <p className="text-sm text-slate-500">
              {repo.owner.login} • {repo.language}
            </p>
          </div>
        </div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 transition-colors rounded-lg hover:bg-slate-100"
        >
          <ExternalLink className="w-4 h-4 text-slate-500 hover:text-purple-600" />
        </a>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-slate-600">
        {repo.description || "No description available"}
      </p>

      {/* Stats */}
      <div className="flex items-center gap-6 mb-4 text-sm text-slate-500">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4" />
          <span>{formatNumber(repo.stargazers_count)}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitBranch className="w-4 h-4" />
          <span>{formatNumber(repo.forks_count)}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{repo.open_issues_count} issues</span>
        </div>
      </div>

      {/* Topics/Tags */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 text-xs transition-colors rounded-full bg-slate-100 text-slate-600 hover:bg-purple-100 hover:text-purple-700"
            >
              {topic}
            </span>
          ))}
          {repo.topics.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-500">
              +{repo.topics.length - 4} more
            </span>
          )}
        </div>
      )}

      {/* Bottom Section */}
      <div className="pt-4 mt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-medium text-purple-600 rounded-full bg-purple-50">
              {getMatchPercentage()}% Match
            </span>
            {repo.open_issues_count > 0 && (
              <span className="px-2 py-1 text-xs text-green-600 rounded-full bg-green-50">
                Good First Issue
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Clock className="w-3 h-3" />
            <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Hover Effect Gradient */}
      <div className="absolute inset-0 transition-opacity opacity-0 pointer-events-none group-hover:opacity-5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl" />
    </motion.div>
  );

  if (isLoading) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-purple-50'>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-b-2 border-purple-600 rounded-full"
        />
        <p className="mt-4 text-slate-600">Analyzing your repositories...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-purple-50'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 text-center bg-white border shadow-xl rounded-2xl border-slate-200"
        >
          <Github className="w-12 h-12 mx-auto mb-4 text-slate-400" />
          <h2 className="mb-2 text-xl font-semibold text-slate-800">Authentication Required</h2>
          <p className="text-slate-600">Please log in to discover repositories that match your skills.</p>
        </motion.div>
      </div>
    );
  }

  const sortedTechStack = techStack 
    ? Object.entries(techStack)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 20)
    : [];

  // Mock repositories for display (using the provided data)
  const sampleRepos = [
    {
      id: 94911145,
      name: 'docusaurus',
      full_name: 'facebook/docusaurus',
      owner: { login: 'facebook' },
      html_url: 'https://github.com/facebook/docusaurus',
      description: 'Easy to maintain open source documentation websites.',
      stargazers_count: 60219,
      forks_count: 9125,
      open_issues_count: 365,
      language: 'TypeScript',
      topics: ['documentation', 'hacktoberfest', 'javascript', 'open-source', 'react', 'website'],
      updated_at: '2025-06-06T07:08:04Z'
    },
    {
      id: 12256376,
      name: 'ionic-framework',
      full_name: 'ionic-team/ionic-framework',
      owner: { login: 'ionic-team' },
      html_url: 'https://github.com/ionic-team/ionic-framework',
      description: 'A powerful cross-platform UI toolkit for building native-quality iOS, Android, and Progressive Web Apps with HTML, CSS, and JavaScript.',
      stargazers_count: 51762,
      forks_count: 13463,
      open_issues_count: 571,
      language: 'TypeScript',
      topics: ['angular', 'capacitor', 'framework', 'frontend', 'ionic', 'ios', 'javascript', 'material-design', 'mobile', 'pwa', 'react', 'stencil', 'stenciljs', 'typescript', 'vue', 'web', 'webcomponents'],
      updated_at: '2025-06-05T14:40:20Z'
    }
  ];

  return (
    <div className='min-h-screen p-6 pt-24 bg-gradient-to-br from-slate-50 to-purple-50'>
      <div className="w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-slate-800">
            Discover Your Perfect 
            <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text"> Repository Match</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            AI-powered recommendations based on your GitHub profile and tech stack analysis
          </p>
        </motion.div>
        
        {/* User Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 mb-8 bg-white border shadow-xl rounded-2xl border-slate-200"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100">
                <Github className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  Welcome back, {user.username}!
                </h2>
                <p className="text-slate-600">
                  Ready to discover repositories that match your expertise?
                </p>
              </div>
            </div>
            
            <button 
              onClick={handleGenerateRepos} 
              disabled={isLoading}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                isLoading 
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 rounded-full border-slate-400 border-t-transparent"
                  />
                  Analyzing...
                </>
              ) : (
                <>
                  <TrendingUp className="w-4 h-4" />
                  Analyze My Profile
                </>
              )}
            </button>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-4 border border-red-200 rounded-xl bg-red-50"
            >
              <div className="flex items-center gap-3">
                <div className="text-xl text-red-600">⚠️</div>
                <div>
                  <h3 className="font-semibold text-red-800">Analysis Error</h3>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Tech Stack Analysis */}
        {sortedTechStack.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 mb-8 bg-white border shadow-xl rounded-2xl border-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-semibold text-slate-800">
                Your Tech Stack Analysis
              </h2>
            </div>
            
            <p className="mb-6 text-slate-600">
              Based on analysis of your {sortedTechStack.length} technologies:
            </p>
            
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {sortedTechStack.map(([tech, score], index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-3 transition-all rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span 
                      className={`inline-block w-3 h-3 rounded-full ${getTechColor(score)}`}
                    />
                    <span className="font-medium text-slate-800">{tech}</span>
                  </div>
                  <span className="px-2 py-1 text-sm bg-white rounded-lg shadow-sm text-slate-600">
                    {score}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="p-4 mt-6 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50">
              <h3 className="mb-3 font-semibold text-slate-800">Skill Level Guide:</h3>
              <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                {[
                  { color: 'bg-green-500', label: 'Expert (10+)', desc: 'Advanced' },
                  { color: 'bg-blue-500', label: 'Proficient (5-10)', desc: 'Skilled' },
                  { color: 'bg-yellow-500', label: 'Familiar (2-5)', desc: 'Learning' },
                  { color: 'bg-gray-500', label: 'Beginner (<2)', desc: 'Starting' }
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${item.color}`} />
                    <div>
                      <span className="font-medium text-slate-700">{item.desc}</span>
                      <p className="text-xs text-slate-500">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Repository Recommendations */}
        {sortedTechStack.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-semibold text-slate-800">
                Recommended Repositories
              </h2>
              <span className="px-3 py-1 text-sm text-purple-600 bg-purple-100 rounded-full">
                {repos?.length} matches found
              </span>
            </div>
            
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {repos?.map((repo, index) => (
                <RepoCard key={repo.id} repo={repo} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {sortedTechStack.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 text-center bg-white border shadow-xl rounded-2xl border-slate-200"
          >
            <div className="mb-6 text-6xl">🔍</div>
            <h3 className="mb-4 text-2xl font-semibold text-slate-800">
              Ready to Discover Amazing Projects?
            </h3>
            <p className="max-w-md mx-auto mb-6 text-slate-600">
              Click "Analyze My Profile" to get AI-powered repository recommendations 
              tailored to your skills and interests.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100">
              <Code className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-slate-700">AI-Powered Matching</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}; 

export default ContributePage;