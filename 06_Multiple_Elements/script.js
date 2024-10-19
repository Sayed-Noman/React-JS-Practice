import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import coursesData from './public/data/courses.json'

const CourseCard = ({ course }) => {
    return (
        <div className="course-card">
            <img src={course.image} alt={course.title} />
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <span className="price">${course.price}</span>
            <button className="button">Enroll Now</button>
        </div>
    );
};

const renderCourses = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <div className="container">
            {coursesData.courses.map(course => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
};

renderCourses(); // Call to fetch and render courses
