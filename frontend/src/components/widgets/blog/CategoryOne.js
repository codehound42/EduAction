import React from 'react';
import { Link } from 'react-router-dom';
import { flatDeep, slugify, containsObject } from '../../../utils';
import PostData from '../../../data/blog/PostData.json';


const CategoryOne = ( props ) => {
    const cats = PostData.map(item => {
        return item.categories;
    } );

    let singleCatArray = flatDeep( cats );
    let categories = [];
    singleCatArray.forEach( cat => {
        const obj = {
            title: cat.trim(),
            slug: slugify( cat ),
            count: 1
        }
        const objIndex = containsObject( obj, categories );
        if( objIndex !== -1 ){
            const prevCount = categories[objIndex].count;
            categories[objIndex] = {
                title: cat.trim(),
                slug: slugify( cat ),
                count: prevCount + 1
            }
        } else {
            categories.push( obj );
        }
    } );

    return (
        <div className={`edu-blog-widget${ props.style2 === 'enable' ? '-2' : '' } widget-categories ${ props.extraClass || '' }`}>
            <div className="inner">
                <h5 className="widget-title">Categories</h5>
                <div className="content">
                    <ul className="category-list">
                        { 
                            categories.slice( 0, 5 ).map( cat => {
                                return (
                                    <li key={ cat.slug }>
                                        <Link to={process.env.PUBLIC_URL + `/category/${ cat.slug }`}>
                                            { cat.title }<span>({ cat.count })</span>
                                        </Link>
                                    </li>
                                )
                            } )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CategoryOne;