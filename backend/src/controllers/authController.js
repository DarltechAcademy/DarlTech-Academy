const generateToken = require('../utils/generateToken');

// Temporary in-memory storage for early testing until MongoDB is connected
const users = [];

const register = async (req, res) => {
    const { name, email, password, role } = req.body;

    const userExists = users.find(u => u.email === email);
    if (userExists) {
        res.status(400);
        throw new Error("User already exists (Mock)");
    }

    const newUser = {
        id: new Date().getTime().toString(),
        name,
        email,
        password, // Not hashing for mock
        role: role || 'Student'
    };

    users.push(newUser);

    res.status(201).json({
        message: "User registered successfully (Mock)",
        user: {
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
        },
        token: generateToken(newUser.id, newUser.role)
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.status(200).json({
            message: "Login successful (Mock)",
            user: {
                _id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token: generateToken(user.id, user.role)
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
};

const getProfile = async (req, res) => {
    res.status(200).json({ message: "Profile fetched (Mock)", user: req.user });
};

module.exports = { register, login, getProfile };
