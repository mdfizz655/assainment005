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




// All Issues api 02

async function fetchAllIssues() {
    toggleLoader(true);
    try {
        const response = await fetch(`${API_BASE_URL}/issues`);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const result = await response.json();
        
        allIssues = result.data ? result.data : result;
        
        renderIssues(allIssues);
    } catch (error) {
        console.error("Fetch Error:", error);
        alert
    } finally {
        toggleLoader(false);
    }
}
