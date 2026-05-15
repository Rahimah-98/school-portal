"use strict";

var contactDisplay = document.getElementById('contactDisplay');
var showEmailBtn = document.getElementById('showEmail');
var showPhoneBtn = document.getElementById('showPhone');
var hideContactBtn = document.getElementById('hideContact');
var statusInput = document.getElementById('statusInput');
var updateStatusBtn = document.getElementById('updateStatus');
var studentStatus = document.getElementById('studentStatus');
showEmailBtn.addEventListener('click', function () {
  contactDisplay.innerHTML = "\n    <div>\n      <h3>Email Address</h3>\n      <p>rahimah.ansari@email.com</p>\n    </div>\n  ";
});
showPhoneBtn.addEventListener('click', function () {
  contactDisplay.innerHTML = "\n    <div>\n      <h3>Phone Number</h3>\n      <p>+91 300 1234567</p>\n    </div>\n  ";
});
hideContactBtn.addEventListener('click', function () {
  contactDisplay.textContent = 'Contact information is hidden.';
});
updateStatusBtn.addEventListener('click', function () {
  var newStatus = statusInput.value.trim();

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
//# sourceMappingURL=profile.dev.js.map
