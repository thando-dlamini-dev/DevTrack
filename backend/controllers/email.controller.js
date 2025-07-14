import { sendWelcomeEmail, sendDailyReminderEmail, sendWeeklyProgressEmail, sendAchievementEmail } from "../lib/nodeMailer.config.js";


export const WelcomeEmail = async (req, res) => {
    try {
        const { user } = req.body;
        const response = await sendWelcomeEmail(user);
        res.status(200).json({
            success: true,
            message: "Welcome email sent successfully",
            response
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error sending welcome email",
            error
        })
    }
}

export const DailyReminderEmail = async (req, res) => {
    try {
        const { user } = req.body;
        const response = await sendDailyReminderEmail(user);

        res.status(200).json({
            success: true,
            message: "Daily reminder email sent successfully",
            response
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error sending daily reminder email",
            error
        })
    }
}

export const WeeklyProgressEmail = async (req, res) => {
    try {
        const { user, progressData } = req.body;
        const response = await sendWeeklyProgressEmail(user, progressData);

        res.status(200).json({
            success: true,
            message: "Weekly progress email sent successfully",
            response
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error sending weekly progress email",
            error
        })
    }
}

export const AchievementEmail = async (req, res) => {
    try {
        const { user, achievementData } = req.body;
        const response = await sendAchievementEmail(user, achievementData);

        res.status(200).json({
            success: true,
            message: "Achievement email sent successfully",
            response
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error sending achievement email",
            error
        })
    }
}
