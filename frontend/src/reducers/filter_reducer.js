const filter_reducer = ( state, action ) => {
    if ( action.type === 'LOAD_COURSES' ) {
        let maxPrice = action.payload.map( ( p ) => p.price )
        maxPrice = Math.max( ...maxPrice )
            
        let minPrice = action.payload.map( ( p ) => p.price )
        minPrice = Math.min( ...minPrice )

        return {
            ...state,
            all_courses: [...action.payload],
            filtered_courses: [...action.payload],
            filters: { 
                ...state.filters, 
                max_price: maxPrice, 
                min_price: minPrice, 
                price: maxPrice 
            }
        }
    }

    if ( action.type === 'UPDATE_SORT' ) {
        return { ...state, sorting: action.payload }
    }

    if ( action.type === 'UPDATE_SEARCH' ) {
        const { name, value } = action.payload;
        return { ...state, [name]: value }
    }

    if ( action.type === 'SEARCH_COURSES' ) {
        const { searchbycourse, filtered_courses } = state;
        let tempCourses = [...filtered_courses];
        if ( searchbycourse ) {
            tempCourses = tempCourses.filter( ( course ) => {
                return course.title.toLowerCase().search( searchbycourse.toLowerCase().trim() ) !== -1
            } )
        }
        return { ...state, filtered_courses: tempCourses }
    }

    if ( action.type === 'UPDATE_FILTERS' ) {
        const { name, value } = action.payload
        return { ...state, filters: { ...state.filters, [name]: value } }
    }

    if ( action.type === 'FILTER_COURSES' ) {
        const { all_courses } = state
        const { filterbylevel, filterbyprice, coursesortby, price } = state.filters
        let tempCourses = [...all_courses];
        
        if ( filterbylevel !== 'all' ) {
            tempCourses = tempCourses.filter(
                ( course ) => course.level === filterbylevel
            )
        }

        if ( coursesortby === 'name-a' ) {
            tempCourses = tempCourses.sort( ( a, b ) => {
                return a.title.localeCompare( b.title )
            } )
        }
        if ( coursesortby === 'name-z' ) {
            tempCourses = tempCourses.sort( ( a, b ) => {
                return b.title.localeCompare(a.title)
            } )
        }
        if ( coursesortby === 'featured' ) {
            tempCourses = tempCourses.filter(
                ( course ) => course.featured === true
            )
        }

        if ( filterbyprice === 'price-lowest' ) {
            tempCourses = tempCourses.sort( ( a, b ) => {
                return a.price - b.price
            } )
        }
        if ( filterbyprice === 'price-highest' ) {
            tempCourses = tempCourses.sort( ( a, b ) => b.price - a.price )
        }
        if ( filterbyprice === 'free' ) {
            tempCourses = tempCourses.filter(
                ( course ) => course.price === '0'
            )
        }
        if ( filterbyprice === 'paid' ) {
            tempCourses = tempCourses.filter(
                ( course ) => course.price !== '0'
            )
        }

        // price range
        tempCourses = tempCourses.filter( ( course ) => course.price <= price )
  
        return { ...state, filtered_courses: tempCourses }
    }
    if ( action.type === 'CLEAR_FILTERS' ) {
        return {
            ...state,
            searchbycourse: '',
            filters: {
                ...state.filters,
                text: '',
                coursesortby: 'none',
                filterbyprice: 'no-filter-price',
                filterbylevel: 'all',
                price: state.filters.max_price
            }
        }
    }
    throw new Error( `No Matching '${action.type}' - action type found.` );
}

export default filter_reducer;