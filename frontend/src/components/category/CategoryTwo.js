import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const items = [
    {
        title: 'Human Reasearch',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '23 Courses',
        icon: 'icon-student-read',
        link: '#'
    },
    {
        title: 'Web Development',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '39 Courses',
        icon: 'icon-lab',
        link: '#'
    },
    {
        title: 'Mathmatical Physics',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '45 Courses',
        icon: 'icon-compass',
        link: '#'
    },
    {
        title: 'Number Theory',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '15 Courses',
        icon: 'icon-calculator',
        link: '#'
    },
    {
        title: 'Data Sciences',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '25 Courses',
        icon: 'icon-microscopes',
        link: '#'
    },
    {
        title: 'Web Development',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '18 Courses',
        icon: 'icon-calculator',
        link: '#'
    },
    {
        title: 'Art & Design',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '15 Courses',
        icon: 'icon-pen-tool',
        link: '#'
    },
    {
        title: 'Nuclear Power',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '30 Courses',
        icon: 'icon-science',
        link: '#'
    }
];

const CategoryTwo = ( { wrapperClass, styleClass } ) => {
    return (
        <div className={ `row ${ wrapperClass || 'g-5 mt--25' }` }>
            { items.map( ( data , i ) => (
                <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    className={ `col-lg-3 col-md-6 col-sm-6 col-12 ${ styleClass ? styleClass : '' }` }
                    animateOnce={ true }
                    key={ i }
                >
                    <div className="service-card service-card-4">
                        <div className="inner">
                            <div className="icon">
                                <i className={ data.icon }></i>
                                <span className="subtitle">{ data.numberOfCourses }</span>
                            </div>
                            <div className="content">
                                <h6 className="title"><a href={ data.link }>{ data.title }</a></h6>
                                <p className="description">{ data.info }</p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            ) ) }
        </div>
    )
}

export default CategoryTwo;