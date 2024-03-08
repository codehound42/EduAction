import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/courses_reducer';
import CourseData from '../data/course/CourseData.json';

const defaultState = {
    courses_loading: false,
    courses_error: false,
    courses: [],
    featured_courses: []
}

const CoursesContext = React.createContext();

export const CoursesProvider = ( { children } ) => {
    const [state, dispatch] = useReducer( reducer, defaultState );

    const fetchCourses = () => {
        dispatch( { type: 'GET_COURSES_BEGIN' } );
        try {
            dispatch( { type: 'GET_COURSES_SUCCESS', payload: CourseData } );
        } catch ( error ) {
            dispatch( { type: 'GET_COURSES_ERROR' } );
        }
    }

    useEffect( () => {
        fetchCourses()
    }, [] )

    return (
        <CoursesContext.Provider value={ { ...state, fetchCourses } }>
            { children }
        </CoursesContext.Provider>
    )
}

export const useCoursesContext = () => {
    return useContext( CoursesContext )
}