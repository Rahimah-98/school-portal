const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const feedback = document.getElementById('feedbackMessage');

const showFeedback = (message) => {
  feedback.style.display = 'block';
  feedback.style.background = '#dcfce7';
  feedback.style.color = '#15803d';
  feedback.textContent = message;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  showFeedback('Message sent successfully!');

  form.reset();
});
