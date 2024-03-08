import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';

const PostThree = ( { data, classes, bgGray } ) => {
    let date = data.shortDate.split( ' ' );
    let day = date[0];
    let month = date[1];
    return (
        <div className={`edu-blog blog-type-2 variation-2 radius-small ${classes ? classes : '' } ${bgGray === 'enable' ? 'bg-color-gray' : '' }`}>
            <div className="inner">
                <div className="thumbnail">
                    <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
                        <img src={`${process.env.PUBLIC_URL}/images/blog/post-01/${data.image}`} alt="Blog Thumb" />
                    </Link>
                </div>
                <div className="content">
                    <div className="blog-date-status">
                        <span className="day">{ day }</span>
                        <span className="month">{ month }</span>
                    </div>
                    <div className="status-group status-style-5">
                        <Link className="eduvibe-status status-05" to={process.env.PUBLIC_URL + `/category/${ slugify( data.categories.slice( 0, 1 ) ) }`}>
                            <i className="icon-price-tag-3-line"></i> { data.categories.slice( 0, 1 ) }
                        </Link>
                        <span className="eduvibe-status status-05"><i className="icon-time-line"></i> { data.readingTime }</span>
                    </div>
                    <h5 className="title">
                        <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>{ data.title }</Link>
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default PostThree;