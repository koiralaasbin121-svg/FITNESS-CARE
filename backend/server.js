const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middlewares
app.use(helmet()); // Set security HTTP headers
app.use(mongoSanitize()); // Data sanitization against NoSQL query injection
app.use(xss()); // Data sanitization against XSS
app.use(hpp()); // Prevent HTTP Parameter Pollution

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use('/api', limiter);

// Standard Middlewares
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5175',
    optionsSuccessStatus: 200
}));
app.use(bodyParser.json({ limit: '10kb' })); // Body limit for security

// Email Configuration
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// API Endpoint to handle form submission
app.post('/api/contact', (req, res) => {
    // Sanitize input explicitly if needed, though mongoSanitize and xss cover most
    const { name, email, interest } = req.body;

    // Validation
    if (!name || !email || !interest) {
        return res.status(400).json({
            status: 'error',
            message: 'Please fill in all fields.'
        });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            status: 'error',
            message: 'Please provide a valid email address.'
        });
    }

    console.log('Valid Form Submission Received:', { name, email, interest });

    // In production, you would uncomment this and use real variables
    /*
    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Fitness Inquiry: ${interest}`,
        text: `Name: ${name}\nEmail: ${email}\nInterest: ${interest}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email Error:', error);
            // Don't leak internal error details to client
            return res.status(500).json({ status: 'error', message: 'Failed to send enquiry.' });
        }
        res.status(200).json({ status: 'success', message: 'Inquiry received!' });
    });
    */

    res.status(200).json({
        status: 'success',
        message: 'Message received! We will contact you shortly.'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});
