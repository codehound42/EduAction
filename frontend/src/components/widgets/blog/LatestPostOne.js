import React from 'react';
import { Link } from 'react-router-dom';
import PostData from '../../../data/blog/PostData.json';

const LatestPostOne = ( props ) => {
    return (
        <div className={`edu-blog-widget${ props.style2 === 'enable' ? '-2' : '' } widget-latest-post ${ props.extraClass || '' }`}>
            <div className="inner">
                <h5 className="widget-title">Latest Post</h5>
                <div className="content latest-post-list">
                    {
                        PostData.slice( 0, 3 ).map( ( item ) => {
                            return(
                                <div className="latest-post" key={ item.id }>
                                    <div className="thumbnail">
                                        <Link className="d-block" to={process.env.PUBLIC_URL + `/blog-details/${item.id}`}>
                                            <img src={`${process.env.PUBLIC_URL}/images/widget/blog/${item.image}`} alt="Blog Thumb" />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <ul className="blog-meta">
                                            <li>{item.date}</li>
                                        </ul>
                                        <h6 className="title">
                                            <Link className="d-block" to={process.env.PUBLIC_URL + `/blog-details/${item.id}`}>{item.title}</Link>
                                        </h6>
                                    </div>
                                </div>
                            )
                        } )
                    }
                </div>
            </div>
        </div>
    )
}

export default LatestPostOne;