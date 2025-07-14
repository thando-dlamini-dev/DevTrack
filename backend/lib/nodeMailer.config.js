import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { welcomeEmailTemplate } from "../../frontend/src/emailTemplates/welcome_email_template.js";
import { achievementEmailTemplate } from "../../frontend/src/emailTemplates/achievement_email_template.js";
import { dailyReminderTemplate } from "../../frontend/src/emailTemplates/daily_reminder_template.js";
import { weeklyProgressTemplate } from "../../frontend/src/emailTemplates/weekly_progress_template.js";

dotenv.config();

// Create transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASS
    }
});

// Email templates mapping
const emailTemplates = {
    welcome: welcomeEmailTemplate,
    achievement: achievementEmailTemplate,
    dailyReminder: dailyReminderTemplate,
    weeklyProgress: weeklyProgressTemplate
};

// Email subjects mapping
const emailSubjects = {
    welcome: (userData) => `Welcome to our platform, ${userData.name}!`,
    achievement: (userData) => `Congratulations on your achievement, ${userData.name}!`,
    dailyReminder: (userData) => `Daily coding reminder for ${userData.name}`,
    weeklyProgress: (userData) => `Your weekly progress report, ${userData.name}`
};

// Get template by type
const getTemplateByType = (type, userData) => {
    const template = emailTemplates[type];
    if (!template) {
        throw new Error(`Email template '${type}' not found`);
    }
    return template(userData);
};

// Generic send email function
export const sendEmail = async (to, subject, htmlContent, textContent = null) => {
    try {
        const mailOptions = {
            from: process.env.NODEMAILER_EMAIL,
            to: to,
            subject: subject,
            html: htmlContent,
            text: textContent || 'Please enable HTML to view this email properly.'
        };

        console.log('Sender: ', process.env.NODEMAILER_EMAIL);

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
        console.log('Message ID:', info.messageId);
        console.log('Response:', info.response);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: error.message };
    }
};

// Send welcome email
export const sendWelcomeEmail = async (user) => {
    try {
        const userData = {
            name: user.name,
            githubUsername: user.githubUsername,
            techStack: user.techStack
        };
        
        const htmlContent = getTemplateByType('welcome', userData);
        const subject = emailSubjects['welcome'](userData);
        
        return await sendEmail(user.email, subject, htmlContent);
    } catch (error) {
        console.error('Error sending welcome email:', error);
        return { success: false, error: error.message };
    }
};

// Send achievement email
export const sendAchievementEmail = async (user, achievementData) => {
    try {
        const userData = {
            name: user.name,
            githubUsername: user.githubUsername,
            techStack: user.techStack,
            ...achievementData
        };
        
        const htmlContent = getTemplateByType('achievement', userData);
        const subject = emailSubjects['achievement'](userData);
        
        return await sendEmail(user.email, subject, htmlContent);
    } catch (error) {
        console.error('Error sending achievement email:', error);
        return { success: false, error: error.message };
    }
};

// Send daily reminder email
export const sendDailyReminderEmail = async (user) => {
    try {
        const userData = {
            name: user.name,
            githubUsername: user.githubUsername,
            techStack: user.techStack
        };
        
        const htmlContent = getTemplateByType('dailyReminder', userData);
        const subject = emailSubjects['dailyReminder'](userData);
        
        return await sendEmail(user.email, subject, htmlContent);
    } catch (error) {
        console.error('Error sending daily reminder email:', error);
        return { success: false, error: error.message };
    }
};

// Send weekly progress email
export const sendWeeklyProgressEmail = async (user, progressData) => {
    try {
        const userData = {
            name: user.name,
            githubUsername: user.githubUsername,
            techStack: user.techStack,
            ...progressData
        };
        
        const htmlContent = getTemplateByType('weeklyProgress', userData);
        const subject = emailSubjects['weeklyProgress'](userData);
        
        return await sendEmail(user.email, subject, htmlContent);
    } catch (error) {
        console.error('Error sending weekly progress email:', error);
        return { success: false, error: error.message };
    }
};

// Test email function
export const sendTestEmail = async (to = 'dlamininkosi210@gmail.com') => {
    const subject = 'Test Email from Node.js';
    const htmlContent = `
        <h2>Test Email</h2>
        <p>Hello! This is a test email sent from Node.js using Nodemailer.</p>
        <p>If you're receiving this, your email configuration is working correctly!</p>
    `;
    const textContent = 'Hello! This is a test email sent from Node.js using Nodemailer.';
    
    return await sendEmail(to, subject, htmlContent, textContent);
};

// Verify transporter configuration
export const verifyEmailConfig = () => {
    return new Promise((resolve, reject) => {
        transporter.verify((error, success) => {
            if (error) {
                console.log('Transporter verification failed:', error);
                reject(error);
            } else {
                console.log('Server is ready to take our messages');
                resolve(success);
            }
        });
    });
};

// Initialize and verify configuration on module load
verifyEmailConfig().catch(error => {
    console.error('Email service initialization failed:', error);
});