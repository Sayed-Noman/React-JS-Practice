import React from 'react'
import ReactDOM from 'react-dom/client'
import coursesData from './public/data/courses.json'


/*  Bare Minimum properties for create React object element
    // A react element can be crated using 2 ways:
        // 1. React.createElement
        // 2. JSX Syntax: Bable will create it into a React Element behind the scen

    // Synatx:
        const root = ReactDOM.createRoot(document.getElementById('root'))

        root.render(
        {
            $$typeof: Symbol.for('react.element'),
            type: 'div',
            ref: null,
            props: {
                children: 'Simple Div Box'
            }
        })
    
    //type: also accepts function of react elements/jsx element

*/

/*  Way-1 to use react element write directly inside render: 

const CourseCard = (props) => {
    return (
        <div className="course-card">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <span className="price">${props.price}</span>
            <button className="button">Enroll Now</button>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    {
        $$typeof: Symbol.for('react.element'),
        type: CourseCard,
        ref: null,
        props: {
            title: 'Advanced JavaScript',
            description: "Deep dive into JavaScript concepts and features.",
            price: 79.99,
            image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/javascript-2752148-2284965.png?f=webp&w=256"
        }
    }
)
*/

/*  Way-2  to use react element write directly inside render: 

const CourseCard = (props) => {
    return (
        <div className="course-card">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <span className="price">${props.price}</span>
            <button className="button">Enroll Now</button>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    React.createElement(
        CourseCard,
        {
            title: 'Advanced JavaScript',
            description: "Deep dive into JavaScript concepts and features.",
            price: 79.99,
            image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/javascript-2752148-2284965.png?f=webp&w=256",
            key: 1
        }
    )
);

*/

/* Way-3 : Using JSX Syntx
const CourseCard = (props) => {
    return (
        <div className="course-card">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <span className="price">${props.price}</span>
            <button className="button">Enroll Now</button>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <CourseCard 
        title='Advanced JavaScript'
        description="Deep dive into JavaScript concepts and features."
        price={79.99}
        image="https://cdn.iconscout.com/icon/premium/png-256-thumb/javascript-2752148-2284965.png?f=webp&w=256"
    />
);

*/

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
            {
                coursesData.courses.map(course => (
                    <CourseCard
                        key={course.id} // Unique key for each CourseCard
                        course={course}
                    />
                ))
            }
        </div>
    );
};

renderCourses(); // Call to fetch and render courses
