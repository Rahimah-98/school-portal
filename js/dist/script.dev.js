"use strict";

// MOBILE MENU
var menuBtn = document.getElementById('menuBtn');
var navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
} // -----------------------
//  HOME PAGE
// -----------------------


var enrollBtn = document.getElementById('enrollBtn');
var successMessage = document.getElementById('successMessage');
var summaryCard = document.getElementById('summaryCard');
var errorMessage = document.getElementById('errorMessage');
var studentName = document.getElementById('studentName');
var studentAge = document.getElementById('studentAge');
var studentGrade = document.getElementById('studentGrade');
var summaryName = document.getElementById('summaryName');
var summaryAge = document.getElementById('summaryAge');
var summaryGrade = document.getElementById('summaryGrade');
enrollBtn.addEventListener('click', function (event) {
  event.preventDefault();

  if (studentName.value.trim() !== '' && studentAge.value.trim() !== '' && studentGrade.value.trim() !== '') {
    var student = {
      name: studentName.value,
      age: studentAge.value,
      grade: studentGrade.value
    };
    summaryName.textContent = student.name;
    summaryAge.textContent = student.age;
    summaryGrade.textContent = student.grade;
    successMessage.textContent = "\uD83C\uDF89 Welcome ".concat(student.name, " to Aurora Academy!");
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
//# sourceMappingURL=script.dev.js.map
