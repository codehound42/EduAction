import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import { useCoursesContext } from './courses_context';

const defaultState = {
    filtered_courses: [],
    all_courses: [],
    searchbycourse: '',
    filters: {
        coursesortby: 'none',
        filterbyprice: 'no-filter-price',
        filterbylevel: 'all',
        min_price: 0,
        max_price: 0,
        price: 0
    }
}

const FilterContext = React.createContext();

export const FilterProvider = ( { children } ) => {
    const { courses } = useCoursesContext();
    const [state, dispatch] = useReducer( reducer, defaultState );

    useEffect( () => {
        dispatch( { type: 'LOAD_COURSES', payload: courses } )
    }, [courses] )

    useEffect( () => {
        dispatch( { type: 'FILTER_COURSES' } )
        dispatch( { type: 'SEARCH_COURSES' } )
    }, [courses, state.sorting, state.searchbycourse, state.filters] );

    const updateSort = (e) => {
        const value = e.target.value
        dispatch({ type: 'UPDATE_SORT', payload: value })
    }

    const updateSearch = (e) => {
        let name = e.target.name;
        const value = e.target.value;
        dispatch( { type: 'UPDATE_SEARCH', payload: { name, value } } )
    }
    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if ( name === 'price' ) {
            value = Number( value )
        }
        dispatch( { type: 'UPDATE_FILTERS', payload: { name, value } } )
    }
    const clearFilters = () => {
        dispatch( { type: 'CLEAR_FILTERS' } )
    }
    
    return (
        <FilterContext.Provider
            value={{
                ...state,
                updateSort,
                updateSearch,
                updateFilters,
                clearFilters
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext( FilterContext )
}