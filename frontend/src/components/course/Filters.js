import React from 'react';
import { useFilterContext } from '../../context/filter_context';
import { getUniqueValues, formatPrice } from '../../utils';

const Filters = () => {
    const {
        filters: {
            coursesortby,
            filterbyprice,
            filterbylevel,
            min_price,
            price,
            max_price
        },
        updateFilters,
        clearFilters,
        all_courses
    } = useFilterContext()

    const levels = getUniqueValues( all_courses, 'level' );

    return (
        <aside className="edu-course-sidebar">
            <form onSubmit={ (e) => e.preventDefault() }>

                <div className="edu-course-widget widget-shortby">
                    <div className="inner">
                        <h5 className="widget-title">Sort By</h5>
                        <div className="content">
                            <div className="edu-form-check">
                                <input type="radio" id="none" value="none" name="coursesortby" checked={ coursesortby === "none" ? "checked" : '' } onChange={ updateFilters } />
                                <label htmlFor="none">None</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="radio" id="name-a" value="name-a" name="coursesortby" checked={ coursesortby === "name-a" ? "checked" : '' } onChange={ updateFilters } />
                                <label htmlFor="name-a">Name (A-Z)</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="radio" id="name-z" value="name-z" name="coursesortby" checked={ coursesortby === "name-z" ? "checked" : '' } onChange={ updateFilters } />
                                <label htmlFor="name-z">Name (Z-A)</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="radio" id="featured" value="featured" name="coursesortby" checked={ coursesortby === "featured" ? "checked" : '' } onChange={ updateFilters } />
                                <label htmlFor="featured">Featured</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="edu-course-widget widget-shortby mt--40">
                    <div className="inner">
                        <h5 className="widget-title">Price</h5>
                        <div className="content">
                            <div className="edu-form-check">
                                <input type="radio" id="no-filter-price" value="no-filter-price" name="filterbyprice" checked={ filterbyprice === "no-filter-price" ? "checked" : '' } onChange={ updateFilters } />
                                <label htmlFor="no-filter-price">All</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="radio" id="price-lowest" value="price-lowest" name="filterbyprice" checked={ filterbyprice === "price-lowest" ? "checked" : '' } onChange={ updateFilters } />
                                <label htmlFor="price-lowest">Price: Low to High</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="radio" id="price-highest" value="price-highest" name="filterbyprice" checked={ filterbyprice === "price-highest" ? "checked" : '' } onChange={ updateFilters } />
                                <label htmlFor="price-highest">Price: High to Low</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="radio" id="free" value="free" name="filterbyprice" checked={ filterbyprice === "free" ? "checked" : '' } onChange={ updateFilters } />
                                <label htmlFor="free">Free</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="radio" id="paid" value="paid" name="filterbyprice" checked={ filterbyprice === "paid" ? "checked" : '' } onChange={ updateFilters } />
                                <label htmlFor="paid">Paid</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="edu-course-widget widget-shortby mt--40">
                    <div className="inner">
                        <h5 className="widget-title">Level</h5>
                        <div className="content">
                            { levels.map( ( levelItem, index ) => {
                                return (
                                    <div className="edu-form-check" key={ index }>
                                        <input 
                                            type="radio" 
                                            id={ levelItem } 
                                            value={ levelItem } 
                                            name="filterbylevel" 
                                            checked={ filterbylevel === levelItem ? "checked" : '' }
                                            onChange={ updateFilters } 
                                        />
                                        <label 
                                            htmlFor={ levelItem }
                                            className={ `${
                                                filterbylevel === levelItem ? 'text-capitalize active' : 'text-capitalize'
                                                }` }
                                        >
                                            { levelItem }
                                        </label>
                                    </div>
                                )
                            } ) }
                        </div>
                    </div>
                </div>

                <div className="edu-course-widget widget-shortby mt--40">
                    <div className="inner eduvibe-course-price-filter">
                        <h5 className="widget-title">Filter By Price</h5>
                        <div className="content">
                            <div className="price_filter s-filter clear">
                                <input
                                    type='range'
                                    name='price'
                                    min={ min_price }
                                    max={ max_price }
                                    onChange={ updateFilters }
                                    value={ price }
                                />
                                <div className="price__output--wrap">
                                    <div className="price--output">
                                        <span>Price :</span>{ formatPrice( price ) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <button type='button' className="edu-btn btn-medium mt--40" onClick={ clearFilters }>
                Reset All Filters
            </button>
        </aside>
    )
}


export default Filters