const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Simple user database (in real applications, this would be a proper database)
const users = [
    { id: 1, username: 'admin', password: 'password123' },
    { id: 2, username: 'user', password: 'user123' }
];

// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Find user in our "database"
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Return success response with user info (excluding password)
        res.json({
            success: true,
            message: 'Login successful',
            user: {
                id: user.id,
                username: user.username
            }
        });
    } else {
        // Return error response
        res.status(401).json({
            success: false,
            message: 'Invalid credentials'
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});