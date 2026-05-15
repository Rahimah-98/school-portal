"use strict";

var form = document.getElementById('enrollForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var grade = document.getElementById('grade').value;
  var message = document.getElementById('message');

  if (!name || !age || !grade) {
    message.textContent = 'Please fill all fields!';
    return;
  }

  var student = {
    name: name,
    age: age,
    grade: grade
  };
  message.textContent = "Welcome ".concat(name, " to Bright Future School!");
  document.getElementById('studentInfo').innerHTML = "\n    <p>Name: ".concat(student.name, "</p>\n    <p>Age: ").concat(student.age, "</p>\n    <p>Grade: ").concat(student.grade, "</p>\n  ");
}); // PROFILE

document.getElementById('showEmail').addEventListener('click', function () {
  document.getElementById('contactInfo').textContent = 'Email: amina@mail.com';
});
document.getElementById('showPhone').addEventListener('click', function () {
  document.getElementById('contactInfo').textContent = 'Phone: 123456789';
});
document.getElementById('hideContact').addEventListener('click', function () {
  document.getElementById('contactInfo').textContent = '';
});
document.getElementById('updateStatus').addEventListener('click', function () {
  var newStatus = document.getElementById('newStatus').value;
  document.getElementById('status').textContent = newStatus;
}); //COURSES

var courses = [{
  name: 'Math',
  instructor: 'Mr. Ali',
  grade: '10',
  description: 'Basic algebra and geometry',
  image: 'math.jpg'
}, {
  name: 'Science',
  instructor: 'Ms. Sara',
  grade: '11',
  description: 'Physics and chemistry',
  image: 'science.jpg'
}];
var container = document.getElementById('coursesContainer');

function renderCourses(list) {
  container.innerHTML = '';
  list.forEach(function (course) {
    var card = document.createElement('div');
    card.innerHTML = "\n      <h3>".concat(course.name, "</h3>\n      <p>").concat(course.instructor, "</p>\n      <button \n        data-name=\"").concat(course.name, "\"\n        data-description=\"").concat(course.description, "\"\n      >\n        View Details\n      </button>\n    ");
    container.appendChild(card);
  });
}

renderCourses(courses);
container.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    var name = e.target.dataset.name;
    var desc = e.target.dataset.description;
    document.getElementById('details').innerHTML = "\n      <h2>".concat(name, "</h2>\n      <p>").concat(desc, "</p>\n    ");
  }
});
container.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    var name = e.target.dataset.name;
    var desc = e.target.dataset.description;
    document.getElementById('details').innerHTML = "\n      <h2>".concat(name, "</h2>\n      <p>").concat(desc, "</p>\n    ");
  }
}); //

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var msg = document.getElementById('message').value;

  if (!name || !email || !msg) {
    alert('All fields are required!');
    return;
  }

  alert('Message sent successfully!');
  e.target.reset();
});
//# sourceMappingURL=script.dev.js.map
