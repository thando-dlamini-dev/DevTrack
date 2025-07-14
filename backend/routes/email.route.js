import { Router } from "express";
import { WelcomeEmail, DailyReminderEmail, WeeklyProgressEmail, AchievementEmail } from "../controllers/email.controller.js";

const route  = Router();

route.post("/send-email/welcome", WelcomeEmail);
route.post("/send-email/daily-reminder", DailyReminderEmail);
route.post("/send-email/weekly-progress", WeeklyProgressEmail);
route.post("/send-email/achievement", AchievementEmail);

export default route