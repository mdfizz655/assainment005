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



// 4. Single Issue 
async function fetchSingleIssue(id) {
    if (!id) return;
    toggleLoader(true);
    try {
        const response = await fetch(`${API_BASE_URL}/issue/${id}`);
        const result = await response.json();
        const issue = result.data ? result.data : result;

        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-content');

        
        modalBody.innerHTML = `
            <h2 class="text-3xl font-bold text-[#111827] mb-4">${issue.title}</h2>
            
            <div class="flex items-center gap-3 mb-6 text-[#6b7280] text-sm font-medium">
                <span class="px-3 py-1 bg-[#059669] text-white rounded-full text-xs font-bold capitalize">${issue.status || 'Opened'}</span>
                <span>•</span>
                <span>Opened by <b class="text-gray-700">${issue.author}</b></span>
                <span>•</span>
                <span>${new Date(issue.createdAt).toLocaleDateString()}</span>
            </div>
            
            <div class="flex gap-2 mb-8">
                <span class="px-2 py-1 bg-[#fff1f2] text-[#f43f5e] rounded-lg border border-[#fecdd3] text-[11px] font-bold flex items-center gap-1">
                    <i class="fas fa-bug text-[10px]"></i> BUG
                </span>
                <span class="px-2 py-1 bg-[#fffbeb] text-[#d97706] rounded-lg border border-[#fef3c7] text-[11px] font-bold flex items-center gap-1">
                    <i class="fas fa-circle-info text-[10px]"></i> HELP WANTED
                </span>
            </div>

            <p class="text-[#4b5563] leading-relaxed mb-10 text-[16px]">
                ${issue.description}
            </p>

            <div class="grid grid-cols-2 gap-4 bg-[#f9fafb] p-6 rounded-xl border border-gray-100">
                <div>
                    <p class="text-[#9ca3af] text-xs font-semibold mb-1 uppercase tracking-wider">Assignee:</p>
                    <p class="font-bold text-[#111827] text-lg">${issue.author}</p>
                </div>
                <div>
                    <p class="text-[#9ca3af] text-xs font-semibold mb-1 uppercase tracking-wider">Priority:</p>
                    <span class="px-4 py-1.5 bg-[#ef4444] text-white rounded-lg text-[11px] font-bold uppercase">
                        ${issue.priority || 'HIGH'}
                    </span>
                </div>
            </div>
        `;
        modal.classList.remove('hidden');
    } catch (err) {
        console.error("Modal Error:", err);
        alert
    } finally {
        toggleLoader(false);
    }

    }


    