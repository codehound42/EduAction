import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';

const PostTwo = ( { data, classes, bgWhite } ) => {
    return (
        <div className={`edu-blog blog-type-3 radius-small ${classes ? classes : '' } ${bgWhite === 'enable' ? 'bg-color-white' : '' }`}>
            <div className="inner">
                <div className="content">
                    <div className="status-group">
                        <Link className="eduvibe-status status-05 color-primary w-800" to={process.env.PUBLIC_URL + `/category/${ slugify( data.categories.slice( 0, 1 ) ) }`}>{data.categories.slice(0, 1)}</Link>
                    </div>
                    <h4 className="title">
                        <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>{data.title}</Link>
                    </h4>
                    <div className="blog-card-bottom">
                        <ul className="blog-meta">
                            <li><i className="icon-calendar-2-line"></i>{ data.date }</li>
                            <li><i className="icon-user-line"></i>Posted By <Link to={process.env.PUBLIC_URL + `/author/${slugify( data.author ) }`}>{data.author}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="thumbnail">
                    <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
                        <img src={`${process.env.PUBLIC_URL}/images/blog/post-02/${data.image}`} alt="Blog Thumb" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PostTwo;