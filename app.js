const API_URL = "http://localhost:3000";

document.addEventListener('DOMContentLoaded', () => {
    // Intercept Registration Form
    const registerForm = document.querySelector('form[action="register.php"]');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = registerForm.querySelector('input[name="username"]').value;
            const email = registerForm.querySelector('input[name="email"]').value;
            const password = registerForm.querySelector('input[name="password"]').value;

            try {
                // Check if email already exists
                const checkRes = await fetch(`${API_URL}/users?email=${encodeURIComponent(email)}`);
                const exists = await checkRes.json();
                if(exists.length > 0) {
                    alert('Email already registered.');
                    return;
                }

                await fetch(`${API_URL}/users`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, email, password })
                });
                alert('Registration successful. You can now log in.');
                registerForm.reset();
                document.getElementById('registerModal').style.display = 'none';
            } catch (error) {
                console.error("Error:", error);
                alert('An error occurred during registration.');
            }
        });
    }

    // Intercept Login Form
    const loginForm = document.querySelector('form[action="login.php"]');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = loginForm.querySelector('input[name="email"]').value;
            const password = loginForm.querySelector('input[name="password"]').value;

            try {
                const res = await fetch(`${API_URL}/users?email=${encodeURIComponent(email)}`);
                const users = await res.json();
                if(users.length > 0 && users[0].password === password) {
                    alert('Login successful! Welcome ' + users[0].username);
                    localStorage.setItem('user', JSON.stringify(users[0]));
                    document.getElementById('loginModal').style.display = 'none';
                    window.location.href = 'home.html';
                } else {
                    alert('Incorrect email or password.');
                }
            } catch (error) {
                console.error("Error:", error);
                alert('An error occurred during login.');
            }
        });
    }

    // Intercept Booking Form
    const bookingForm = document.querySelector('form[action="book_appointment.php"]');
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const fullName = bookingForm.querySelector('input[name="full-name"]').value;
            const email = bookingForm.querySelector('input[name="email"]').value;
            const phone = bookingForm.querySelector('input[name="phone"]').value;
            const date = bookingForm.querySelector('input[name="date"]').value;
            const time = bookingForm.querySelector('input[name="time"]').value;
            const doctor = bookingForm.querySelector('select[name="doctor"]').value;

            try {
                await fetch(`${API_URL}/appointments`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ fullName, email, phone, date, time, doctor })
                });
                alert('Your appointment has been successfully booked with ' + doctor + '!');
                bookingForm.reset();
            } catch (error) {
                console.error("Error:", error);
                alert('An error occurred while booking.');
            }
        });
    }

    // Intercept Contact Form
    const contactForm = document.querySelector('form[action="send_message.php"]');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            const doctor = contactForm.querySelector('select[name="doctor"]').value;
            const subject = contactForm.querySelector('input[name="subject"]').value;
            const message = contactForm.querySelector('textarea[name="message"]').value;

            try {
                await fetch(`${API_URL}/messages`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, doctor, subject, message })
                });
                alert('Message sent successfully. We will get back to you soon.');
                contactForm.reset();
            } catch (error) {
                console.error("Error:", error);
                alert('An error occurred while sending the message.');
            }
        });
    }
});
