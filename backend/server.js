import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import session from "express-session";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from 'url';
import emailRoutes from "./routes/email.route.js";
import authRoutes from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import { initDatabase } from './lib/db.config.js';
import { initializePassPort } from "../backend/lib/passport.config.js";
import passport from "passport";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({limit: "500mb"}));
app.use(cookieParser());

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  }
}));

//Initialize Passport
initializePassPort();
app.use(passport.initialize());

initDatabase();

//routes

// app.use("/api/repos", RepoRoutes)
app.use("/api/emails", emailRoutes)
app.use("/api/auth", authRoutes)

app.listen(PORT, async () => {
    console.log(`Server running on port: ${PORT}`);
    console.log(`Server started at: ${new Date}`);
})

