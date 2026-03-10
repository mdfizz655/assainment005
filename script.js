// Configuration
const API_BASE_URL = "https://phi-lab-server.vercel.app/api/v1/lab";
let allIssues = [];

// Login 01
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if(user === 'admin' && pass === 'admin123') {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        fetchAllIssues(); 
    } else {
        alert('Invalid Credentials! (admin / admin123)');
    }
});