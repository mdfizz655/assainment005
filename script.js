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




// 3. Render Cards
function renderIssues(issues) {
    const container 
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
= document.getElementById('issues-container');
    const countDisplay = document.getElementById('issue-count');
    container.innerHTML = '';
    countDisplay.innerText = `${issues.length} Issues`;

    issues.forEach(issue => {
        // Status color logic (Open = Green, Closed = Purple)
        const isClosed = issue.status?.toLowerCase() === 'closed';
        const borderClass = isClosed ? 'border-t-[#8b5cf6]' : 'border-t-[#22c55e]';

        const card = document.createElement('div');
        card.className = `bg-white p-5 rounded-lg border-t-4 ${borderClass} shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between`;
        
        // Card Click Event
        card.onclick = () => fetchSingleIssue(issue._id || issue.id);

        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start mb-2">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-red-50 text-red-500 uppercase border border-red-100">${issue.priority || 'High'}</span>
                    <span class="text-[10px] text-gray-400">${new Date(issue.createdAt).toLocaleDateString()}</span>
                </div>
                <h3 class="font-bold text-[#1e293b] text-sm leading-tight mb-2 line-clamp-2">${issue.title}</h3>
                <p class="text-xs text-gray-500 line-clamp-2 mb-4">${issue.description}</p>
            </div>
            <div class="space-y-3">
                <div class="flex flex-wrap gap-2">
                    <span class="text-[9px] bg-red-50 text-red-400 px-2 py-0.5 rounded border border-red-100 font-bold"><i class="fas fa-bug"></i> BUG</span>
                    <span class="text-[9px] bg-orange-50 text-orange-400 px-2 py-0.5 rounded border border-orange-100 font-bold"><i class="fas fa-circle-info"></i> HELP WANTED</span>
                </div>
                <div class="pt-3 border-t border-gray-50 flex items-center gap-2">
                    <span class="text-[10px] text-gray-400">#1 by ${issue.author}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}
