"use strict";

var courses = [{
  name: 'Mathematics',
  instructor: 'Mr. Ali',
  grade: '10',
  description: 'Learn algebra, geometry and problem-solving skills.',
  image: '../assets/img/math.jpg'
}, {
  name: 'Physics',
  instructor: 'Dr. Sarah',
  grade: '11',
  description: 'Explore physics principles and the physical world.',
  image: '../assets/img/Phisycs.jpg'
}, {
  name: 'English Literature',
  instructor: 'Ms. Zara',
  grade: '10',
  description: 'Improve reading, writing and critical thinking skills.',
  image: '../assets/img/english.png'
}, {
  name: 'Computer Science',
  instructor: 'Mr. Hamza',
  grade: '11',
  description: 'Learn programming, algorithms and software development.',
  image: '../assets/img/computer-science.jpg'
}, {
  name: 'Chemistry',
  instructor: 'Dr. Karim',
  grade: '11',
  description: 'Study chemical reactions, atoms and laboratory experiments.',
  image: '../assets/img/computer-science.jpg'
}, {
  name: 'Art & Design',
  instructor: 'Ms. Hana',
  grade: '10',
  description: 'Develop creativity through drawing, painting and design.',
  image: '../assets/img/english.png'
}, {
  name: 'Web Development',
  instructor: 'Mr. Farid',
  grade: '10',
  description: 'Learn HTML, CSS, JavaScript and responsive web design.',
  image: '../assets/img/Phisycs.jpg'
}, {
  name: 'Robotics',
  instructor: 'Mr. Salman',
  grade: '11',
  description: 'Build and program robots using modern technology concepts.',
  image: '../assets/img/math.jpg'
}];
var coursesContainer = document.getElementById('coursesContainer');
var searchInput = document.getElementById('searchInput');
var filterButtons = document.querySelectorAll('.filter-btn');
var courseForm = document.getElementById('courseForm');
var detailsImage = document.getElementById('detailsImage');
var detailsTitle = document.getElementById('detailsTitle');
var detailsInstructor = document.getElementById('detailsInstructor');
var detailsGrade = document.getElementById('detailsGrade');
var detailsDescription = document.getElementById('detailsDescription');
var currentGrade = 'all';

var renderCourses = function renderCourses(courseArray) {
  coursesContainer.innerHTML = '';
  courseArray.forEach(function (course) {
    var card = document.createElement('div');
    card.classList.add('course-card');
    card.dataset.name = course.name;
    card.dataset.instructor = course.instructor;
    card.dataset.grade = course.grade;
    card.dataset.description = course.description;
    card.dataset.image = course.image;
    card.innerHTML = "\n      <img src=\"".concat(course.image, "\" alt=\"").concat(course.name, "\">\n\n      <div class=\"course-content\">\n        <h3>").concat(course.name, "</h3>\n        <p class=\"instructor\">\n          Instructor: ").concat(course.instructor, "\n        </p>\n        <span class=\"grade-badge\">\n          Grade ").concat(course.grade, "\n        </span>\n        <p class=\"description\">\n          ").concat(course.description, "\n        </p>\n        <button class=\"details-btn\">\n          View Course Details\n        </button>\n      </div>\n    ");
    var button = card.querySelector('.details-btn');
    button.addEventListener('click', function () {
      detailsImage.src = card.dataset.image;
      detailsImage.alt = card.dataset.name;
      detailsTitle.textContent = card.dataset.name;
      detailsInstructor.textContent = card.dataset.instructor;
      detailsGrade.textContent = card.dataset.grade;
      detailsDescription.textContent = card.dataset.description;
      var detailsPanel = document.querySelector('.details-panel');

      if (detailsPanel) {
        window.scrollTo({
          top: detailsPanel.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    });
    coursesContainer.appendChild(card);
  });
};

var updateCourses = function updateCourses() {
  var searchValue = searchInput.value.toLowerCase();
  var filteredCourses = [].concat(courses);

  if (currentGrade !== 'all') {
    filteredCourses = filteredCourses.filter(function (course) {
      return course.grade === currentGrade;
    });
  }

  filteredCourses = filteredCourses.filter(function (course) {
    return course.name.toLowerCase().includes(searchValue) || course.instructor.toLowerCase().includes(searchValue);
  });
  renderCourses(filteredCourses);
};

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var activeButton = document.querySelector('.filter-btn.active');

    if (activeButton) {
      activeButton.classList.remove('active');
    }

    button.classList.add('active');
    currentGrade = button.dataset.grade;
    updateCourses();
  });
});
searchInput.addEventListener('keyup', function () {
  updateCourses();
});
courseForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var courseName = document.getElementById('courseName').value.trim();
  var instructor = document.getElementById('instructor').value.trim();
  var gradeLevel = document.getElementById('gradeLevel').value;
  var imageUrl = document.getElementById('imageUrl').value.trim();
  var description = document.getElementById('description').value.trim();

  if (courseName === '' || instructor === '' || gradeLevel === '' || imageUrl === '' || description === '') {
    alert('Please fill in all fields.');
    return;
  }

  var newCourse = {
    name: courseName,
    instructor: instructor,
    grade: gradeLevel,
    description: description,
    image: imageUrl
  };
  courses.push(newCourse);
  updateCourses();
  courseForm.reset();
  alert('Course added successfully!');
});
renderCourses(courses);
//# sourceMappingURL=courses.dev.js.map
