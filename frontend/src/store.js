export const store = {
            user: {
                name: 'John Doe',
                email: 'john.doe@dartech.com',
                avatar: 'https://i.pravatar.cc/150?img=11',
                level: 12,
                xp: 4250,
                streak: 5,
                memberSince: '2024-01-15'
            },
            
            courses: [
                {
                    id: 1,
                    title: 'Full-Stack Web Development',
                    instructor: 'Dr. Sarah Johnson',
                    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
                    progress: 65,
                    totalLessons: 48,
                    completedLessons: 31,
                    category: 'Development',
                    color: 'red',
                    status: 'in-progress',
                    lastAccessed: '2 hours ago',
                    rating: 4.8,
                    students: 1250,
                    duration: '24h 30m',
                    description: 'Master modern web development with React, Node.js, and MongoDB.'
                },
                {
                    id: 2,
                    title: 'Data Science & Machine Learning',
                    instructor: 'Prof. Michael Chen',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
                    progress: 20,
                    totalLessons: 60,
                    completedLessons: 12,
                    category: 'Data Science',
                    color: 'blue',
                    status: 'in-progress',
                    lastAccessed: '1 day ago',
                    rating: 4.9,
                    students: 890,
                    duration: '32h 15m',
                    description: 'Learn Python, pandas, scikit-learn, and deep learning fundamentals.'
                },
                {
                    id: 3,
                    title: 'Cybersecurity Fundamentals',
                    instructor: 'James Wilson',
                    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
                    progress: 0,
                    totalLessons: 35,
                    completedLessons: 0,
                    category: 'Security',
                    color: 'indigo',
                    status: 'not-started',
                    lastAccessed: 'Never',
                    rating: 4.7,
                    students: 650,
                    duration: '18h 45m',
                    description: 'Master the basics of cybersecurity, ethical hacking, and network security.'
                },
                {
                    id: 4,
                    title: 'Artificial Intelligence',
                    instructor: 'Dr. Emily Brown',
                    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
                    progress: 45,
                    totalLessons: 52,
                    completedLessons: 23,
                    category: 'AI',
                    color: 'purple',
                    status: 'in-progress',
                    lastAccessed: '3 days ago',
                    rating: 4.9,
                    students: 1100,
                    duration: '28h 20m',
                    description: 'Deep dive into neural networks, NLP, and computer vision.'
                },
                {
                    id: 5,
                    title: 'Mobile App Development',
                    instructor: 'Alex Rivera',
                    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
                    progress: 0,
                    totalLessons: 40,
                    completedLessons: 0,
                    category: 'Mobile',
                    color: 'green',
                    status: 'not-started',
                    lastAccessed: 'Never',
                    rating: 4.6,
                    students: 720,
                    duration: '22h 00m',
                    description: 'Build iOS and Android apps with React Native.'
                },
                {
                    id: 6,
                    title: 'Cloud Computing with AWS',
                    instructor: 'Lisa Park',
                    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
                    progress: 10,
                    totalLessons: 45,
                    completedLessons: 4,
                    category: 'Cloud',
                    color: 'amber',
                    status: 'in-progress',
                    lastAccessed: '5 days ago',
                    rating: 4.8,
                    students: 980,
                    duration: '26h 30m',
                    description: 'Master AWS services, deployment, and cloud architecture.'
                }
            ],

            assignments: [
                {
                    id: 1,
                    title: 'Build Responsive Navbar',
                    course: 'Full-Stack Web Development',
                    dueDate: '2024-10-26',
                    dueText: 'Today',
                    dueColor: 'red',
                    status: 'pending',
                    type: 'coding',
                    description: 'Create a fully responsive navigation bar using Flexbox and CSS Grid.',
                    points: 100,
                    submitted: false
                },
                {
                    id: 2,
                    title: 'Data Cleaning Task',
                    course: 'Data Science & Machine Learning',
                    dueDate: '2024-10-27',
                    dueText: 'Tomorrow',
                    dueColor: 'amber',
                    status: 'pending',
                    type: 'analysis',
                    description: 'Clean and preprocess a dataset of 10,000 records using pandas.',
                    points: 150,
                    submitted: false
                },
                {
                    id: 3,
                    title: 'SQL Security Audit',
                    course: 'Cybersecurity Fundamentals',
                    dueDate: '2024-11-02',
                    dueText: 'Next Week',
                    dueColor: 'green',
                    status: 'pending',
                    type: 'security',
                    description: 'Perform a security audit on a given database schema.',
                    points: 200,
                    submitted: false
                },
                {
                    id: 4,
                    title: 'React Hooks Project',
                    course: 'Full-Stack Web Development',
                    dueDate: '2024-11-05',
                    dueText: 'Nov 5',
                    dueColor: 'green',
                    status: 'submitted',
                    type: 'coding',
                    description: 'Build a todo app using React Hooks and Context API.',
                    points: 150,
                    submitted: true,
                    grade: 95
                }
            ],

            quizzes: [
                {
                    id: 1,
                    title: 'JavaScript Fundamentals',
                    course: 'Full-Stack Web Development',
                    questions: 20,
                    time: 30,
                    attempts: 2,
                    bestScore: 85,
                    avgScore: 78,
                    status: 'completed',
                    difficulty: 'Medium'
                },
                {
                    id: 2,
                    title: 'Python Basics',
                    course: 'Data Science & Machine Learning',
                    questions: 25,
                    time: 45,
                    attempts: 1,
                    bestScore: 92,
                    avgScore: 82,
                    status: 'completed',
                    difficulty: 'Easy'
                },
                {
                    id: 3,
                    title: 'React Advanced Patterns',
                    course: 'Full-Stack Web Development',
                    questions: 15,
                    time: 20,
                    attempts: 0,
                    bestScore: null,
                    avgScore: 75,
                    status: 'available',
                    difficulty: 'Hard'
                },
                {
                    id: 4,
                    title: 'Machine Learning Algorithms',
                    course: 'Data Science & Machine Learning',
                    questions: 30,
                    time: 60,
                    attempts: 0,
                    bestScore: null,
                    avgScore: 70,
                    status: 'locked',
                    difficulty: 'Hard',
                    unlockRequirement: 'Complete Lesson 20'
                }
            ],

            messages: [
                {
                    id: 1,
                    sender: 'Dr. Sarah Johnson',
                    avatar: 'https://i.pravatar.cc/150?img=5',
                    preview: 'Great work on your last assignment! I was impressed...',
                    time: '10:30 AM',
                    unread: true,
                    online: true
                },
                {
                    id: 2,
                    sender: 'Prof. Michael Chen',
                    avatar: 'https://i.pravatar.cc/150?img=3',
                    preview: 'Don\'t forget about the quiz tomorrow. Make sure to review...',
                    time: 'Yesterday',
                    unread: true,
                    online: false
                },
                {
                    id: 3,
                    sender: 'Support Team',
                    avatar: 'https://i.pravatar.cc/150?img=8',
                    preview: 'Your ticket #1234 has been resolved. Please let us know...',
                    time: 'Yesterday',
                    unread: false,
                    online: true
                },
                {
                    id: 4,
                    sender: 'Alex Chen',
                    avatar: 'https://i.pravatar.cc/150?img=12',
                    preview: 'Hey! Want to study together for the upcoming exam?',
                    time: '2 days ago',
                    unread: false,
                    online: true
                }
            ],

            notifications: [
                {
                    id: 1,
                    title: 'Assignment Due Soon',
                    message: 'Build Responsive Navbar is due in 3 hours',
                    time: '10 minutes ago',
                    type: 'warning',
                    read: false,
                    icon: 'alert-circle'
                },
                {
                    id: 2,
                    title: 'New Course Material',
                    message: 'New videos added to Full-Stack Web Development',
                    time: '2 hours ago',
                    type: 'info',
                    read: false,
                    icon: 'book-open'
                },
                {
                    id: 3,
                    title: 'Quiz Completed',
                    message: 'You scored 92% on Python Basics. Great job!',
                    time: '5 hours ago',
                    type: 'success',
                    read: true,
                    icon: 'check-circle'
                },
                {
                    id: 4,
                    title: 'Achievement Unlocked',
                    message: 'You earned "Week Warrior" for 7-day streak!',
                    time: '1 day ago',
                    type: 'success',
                    read: true,
                    icon: 'trophy'
                }
            ],

            schedule: [
                {
                    time: '09:00 AM',
                    title: 'Live Session: React Hooks',
                    course: 'Full-Stack Web Development',
                    type: 'live',
                    duration: '1h 30m'
                },
                {
                    time: '02:00 PM',
                    title: 'Assignment Work',
                    course: 'Data Science & ML',
                    type: 'task',
                    duration: '2h'
                },
                {
                    time: '04:30 PM',
                    title: 'Study Group Meeting',
                    course: 'General',
                    type: 'meeting',
                    duration: '1h'
                }
            ],

            achievements: [
                { icon: '🔥', name: '5-Day Streak', desc: 'Study 5 days in a row', unlocked: true },
                { icon: '🎯', name: 'Perfect Score', desc: 'Get 100% on a quiz', unlocked: true },
                { icon: '🚀', name: 'Fast Learner', desc: 'Complete 5 lessons in one day', unlocked: true },
                { icon: '💬', name: 'Helper', desc: 'Answer 10 community questions', unlocked: false }
            ],

            communityPosts: [
                {
                    id: 1,
                    author: 'Maria Garcia',
                    avatar: 'https://i.pravatar.cc/150?img=9',
                    time: '2 hours ago',
                    content: 'Just finished the React Hooks module! The useEffect cleanup section was tricky but really useful. Anyone else find it challenging at first? 🤔',
                    likes: 24,
                    comments: 8,
                    tags: ['React', 'Hooks', 'Help']
                },
                {
                    id: 2,
                    author: 'Alex Chen',
                    avatar: 'https://i.pravatar.cc/150?img=12',
                    time: '4 hours ago',
                    content: 'Sharing my notes on Machine Learning algorithms. Hope this helps someone! 📚 [Link to Notion]',
                    likes: 56,
                    comments: 12,
                    tags: ['MachineLearning', 'Notes', 'Sharing']
                },
                {
                    id: 3,
                    author: 'James Wilson',
                    avatar: 'https://i.pravatar.cc/150?img=3',
                    time: '6 hours ago',
                    content: 'Career advice needed: Should I specialize in frontend or backend? What\'s the market like right now?',
                    likes: 34,
                    comments: 28,
                    tags: ['Career', 'Advice', 'Discussion']
                }
            ]
        };