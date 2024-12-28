document.addEventListener('DOMContentLoaded', function() {
    // JavaScript code to manipulate the faculty and success stories sections
    // Example: Add a new faculty member
    const facultyContainer = document.getElementById('faculty-container');
    const newFaculty = document.createElement('div');
    newFaculty.classList.add('faculty');
    newFaculty.innerHTML = `
        <h3 class="faculty-name">Dr. Emily White</h3>
        <p class="faculty-bio">Dr. Emily White specializes in data science and machine learning with over 15 years of teaching experience.</p>
        <span class="faculty-achievements">Achievements: Data Science Award 2018, Author of 'Machine Learning Essentials'</span>
    `;
    facultyContainer.appendChild(newFaculty);

    // Example: Add a new student success story
    const successStoriesContainer = document.getElementById('success-stories-container');
    const newSuccessStory = document.createElement('div');
    newSuccessStory.classList.add('success-story');
    newSuccessStory.innerHTML = `
        <h3 class="student-name">Mark Taylor</h3>
        <p class="student-success">Mark Taylor, a 2022 graduate, is now the CTO of a startup that focuses on blockchain technology. His thesis project was awarded the best in class.</p>
        <span class="student-achievements">Achievements: CTO at BlockStart, Best Thesis Award 2022</span>
    `;
    successStoriesContainer.appendChild(newSuccessStory);
});
