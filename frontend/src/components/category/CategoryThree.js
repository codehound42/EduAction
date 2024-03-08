import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const items = [
    {
        title: 'Personal Development',
        numberOfCourses: '23 Courses',
        icon: 'icon-Schoolbag',
        link: '#'
    },
    {
        title: 'Human Research',
        numberOfCourses: '39 Courses',
        icon: 'icon-student-read',
        link: '#'
    },
    {
        title: 'Art & Design',
        numberOfCourses: '45 Courses',
        icon: 'icon-Pencil',
        link: '#'
    },
    {
        title: 'Business Management',
        numberOfCourses: '15 Courses',
        icon: 'icon-Class',
        link: '#'
    },
    {
        title: 'Web Development',
        numberOfCourses: '25 Courses',
        icon: 'icon-Setting',
        link: '#'
    },
    {
        title: 'Lifestyle',
        numberOfCourses: '18 Courses',
        icon: 'icon-Mind',
        link: '#'
    },
    {
        title: 'Digital Marketing',
        numberOfCourses: '15 Courses',
        icon: 'icon-Headphone',
        link: '#'
    },
    {
        title: 'Data Sciences',
        numberOfCourses: '30 Courses',
        icon: 'icon-Microscope',
        link: '#'
    },
    {
        title: 'Health & Fitness',
        numberOfCourses: '22 Courses',
        icon: 'icon-Fitness',
        link: '#'
    }
];

const CategoryThree = ( { wrapperClass, styleClass } ) => {
    return (
        <div className={ `row ${ wrapperClass || 'g-5 mt--25' }` }>
            { items.map( ( data , i ) => (
                <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    className={ `col-lg-4 col-md-6 col-12 ${ styleClass ? styleClass : '' }` }
                    animateOnce={ true }
                    key={ i }
                >
                    <div className="service-card service-card-5">
                        <div className="inner">
                            <div className="icon">
                                <i className={ data.icon }></i>
                            </div>
                            <div className="content">
                                <h6 className="title"><a href={ data.link }>{ data.title }</a></h6>
                                <p className="description">{ data.numberOfCourses }</p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            ) ) }
        </div>
    )
}

export default CategoryThree;