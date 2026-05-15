const courses = [
  {
    name: 'Mathematics',
    instructor: 'Mr. Ali',
    grade: '10',
    description: 'Learn algebra, geometry and problem-solving skills.',
    image: '../assets/img/math.jpg',
  },

  {
    name: 'Physics',
    instructor: 'Dr. Sarah',
    grade: '11',
    description: 'Explore physics principles and the physical world.',
    image: '../assets/img/Phisycs.jpg',
  },

  {
    name: 'English Literature',
    instructor: 'Ms. Zara',
    grade: '10',
    description: 'Improve reading, writing and critical thinking skills.',
    image: '../assets/img/english.png',
  },

  {
    name: 'Computer Science',
    instructor: 'Mr. Hamza',
    grade: '11',
    description: 'Learn programming, algorithms and software development.',
    image: '../assets/img/computer-science.jpg',
  },
  {
    name: 'Chemistry',
    instructor: 'Dr. Karim',
    grade: '11',
    description: 'Study chemical reactions, atoms and laboratory experiments.',
    image: '../assets/img/computer-science.jpg',
  },

  {
    name: 'Art & Design',
    instructor: 'Ms. Hana',
    grade: '10',
    description: 'Develop creativity through drawing, painting and design.',
    image: '../assets/img/english.png',
  },

  {
    name: 'Web Development',
    instructor: 'Mr. Farid',
    grade: '10',
    description: 'Learn HTML, CSS, JavaScript and responsive web design.',
    image: '../assets/img/Phisycs.jpg',
  },

  {
    name: 'Robotics',
    instructor: 'Mr. Salman',
    grade: '11',
    description: 'Build and program robots using modern technology concepts.',
    image: '../assets/img/math.jpg',
  },
];

const coursesContainer = document.getElementById('coursesContainer');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const courseForm = document.getElementById('courseForm');

const detailsImage = document.getElementById('detailsImage');
const detailsTitle = document.getElementById('detailsTitle');
const detailsInstructor = document.getElementById('detailsInstructor');
const detailsGrade = document.getElementById('detailsGrade');
const detailsDescription = document.getElementById('detailsDescription');

let currentGrade = 'all';

const renderCourses = (courseArray) => {
  coursesContainer.innerHTML = '';

  courseArray.forEach((course) => {
    const card = document.createElement('div');

    card.classList.add('course-card');

    card.dataset.name = course.name;
    card.dataset.instructor = course.instructor;
    card.dataset.grade = course.grade;
    card.dataset.description = course.description;
    card.dataset.image = course.image;

    card.innerHTML = `
      <img src="${course.image}" alt="${course.name}">

      <div class="course-content">
        <h3>${course.name}</h3>
        <p class="instructor">
          Instructor: ${course.instructor}
        </p>
        <span class="grade-badge">
          Grade ${course.grade}
        </span>
        <p class="description">
          ${course.description}
        </p>
        <button class="details-btn">
          View Course Details
        </button>
      </div>
    `;

    const button = card.querySelector('.details-btn');

    button.addEventListener('click', () => {
      detailsImage.src = card.dataset.image;
      detailsImage.alt = card.dataset.name;

      detailsTitle.textContent = card.dataset.name;
      detailsInstructor.textContent = card.dataset.instructor;
      detailsGrade.textContent = card.dataset.grade;
      detailsDescription.textContent = card.dataset.description;

      const detailsPanel = document.querySelector('.details-panel');

      if (detailsPanel) {
        window.scrollTo({
          top: detailsPanel.offsetTop - 20,
          behavior: 'smooth',
        });
      }
    });

    coursesContainer.appendChild(card);
  });
};

const updateCourses = () => {
  const searchValue = searchInput.value.toLowerCase();

  let filteredCourses = [...courses];

  if (currentGrade !== 'all') {
    filteredCourses = filteredCourses.filter((course) => {
      return course.grade === currentGrade;
    });
  }

  filteredCourses = filteredCourses.filter((course) => {
    return (
      course.name.toLowerCase().includes(searchValue) ||
      course.instructor.toLowerCase().includes(searchValue)
    );
  });

  renderCourses(filteredCourses);
};

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const activeButton = document.querySelector('.filter-btn.active');

    if (activeButton) {
      activeButton.classList.remove('active');
    }

    button.classList.add('active');

    currentGrade = button.dataset.grade;

    updateCourses();
  });
});

searchInput.addEventListener('keyup', () => {
  updateCourses();
});

courseForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const courseName = document.getElementById('courseName').value.trim();
  const instructor = document.getElementById('instructor').value.trim();
  const gradeLevel = document.getElementById('gradeLevel').value;
  const imageUrl = document.getElementById('imageUrl').value.trim();
  const description = document.getElementById('description').value.trim();

  if (
    courseName === '' ||
    instructor === '' ||
    gradeLevel === '' ||
    imageUrl === '' ||
    description === ''
  ) {
    alert('Please fill in all fields.');
    return;
  }

  const newCourse = {
    name: courseName,
    instructor: instructor,
    grade: gradeLevel,
    description: description,
    image: imageUrl,
  };

  courses.push(newCourse);

  updateCourses();

  courseForm.reset();

  alert('Course added successfully!');
});

renderCourses(courses);
