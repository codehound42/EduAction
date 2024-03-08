const courses_reducer = ( state, action ) => {
    if ( action.type === 'GET_COURSES_BEGIN' ) {
        return { 
            ...state, 
            courses_loading: true 
        }
    }

    if ( action.type === 'GET_COURSES_SUCCESS' ) {
        const featured_courses = action.payload.filter(
            ( course ) => course.featured === true
        )
        return {
            ...state,
            courses_loading: false,
            courses: action.payload,
            featured_courses
        }
    }

    if ( action.type === 'GET_COURSES_ERROR' ) {
        return { 
            ...state, 
            courses_loading: false, 
            courses_error: true 
        }
    }

    throw new Error( `No Matching '${action.type}' - action type found.` );
}
  
export default courses_reducer;