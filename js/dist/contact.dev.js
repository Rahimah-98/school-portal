"use strict";

var form = document.querySelector('form');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');
var feedback = document.getElementById('feedbackMessage');

var showFeedback = function showFeedback(message) {
  feedback.style.display = 'block';
  feedback.style.background = '#dcfce7';
  feedback.style.color = '#15803d';
  feedback.textContent = message;
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var message = messageInput.value.trim();
  showFeedback('Message sent successfully!');
  form.reset();
});
//# sourceMappingURL=contact.dev.js.map
