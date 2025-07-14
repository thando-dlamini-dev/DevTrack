// templates/dailyReminderEmail.js

export const dailyReminderTemplate = (userData) => {
  const { name, todaysProjects, streak, contributionsThisWeek, motivationalQuote } = userData;
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Daily GitHack Challenge</title>
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
            background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
            padding: 30px;
            text-align: center;
            color: white;
        }
        
        .header-icon {
            font-size: 48px;
            margin-bottom: 10px;
        }
        
        .header-title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 5px;
        }
        
        .header-subtitle {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 30px;
        }
        
        .greeting {
            font-size: 20px;
            font-weight: 600;
            color: #1a202c;
            margin-bottom: 15px;
        }
        
        .stats-row {
            display: flex;
            justify-content: space-around;
            background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
            padding: 20px;
            border-radius: 12px;
            margin: 25px 0;
        }
        
        .stat {
            text-align: center;
        }
        
        .stat-number {
            font-size: 28px;
            font-weight: bold;
            color: #48bb78;
        }
        
        .stat-label {
            font-size: 14px;
            color: #718096;
            margin-top: 5px;
        }
        
        .projects-section {
            margin: 30px 0;
        }
        
        .section-title {
            font-size: 18px;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .project-card {
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 15px;
            transition: all 0.3s ease;
            background: white;
        }
        
        .project-card:hover {
            border-color: #48bb78;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(72, 187, 120, 0.1);
        }
        
        .project-header {
            display: flex;
            justify-content: between;
            align-items: start;
            margin-bottom: 12px;
        }
        
        .project-name {
            font-size: 16px;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 5px;
        }
        
        .project-description {
            font-size: 14px;
            color: #4a5568;
            margin-bottom: 12px;
        }
        
        .project-meta {
            display: flex;
            gap: 15px;
            font-size: 12px;
            color: #718096;
            margin-bottom: 15px;
        }
        
        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 15px;
        }
        
        .tag {
            background: #e6fffa;
            color: #234e52;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 500;
        }
        
        .project-cta {
            display: inline-block;
            background: #48bb78;
            color: white;
            padding: 8px 16px;
            text-decoration: none;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            transition: background 0.2s;
        }
        
        .project-cta:hover {
            background: #38a169;
        }
        
        .motivation-box {
            background: linear-gradient(135deg, #fef5e7 0%, #feb2b2 0%, #fed7d7 100%);
            border-left: 4px solid #f6ad55;
            padding: 20px;
            border-radius: 8px;
            margin: 25px 0;
            text-align: center;
        }
        
        .quote {
            font-style: italic;
            font-size: 16px;
            color: #744210;
            margin-bottom: 8px;
        }
        
        .quote-author {
            font-size: 14px;
            color: #975a16;
            font-weight: 500;
        }
        
        .cta-section {
            text-align: center;
            margin: 30px 0;
        }
        
        .main-cta {
            display: inline-block;
            background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
            color: white;
            padding: 16px 32px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            transition: transform 0.2s;
        }
        
        .main-cta:hover {
            transform: translateY(-2px);
        }
        
        .footer {
            background-color: #f7fafc;
            padding: 25px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }
        
        .footer-text {
            font-size: 14px;
            color: #718096;
        }
        
        .unsubscribe {
            color: #a0aec0;
            text-decoration: none;
            font-size: 12px;
            margin-top: 15px;
            display: inline-block;
        }
        
        @media (max-width: 600px) {
            .container {
                margin: 0 10px;
            }
            
            .header, .content {
                padding: 20px;
            }
            
            .stats-row {
                flex-direction: column;
                gap: 15px;
            }
            
            .project-meta {
                flex-direction: column;
                gap: 5px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="header-icon">🎯</div>
            <div class="header-title">Daily Challenge Ready!</div>
            <div class="header-subtitle">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
        </div>
        
        <div class="content">
            <div class="greeting">Good morning, ${name}! ☀️</div>
            
            <div class="stats-row">
                <div class="stat">
                    <div class="stat-number">${streak}</div>
                    <div class="stat-label">Day Streak</div>
                </div>
                <div class="stat">
                    <div class="stat-number">${contributionsThisWeek}</div>
                    <div class="stat-label">This Week</div>
                </div>
                <div class="stat">
                    <div class="stat-number">${todaysProjects.length}</div>
                    <div class="stat-label">Today's Picks</div>
                </div>
            </div>
            
            ${motivationalQuote ? `
            <div class="motivation-box">
                <div class="quote">"${motivationalQuote.text}"</div>
                <div class="quote-author">— ${motivationalQuote.author}</div>
            </div>
            ` : ''}
            
            <div class="projects-section">
                <div class="section-title">
                    🚀 Today's Curated Projects
                </div>
                
                ${todaysProjects.map(project => `
                <div class="project-card">
                    <div class="project-name">${project.name}</div>
                    <div class="project-description">${project.description}</div>
                    
                    <div class="project-meta">
                        <span>⭐ ${project.stars} stars</span>
                        <span>🍴 ${project.forks} forks</span>
                        <span>📝 ${project.openIssues} open issues</span>
                        <span>📊 Difficulty: ${project.difficulty}</span>
                    </div>
                    
                    <div class="project-tags">
                        ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                    </div>
                    
                    <a href="${project.url}" class="project-cta">
                        View Project →
                    </a>
                </div>
                `).join('')}
            </div>
            
            <div class="cta-section">
                <a href="https://githack.dev/dashboard" class="main-cta">
                    View Full Dashboard 📊
                </a>
            </div>
            
            <div style="font-size: 14px; color: #4a5568; margin-top: 25px;">
                <strong>💡 Pro Tip:</strong> Start with the project that has the most "good first issue" tags. These are perfect for getting familiar with the codebase!
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-text">
                Keep up the amazing work! Every contribution makes the open source community stronger.
            </div>
            
            <a href="https://githack.dev/unsubscribe" class="unsubscribe">
                Unsubscribe from daily reminders
            </a>
        </div>
    </div>
</body>
</html>
  `;
};