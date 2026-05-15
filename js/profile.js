const contactDisplay = document.getElementById('contactDisplay');
const showEmailBtn = document.getElementById('showEmail');
const showPhoneBtn = document.getElementById('showPhone');
const hideContactBtn = document.getElementById('hideContact');
const statusInput = document.getElementById('statusInput');
const updateStatusBtn = document.getElementById('updateStatus');
const studentStatus = document.getElementById('studentStatus');

showEmailBtn.addEventListener('click', () => {
  contactDisplay.innerHTML = `
    <div>
      <h3>Email Address</h3>
      <p>rahimah.ansari@email.com</p>
    </div>
  `;
});

showPhoneBtn.addEventListener('click', () => {
  contactDisplay.innerHTML = `
    <div>
      <h3>Phone Number</h3>
      <p>+91 300 1234567</p>
    </div>
  `;
});

hideContactBtn.addEventListener('click', () => {
  contactDisplay.textContent = 'Contact information is hidden.';
});

updateStatusBtn.addEventListener('click', () => {
  const newStatus = statusInput.value.trim();
  if (newStatus !== '') {
    studentStatus.textContent = newStatus;
    if (newStatus.toLowerCase() === 'active') {
      studentStatus.style.background = '#dcfce7';
      studentStatus.style.color = '#15803d';
    } else {
      studentStatus.style.background = '#fee2e2';
      studentStatus.style.color = '#b91c1c';
    }
    statusInput.value = '';
  }
});
