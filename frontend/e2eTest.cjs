const axios = require('axios');

const API_URL = 'http://localhost:5001/api';
let authToken = '';

async function runTests() {
  console.log('--- Starting API Integration Tests ---');

  // Test 1: Register User
  const mockUser = {
    name: "Test Student " + Math.floor(Math.random() * 10000),
    email: `teststudent${Math.floor(Math.random() * 10000)}@example.com`,
    password: "password123",
    role: "Student",
  };

  try {
    console.log(`\n1. Creating mock user: ${mockUser.email}`);
    const regRes = await axios.post(`${API_URL}/auth/register`, mockUser);
    
    // The auth controller register returns { success, token, user } or similar
    // Just looking at authController's responses, it usually logs you in when registering.
    authToken = regRes.data.token;
    console.log(`✅ Registration Successful! Assigned User ID: ${regRes.data.user._id}`);
    console.log(`✅ Received JWT: ${authToken.substring(0, 30)}...`);
  } catch (err) {
    if (err.response && err.response.status === 400 && err.response.data.message.includes('already exists')) {
        console.log('User already exists, let us login instead!');
    } else {
        console.error('❌ Registration Failed:', err.response?.data || err.message);
        return;
    }
  }

  // Test 2: Login User (If needed or just to verify)
  try {
    console.log(`\n2. Verifying Login for: ${mockUser.email}...`);
    const loginRes = await axios.post(`${API_URL}/auth/login`, {
      email: mockUser.email,
      password: mockUser.password
    });
    
    authToken = loginRes.data.token;
    console.log(`✅ Login Successful!`);
  } catch (err) {
    console.error('❌ Login Failed:', err.response?.data || err.message);
    return;
  }

  // Set the Authorization Header
  const headers = { Authorization: `Bearer ${authToken}` };

  // Test 3: Fetch Available Courses
  let firstCourseId = null;
  try {
    console.log(`\n3. Fetching available course catalog...`);
    const coursesRes = await axios.get(`${API_URL}/courses`);
    const courses = coursesRes.data.data;
    console.log(`✅ Fetched ${courses?.length || 0} courses from the backend database.`);
    
    if (courses && courses.length > 0) {
      firstCourseId = courses[0]._id;
      console.log(`✅ Found test course: [${courses[0].title}]`);
    } else {
      console.log(`⚠️ Warning: No courses exist in the MongoDB database yet! Skipping enrollment test.`);
    }
  } catch (err) {
    console.error('❌ Course Fetch Failed:', err.response?.data || err.message);
  }

  // Test 4: Testing Enrollments (If a course exists)
  if (firstCourseId) {
    try {
      console.log(`\n4. Enrolling the student into course ID: ${firstCourseId}...`);
      const enrollRes = await axios.post(`${API_URL}/enrollments`, { course: firstCourseId }, { headers });
      console.log(`✅ Enrollment Successful! MongoDB recorded the student.`);
    } catch (err) {
       if (err.response && err.response.data.message.includes('already enrolled')) {
           console.log(`✅ Student is already enrolled!`);
       } else {
           console.error('❌ Enrollment Failed:', err.response?.data || err.message);
       }
    }
  }

  console.log('\n--- Full-Stack Flow Test Finished! ---');
}

runTests();
