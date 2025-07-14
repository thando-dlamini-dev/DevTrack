// templates/weeklyProgressEmail.js

export const weeklyProgressTemplate = (userData) => {
  const { 
    name, 
    weeklyStats, 
    topContributions, 
    achievements, 
    nextWeekGoals,
    communityStats,
    personalBests
  } = userData;
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Weekly GitHack Progress</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8fafc;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #6b46c1 0%, #9333ea 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
            position: relative;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20"><defs><radialGradient id="a" cx="50%" cy="0%" r="100%"><stop offset="0%" stop-color="white" stop-opacity="0.1"/><stop offset="100%" stop-color="white" stop-opacity="0"/></radialGradient></defs><rect width="100" height="20" fill="url(%23a)"/></svg>');
        }
        
        .header-content {
            position: relative;
            z-index: 1;
        }
        
        .header-icon {
            font-size: 48px;
            margin-bottom: 15px;
        }
        
        .header-title {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 8px;
        }
        
        .header-subtitle {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .greeting {
            font-size: 22px;
            font-weight: 600;
            color: #1a202c;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .summary-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
        
        .stat-card {
            background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            border: 2px solid transparent;
            transition: all 0.3s ease;
        }
        
        .stat-card:hover {
            border-color: #6b46c1;
            transform: translateY(-2px);
        }
        
        .stat-number {
            font-size: 32px;
            font-weight: bold;
            color: #6b46c1;
            margin-bottom: 5px;
        }
        
        .stat-label {
            font-size: 14px;
            color: #4a5568;
            font-weight: 500;
        }
        
        .section {
            margin: 35px 0;
        }
        
        .section-title {
            font-size: 20px;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .achievement-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
        }
        
        .achievement {
            background: linear-gradient(135deg, #fefcbf 0%, #faf089 100%);
            border: 2px solid #d69e2e;
            border-radius: 12px;
            padding: 20px;
            text-align: center;
        }
        
        .achievement-icon {
            font-size: 36px;
            margin-bottom: 10px;
        }
        
        .achievement-title {
            font-size: 16px;
            font-weight: 600;
            color: #744210;
            margin-bottom: 5px;
        }
        
        .achievement-desc {
            font-size: 14px;
            color: #975a16;
        }
        
        .contribution-list {
            space-y: 15px;
        }
        
        .contribution-item {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 15px;
            transition: all 0.3s ease;
        }
        
        .contribution-item:hover {
            border-color: #6b46c1;
            box-shadow: 0 4px 12px rgba(107, 70, 193, 0.1);
        }
        
        .contribution-header {
            display: flex;
            justify-content: between;
            align-items: start;
            margin-bottom: 10px;
        }
        
        .repo-name {
            font-size: 16px;
            font-weight: 600;
            color: #2d3748;
        }
        
        .contribution-type {
            font-size: 12px;
            background: #6b46c1;
            color: white;
            padding: 4px 8px;
            border-radius: 12px;
            font-weight: 500;
        }
        
        .contribution-desc {
            font-size: 14px;
            color: #4a5568;
            margin-bottom: 10px;
        }
        
        .contribution-meta {
            font-size: 12px;
            color: #718096;
        }
        
        .goals-list {
            background: linear-gradient(135deg, #e6fffa 0%, #b2f5ea 100%);
            border-radius: 12px;
            padding: 25px;
        }
        
        .goal-item {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
            font-size: 15px;
            color: #234e52;
        }
        
        .goal-item:last-child {
            margin-bottom: 0;
        }
        
        .community-section {
            background: linear-gradient(135deg, #fef5e7 0%, #fed7aa 100%);
            border-radius: 12px;
            padding: 25px;
            text-align: center;
        }
        
        .community-title {
            font-size: 18px;
            font-weight: 600;
            color: #7c2d12;
            margin-bottom: 15px;
        }
        
        .community-stats {
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
        }
        
        .community-stat {
            text-align: center;
        }
        
        .community-stat-number {
            font-size: 24px;
            font-weight: bold;
            color: #ea580c;
        }
        
        .community-stat-label {
            font-size: 12px;
            color: #9a3412;
        }
        
        .cta-section {
            text-align: center;
            margin: 35px 0;
        }
        
        .main-cta {
            display: inline-block;
            background: linear-gradient(135deg, #6b46c1 0%, #9333ea 100%);
            color: white;
            padding: 16px 32px;
            text-decoration: none;
            border-radius: 10px;
            font-weight: 600;
            font-size: 16px;
            transition: transform 0.2s;
        }
        
        .main-cta:hover {
            transform: translateY(-2px);
        }
        
        .footer {
            background-color: #f7fafc;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }
        
        .footer-text {
            font-size: 14px;
            color: #718096;
            margin-bottom: 15px;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 15px;
        }
        
        .social-link {
            color: #6b46c1;
            text-decoration: none;
            font-weight: 500;
        }
        
        .unsubscribe {
            color: #a0aec0;
            text-decoration: none;
            font-size: 12px;
        }
        
        @media (max-width: 600px) {
            .container {
                margin: 0 10px;
            }
            
            .header, .content {
                padding: 30px 20px;
            }
            
            .summary-stats {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .achievement-grid {
                grid-template-columns: 1fr;
            }
            
            .community-stats {
                flex-direction: column;
                gap: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="header-content">
                <div class="header-icon">📊</div>
                <div class="header-title">Weekly Progress Report</div>
                <div class="header-subtitle">Week of ${new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString()} - ${new Date().toLocaleDateString()}</div>
            </div>
        </div>
        
        <div class="content">
            <div class="greeting">Amazing work this week, ${name}! 🎉</div>
            
            <div class="summary-stats">
                <div class="stat-card">
                    <div class="stat-number">${weeklyStats.contributions}</div>
                    <div class="stat-label">Contributions</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${weeklyStats.repositories}</div>
                    <div class="stat-label">Repositories</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${weeklyStats.linesOfCode}</div>
                    <div class="stat-label">Lines of Code</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${weeklyStats.issuesClosed}</div>
                    <div class="stat-label">Issues Closed</div>
                </div>
            </div>
            
            ${achievements && achievements.length > 0 ? `
            <div class="section">
                <div class="section-title">
                    🏆 New Achievements Unlocked
                </div>
                <div class="achievement-grid">
                    ${achievements.map(achievement => `
                    <div class="achievement">
                        <div class="achievement-icon">${achievement.icon}</div>
                        <div class="achievement-title">${achievement.title}</div>
                        <div class="achievement-desc">${achievement.description}</div>
                    </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}
            
            <div class="section">
                <div class="section-title">
                    ⭐ Top Contributions This Week
                </div>
                <div class="contribution-list">
                    ${topContributions.map(contrib => `
                    <div class="contribution-item">
                        <div class="contribution-header">
                            <div class="repo-name">${contrib.repository}</div>
                            <div class="contribution-type">${contrib.type}</div>
                        </div>
                        <div class="contribution-desc">${contrib.description}</div>
                        <div class="contribution-meta">
                            ${contrib.language} • ${contrib.date} • ${contrib.impact}
                        </div>
                    </div>
                    `).join('')}
                </div>
            </div>
            
            ${personalBests && Object.keys(personalBests).length > 0 ? `
            <div class="section">
                <div class="section-title">
                    🎯 Personal Bests
                </div>
                <div class="goals-list">
                    ${Object.entries(personalBests).map(([key, value]) => `
                    <div class="goal-item">
                        <span>🔥</span>
                        <span><strong>${key}:</strong> ${value}</span>
                    </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}
            
            <div class="section">
                <div class="community-section">
                    <div class="community-title">Community Impact</div>
                    <div class="community-stats">
                        <div class="community-stat">
                            <div class="community-stat-number">${communityStats.rank}</div>
                            <div class="community-stat-label">Your Rank</div>
                        </div>
                        <div class="community-stat">
                            <div class="community-stat-number">${communityStats.percentile}%</div>
                            <div class="community-stat-label">Top Percentile</div>
                        </div>
                        <div class="community-stat">
                            <div class="community-stat-number">${communityStats.helpedProjects}</div>
                            <div class="community-stat-label">Projects Helped</div>
                        </div>
                    </div>
                    <div style="font-size: 14px; color: #7c2d12;">
                        You're making a real difference in the open source community! 🌟
                    </div>
                </div>
            </div>
            
            <div class="section">
                <div class="section-title">
                    🎯 Next Week's Goals
                </div>
                <div class="goals-list">
                    ${nextWeekGoals.map(goal => `
                    <div class="goal-item">
                        <span>🎯</span>
                        <span>${goal}</span>
                    </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="cta-section">
                <a href="https://githack.dev/dashboard" class="main-cta">
                    View Detailed Analytics 📈
                </a>
            </div>
            
            <div style="font-size: 14px; color: #4a5568; text-align: center; margin-top: 25px; padding: 20px; background: #f7fafc; border-radius: 8px;">
                <strong>💡 Weekly Tip:</strong> Try contributing to a new technology this week to expand your skill set and discover exciting projects!
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-text">
                Keep up the incredible momentum! Your contributions are making the open source world better.
            </div>
            
            <div class="social-links">
                <a href="https://github.com/githack" class="social-link">GitHub</a>
                <a href="https://twitter.com/githack" class="social-link">Twitter</a>
                <a href="https://discord.gg/githack" class="social-link">Discord</a>
            </div>
            
            <a href="https://githack.dev/unsubscribe" class="unsubscribe">
                Unsubscribe from weekly reports
            </a>
        </div>
    </div>
</body>
</html>
  `;
};