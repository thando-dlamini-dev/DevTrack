// templates/achievementEmail.js

export const achievementEmailTemplate = (userData) => {
  const { name, achievement, userStats, nextMilestone } = userData;
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Achievement Unlocked! 🏆</title>
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
            background: linear-gradient(135deg, #f6ad55 0%, #ed8936 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,0.1) 10px,
                rgba(255,255,255,0.1) 20px
            );
            animation: shine 3s linear infinite;
        }
        
        @keyframes shine {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        
        .header-content {
            position: relative;
            z-index: 1;
        }
        
        .achievement-icon {
            font-size: 72px;
            margin-bottom: 15px;
            animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-20px);
            }
            60% {
                transform: translateY(-10px);
            }
        }
        
        .header-title {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .header-subtitle {
            font-size: 18px;
            opacity: 0.9;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .celebration-text {
            text-align: center;
            font-size: 24px;
            font-weight: 600;
            color: #1a202c;
            margin-bottom: 30px;
        }
        
        .achievement-card {
            background: linear-gradient(135deg, #fefcbf 0%, #faf089 100%);
            border: 3px solid #d69e2e;
            border-radius: 16px;
            padding: 30px;
            text-align: center;
            margin: 30px 0;
            box-shadow: 0 8px 25px rgba(214, 158, 46, 0.3);
        }
        
        .achievement-badge {
            font-size: 64px;
            margin-bottom: 20px;
        }
        
        .achievement-title {
            font-size: 24px;
            font-weight: bold;
            color: #744210;
            margin-bottom: 10px;
        }
        
        .achievement-description {
            font-size: 16px;
            color: #975a16;
            margin-bottom: 20px;
        }
        
        .achievement-rarity {
            display: inline-block;
            background: #ed8936;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
        }
        
        .stats-section {
            background: linear-gradient(135deg, #e6fffa 0%, #b2f5ea 100%);
            border-radius: 12px;
            padding: 25px;
            margin: 30px 0;
        }
        
        .stats-title {
            font-size: 18px;
            font-weight: 600;
            color: #234e52;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 15px;
        }
        
        .stat-item {
            text-align: center;
            background: white;
            padding: 15px;
            border-radius: 8px;
            border: 2px solid transparent;
            transition: all 0.3s ease;
        }
        
        .stat-item:hover {
            border-color: #4fd1c7;
            transform: translateY(-2px);
        }
        
        .stat-number {
            font-size: 24px;
            font-weight: bold;
            color: #319795;
        }
        
        .stat-label {
            font-size: 12px;
            color: #2c7a7b;
            margin-top: 5px;
        }
        
        .milestone-section {
            background: linear-gradient(135deg, #fed7d7 0%, #feb2b2 100%);
            border-radius: 12px;
            padding: 25px;
            margin: 30px 0;
            text-align: center;
        }
        
        .milestone-title {
            font-size: 18px;
            font-weight: 600;
            color: #742a2a;
            margin-bottom: 15px;
        }
        
        .milestone-description {
            font-size: 15px;
            color: #9c4221;
            margin-bottom: 20px;
        }
        
        .progress-bar {
            background: #fed7d7;
            height: 8px;
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 10px;
        }
        
        .progress-fill {
            background: linear-gradient(90deg, #f56565, #e53e3e);
            height: 100%;
            border-radius: 4px;
            transition: width 0.3s ease;
        }
        
        .progress-text {
            font-size: 14px;
            color: #742a2a;
            font-weight: 500;
        }
        
        .share-section {
            background: #f7fafc;
            border-radius: 12px;
            padding: 25px;
            text-align: center;
            margin: 30px 0;
        }
        
        .share-title {
            font-size: 18px;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 15px;
        }
        
        .share-buttons {
            display: flex;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
        }
        
        .share-button {
            display: inline-block;
            padding: 10px 20px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
            transition: transform 0.2s;
        }
        
        .share-button:hover {
            transform: translateY(-2px);
        }
        
        .share-twitter {
            background: #1da1f2;
            color: white;
        }
        
        .share-linkedin {
            background: #0077b5;
            color: white;
        }
        
        .share-github {
            background: #333;
            color: white;
        }
        
        .cta-section {
            text-align: center;
            margin: 35px 0;
        }
        
        .main-cta {
            display: inline-block;
            background: linear-gradient(135deg, #f6ad55 0%, #ed8936 100%);
            color: white;
            padding: 16px 32px;
            text-decoration: none;
            border-radius: 10px;
            font-weight: 600;
            font-size: 16px;
            transition: transform 0.2s;
            box-shadow: 0 4px 15px rgba(246, 173, 85, 0.4);
        }
        
        .main-cta:hover {
            transform: translateY(-2px);
        }
        
        .motivational-quote {
            background: linear-gradient(135deg, #e6fffa 0%, #b2f5ea 100%);
            border-left: 4px solid #4fd1c7;
            padding: 20px;
            border-radius: 8px;
            font-style: italic;
            color: #234e52;
            text-align: center;
            margin: 25px 0;
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
            
            .achievement-icon {
                font-size: 56px;
            }
            
            .header-title {
                font-size: 24px;
            }
            
            .celebration-text {
                font-size: 20px;
            }
            
            .share-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .stats-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="header-content">
                <div class="achievement-icon">🏆</div>
                <div class="header-title">Achievement Unlocked!</div>
                <div class="header-subtitle">You've reached a new milestone</div>
            </div>
        </div>
        
        <div class="content">
            <div class="celebration-text">
                Congratulations, ${name}! 🎉
            </div>
            
            <div class="achievement-card">
                <div class="achievement-badge">${achievement.icon}</div>
                <div class="achievement-title">${achievement.title}</div>
                <div class="achievement-description">${achievement.description}</div>
                <div class="achievement-rarity">${achievement.rarity} Achievement</div>
            </div>
            
            <div class="stats-section">
                <div class="stats-title">Your Current Stats</div>
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number">${userStats.totalContributions}</div>
                        <div class="stat-label">Total Contributions</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${userStats.currentStreak}</div>
                        <div class="stat-label">Current Streak</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${userStats.repositoriesHelped}</div>
                        <div class="stat-label">Repos Helped</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${userStats.achievementsUnlocked}</div>
                        <div class="stat-label">Achievements</div>
                    </div>
                </div>
            </div>
            
            ${nextMilestone ? `
            <div class="milestone-section">
                <div class="milestone-title">🎯 Next Milestone</div>
                <div class="milestone-description">${nextMilestone.description}</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${nextMilestone.progress}%"></div>
                </div>
                <div class="progress-text">${nextMilestone.current} / ${nextMilestone.target} (${nextMilestone.progress}%)</div>
            </div>
            ` : ''}
            
            <div class="share-section">
                <div class="share-title">Share Your Achievement!</div>
                <div class="share-buttons">
                    <a href="https://twitter.com/intent/tweet?text=I%20just%20unlocked%20the%20'${encodeURIComponent(achievement.title)}'%20achievement%20on%20GitHack!%20%F0%9F%8F%86%20%23OpenSource%20%23GitHack" class="share-button share-twitter">
                        🐦 Share on Twitter
                    </a>
                    <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://githack.dev" class="share-button share-linkedin">
                        💼 Share on LinkedIn
                    </a>
                    <a href="https://github.com" class="share-button share-github">
                        💻 View on GitHub
                    </a>
                </div>
            </div>
            
            <div class="motivational-quote">
                "Every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown." 
                <br><strong>— Keep contributing, keep growing!</strong>
            </div>
            
            <div class="cta-section">
                <a href="https://githack.dev/achievements" class="main-cta">
                    View All Achievements 🏆
                </a>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-text">
                Keep up the amazing work! Your contributions are making a real difference in the open source community.
            </div>
            
            <a href="https://githack.dev/unsubscribe" class="unsubscribe">
                Unsubscribe from achievement notifications
            </a>
        </div>
    </div>
</body>
</html>
  `;
};