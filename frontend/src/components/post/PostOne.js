import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';

const PostOne = ( { data, classes, bgWhite } ) => {
    return (
        <div className={`edu-blog blog-type-2 radius-small ${classes ? classes : '' } ${bgWhite === 'enable' ? 'bg-color-white' : '' }`}>
            <div className="inner">
                <div className="thumbnail">
                    <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
                        <img src={`${process.env.PUBLIC_URL}/images/blog/post-01/${data.image}`} alt="Blog Thumb" />
                    </Link>
                </div>
                <div className="content">
                    <div className="status-group">
                        <Link className="eduvibe-status status-05" to={process.env.PUBLIC_URL + `/category/${ slugify( data.categories.slice( 0, 1 ) ) }`}>
                            <i className="icon-price-tag-3-line"></i> {data.categories.slice(0, 1)}
                        </Link>
                    </div>
                    <h5 className="title">
                        <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>{data.title}</Link>
                    </h5>
                    <div className="blog-card-bottom">
                        <ul className="blog-meta">
                            <li><i className="icon-calendar-2-line"></i>{ data.date }</li>
                        </ul>
                        <div className="read-more-btn">
                            <Link className="btn-transparent" to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>Read More<i className="icon-arrow-right-line-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostOne;