// Temporary in-memory storage for early testing until MongoDB is connected
const users = [];

const register = async (req, res) => {
    const { name, email, password, role } = req.body;
    // Skeleton logic
    res.status(201).json({ message: "User registered successfully (Mock)", user: { name, email, role } });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    // Skeleton logic
    res.status(200).json({ message: "Login successful (Mock)", token: "mock_token" });
};

const getProfile = async (req, res) => {
    res.status(200).json({ message: "Profile fetched (Mock)", user: req.user });
};

module.exports = { register, login, getProfile };
