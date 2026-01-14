// ===== Imports =====
const express = require('express');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const winston = require('winston');

// ===== App Setup =====
const app = express();
app.use(express.json());
app.use(helmet());

// ===== Winston Logger (Week 3) =====
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'security.log' })
    ]
});

// ===== Mock Database =====
const users = [];

// ===== Register Route (Week 2) =====
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (!validator.isEmail(email)) {
        logger.warn('Invalid email format during registration');
        return res.status(400).json({ message: 'Invalid email format' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });

    logger.info(`User registered: ${email}`);
    res.json({ message: 'User registered securely' });
});

// ===== Login Route (Week 2) =====
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) {
        logger.warn(`Login failed: User not found (${email})`);
        return res.status(401).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        logger.warn(`Login failed: Invalid password (${email})`);
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
        { email: user.email },
        'your-secret-key',
        { expiresIn: '1h' }
    );

    logger.info(`User logged in: ${email}`);
    res.json({ token });
});

// ===== Start Server =====
app.listen(4000, () => {
    logger.info('Server running on port 4000');
});
