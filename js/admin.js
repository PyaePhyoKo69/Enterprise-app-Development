/************************************
 * TAB SWITCHING (FIXED)
 ************************************/
const tabs = document.querySelectorAll('.tab-btn');
const forms = document.querySelectorAll('.auth-form');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.classList.remove('active'));

    tab.classList.add('active');

    if (tab.dataset.tab === 'login') {
      document.getElementById('admin-login-form').classList.add('active');
    }

    if (tab.dataset.tab === 'signup') {
      document.getElementById('admin-signup-form').classList.add('active');
    }
  });
});


/************************************
 * ADMIN AUTH – TEST MODE
 ************************************/

/* ===== SIGN UP ===== */
const signupForm = document.querySelector('#admin-signup-form');

if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = signupForm.querySelector('[name="username"]').value;
    const password = signupForm.querySelector('[name="password"]').value;

    const adminData = { username, password };

    // TEST MODE (fake DB)
    localStorage.setItem('adminUser', JSON.stringify(adminData));

    alert('Admin account created (TEST MODE)');
    signupForm.reset();

    // Auto switch to login
    document.querySelector('[data-tab="login"]').click();

    /* ===== REAL BACKEND (UNCOMMENT LATER) =====
    fetch('/api/admin/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(adminData)
    })
    */
  });
}


/* ===== LOGIN ===== */
const loginForm = document.querySelector('#admin-login-form');

if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = loginForm.querySelector('[name="username"]').value;
    const password = loginForm.querySelector('[name="password"]').value;

    const savedAdmin = JSON.parse(localStorage.getItem('adminUser'));

    if (
      savedAdmin &&
      savedAdmin.username === username &&
      savedAdmin.password === password
    ) {
      localStorage.setItem('loggedInAdmin', username);
      window.location.href = 'admin-dashboard.html';
    } else {
      alert('Invalid username or password');
    }

    /* ===== REAL BACKEND (UNCOMMENT LATER) =====
    fetch('/api/admin/login', {...})
    */
  });
}



