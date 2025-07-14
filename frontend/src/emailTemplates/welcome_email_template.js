// templates/welcomeEmail.js

export const welcomeEmailTemplate = (userData) => {
  const { name, githubUsername, techStack } = userData;
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to GitHack</title>
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
            background: rgb(73, 73, 73);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }
        
        .logo {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        .header-subtitle {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .greeting {
            font-size: 24px;
            font-weight: 600;
            color: #1a202c;
            margin-bottom: 20px;
        }
        
        .text {
            font-size: 16px;
            color: #4a5568;
            margin-bottom: 20px;
        }
        
        .highlight-box {
            background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
            border-left: 4px solid #667eea;
            padding: 20px;
            margin: 30px 0;
            border-radius: 8px;
        }
        
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 15px;
        }
        
        .tech-tag {
            background: #667eea;
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
        }
        
        .cta-button {
            display: inline-block;
            background: rgb(26, 32, 44);
            color: white;
            padding: 16px 32px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            margin: 20px 0;
            transition: transform 0.2s;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
        }
        
        .features {
            display: grid;
            gap: 20px;
            margin: 30px 0;
        }
        
        .feature {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .feature-icon {
            width: 40px;
            height: 40px;
            background: rgb(26, 32, 44);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            flex-shrink: 0;
        }
        
        .feature-text {
            font-size: 15px;
            color: #4a5568;
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
            margin-bottom: 10px;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
        }
        
        .social-link {
            color: #667eea;
            text-decoration: none;
            font-weight: 500;
        }
        
        @media (max-width: 600px) {
            .container {
                margin: 0 10px;
            }
            
            .header, .content {
                padding: 30px 20px;
            }
            
            .greeting {
                font-size: 20px;
            }
            
            .tech-stack {
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">🚀 GitHack</div>
            <div class="header-subtitle">Your Gateway to Open Source Contributions</div>
        </div>
        
        <div class="content">
            <div class="greeting">Welcome aboard, ${name}! 👋</div>
            
            <div class="text">
                We're thrilled to have you join the GitHack community! Your journey into meaningful open source contributions starts now.
            </div>
            
            <div class="highlight-box">
                <strong>🎯 Your Profile Setup:</strong>
                <br><br>
                <strong>GitHub:</strong> @${githubUsername}
                <br>
                <strong>Tech Stack:</strong>
                <div class="tech-stack">
                    ${techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="text">
                Based on your tech stack, we'll curate daily project recommendations that match your skills and interests. Get ready to make your mark on the open source world!
            </div>
            
            <div class="features">
                <div class="feature">
                    <div class="feature-icon">📊</div>
                    <div class="feature-text">
                        <strong>AI-Powered Matching:</strong> Get personalized project recommendations based on your skills and interests.
                    </div>
                </div>
                
                <div class="feature">
                    <div class="feature-icon">📈</div>
                    <div class="feature-text">
                        <strong>Progress Tracking:</strong> Watch your contribution journey with beautiful analytics and insights.
                    </div>
                </div>
                
                <div class="feature">
                    <div class="feature-icon">🎯</div>
                    <div class="feature-text">
                        <strong>Daily Challenges:</strong> Receive curated projects every day to keep your contribution streak alive.
                    </div>
                </div>
            </div>
            
            <div style="text-align: center;">
                <a href="https://githack.dev/dashboard" class="cta-button">
                    Start Contributing Today →
                </a>
            </div>
            
            <div class="text">
                <strong>What's next?</strong>
                <br>
                • Check your dashboard for today's recommended projects
                <br>
                • Set your contribution goals and preferences
                <br>
                • Join our community Discord for support and networking
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-text">
                Questions? Just reply to this email or reach out to our support team.
            </div>
            
            <div class="social-links">
                <a href="https://github.com/githack" class="social-link">GitHub</a>
                <a href="https://twitter.com/githack" class="social-link">Twitter</a>
                <a href="https://discord.gg/githack" class="social-link">Discord</a>
            </div>
            
            <div class="footer-text" style="margin-top: 20px;">
                GitHack - Connecting developers with meaningful open source contributions
                <br>
                <a href="https://githack.dev/unsubscribe" style="color: #a0aec0; text-decoration: none;">Unsubscribe</a>
            </div>
        </div>
    </div>
</body>
</html>
  `;
};