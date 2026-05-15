// MOBILE MENU
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// -----------------------
//  HOME PAGE
// -----------------------
const enrollBtn = document.getElementById('enrollBtn');
const successMessage = document.getElementById('successMessage');
const summaryCard = document.getElementById('summaryCard');
const errorMessage = document.getElementById('errorMessage');

const studentName = document.getElementById('studentName');
const studentAge = document.getElementById('studentAge');
const studentGrade = document.getElementById('studentGrade');

const summaryName = document.getElementById('summaryName');
const summaryAge = document.getElementById('summaryAge');
const summaryGrade = document.getElementById('summaryGrade');

enrollBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (
    studentName.value.trim() !== '' &&
    studentAge.value.trim() !== '' &&
    studentGrade.value.trim() !== ''
  ) {
    const student = {
      name: studentName.value,
      age: studentAge.value,
      grade: studentGrade.value,
    };

    summaryName.textContent = student.name;
    summaryAge.textContent = student.age;
    summaryGrade.textContent = student.grade;

    successMessage.textContent = `🎉 Welcome ${student.name} to Aurora Academy!`;

    successMessage.style.display = 'block';
    summaryCard.style.display = 'block';

    studentName.value = '';
    studentAge.value = '';
    studentGrade.value = '';

    console.log(student);
  } else {
    errorMessage.textContent = 'Please fill in all required fields.';
    errorMessage.style.display = 'block';
    return;
  }
});
