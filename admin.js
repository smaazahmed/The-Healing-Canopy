const API_URL = "http://localhost:3000";

// Handle Admin Login
const adminLoginForm = document.getElementById('adminLoginForm');
if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const doctorEmail = document.getElementById('doctorEmail').value;
        const password = document.getElementById('adminPassword').value;
        const errorMsg = document.getElementById('loginError');

        try {
            const response = await fetch(`${API_URL}/doctors?email=${encodeURIComponent(doctorEmail)}`);
            const doctors = await response.json();

            if (doctors.length > 0 && doctors[0].password === password) {
                // Login success
                localStorage.setItem('admin_doctor', JSON.stringify(doctors[0]));
                window.location.href = 'admin_dashboard.html';
            } else {
                errorMsg.style.display = 'block';
            }
        } catch (error) {
            console.error("Login error:", error);
            errorMsg.textContent = "Failed to connect to the server.";
            errorMsg.style.display = 'block';
        }
    });
}

// Handle Dashboard Logic
const currentDoctor = JSON.parse(localStorage.getItem('admin_doctor'));

if (window.location.pathname.includes('admin_dashboard.html')) {
    if (!currentDoctor) {
        window.location.href = 'admin_login.html';
    } else {
        document.getElementById('doctorNameDisplay').textContent = currentDoctor.name;
        loadDashboardData();
    }
}

function logoutAdmin() {
    localStorage.removeItem('admin_doctor');
    window.location.href = 'admin_login.html';
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');

    const titles = {
        'appointments': 'My Appointments',
        'messages': 'Contact Messages',
        'users': 'Registered Users'
    };
    document.getElementById('tabTitle').textContent = titles[tabId];
}

async function loadDashboardData() {
    try {
        // Load Appointments for current doctor
        const apptRes = await fetch(`${API_URL}/appointments?doctor=${encodeURIComponent(currentDoctor.name)}`);
        const appointments = await apptRes.json();
        const apptTbody = document.getElementById('appointmentsTableBody');
        apptTbody.innerHTML = '';
        appointments.forEach(app => {
            apptTbody.innerHTML += `
                <tr>
                    <td>${app.id}</td>
                    <td>${app.fullName}</td>
                    <td>${app.email}</td>
                    <td>${app.phone}</td>
                    <td>${app.date}</td>
                    <td>${app.time}</td>
                </tr>
            `;
        });

        // Load Messages
        const msgRes = await fetch(`${API_URL}/messages?doctor=${encodeURIComponent(currentDoctor.name)}`);
        const messages = await msgRes.json();
        const msgTbody = document.getElementById('messagesTableBody');
        msgTbody.innerHTML = '';
        messages.forEach(msg => {
            msgTbody.innerHTML += `
                <tr>
                    <td>${msg.id}</td>
                    <td>${msg.name}</td>
                    <td>${msg.email}</td>
                    <td>${msg.subject}</td>
                    <td>${msg.message}</td>
                </tr>
            `;
        });

        // Load Users
        const usersRes = await fetch(`${API_URL}/users`);
        const users = await usersRes.json();
        const usersTbody = document.getElementById('usersTableBody');
        usersTbody.innerHTML = '';
        users.forEach(user => {
            usersTbody.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                </tr>
            `;
        });
    } catch (error) {
        console.error("Error loading dashboard data:", error);
    }
}
