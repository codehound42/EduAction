import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';

const PostStandard = ( { data, classes } ) => {
    const excerpt = data.details.substring(0, 275) + "...";
    return (
        <div className={`inner ${classes ? classes : '' }`}>
            <div className="thumbnail">
                <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
                    <img src={`${process.env.PUBLIC_URL}/images/blog/post-standard/${data.image}`} alt="Blog Thumb" />
                </Link>
                <div className="top-position status-group left-top">
                    <Link className="eduvibe-status status-01 bg-primary-color" to={process.env.PUBLIC_URL + `/category/${ slugify( data.categories.slice( 0, 1 ) ) }`}>
                        <i className="icon-price-tag-3-line"></i> {data.categories.slice(0, 1)}
                    </Link>
                </div>
            </div>
            <div className="content">
                <ul className="blog-meta">
                    <li><i className="icon-eye-line"></i>{ data.view }</li>
                    <li><i className="icon-discuss-line"></i>{ data.comment }</li>
                    <li><i className="icon-calendar-2-line"></i>{ data.date }</li>
                </ul>
                <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>{data.title}</Link>
                </h4>
                <p className="description">{ excerpt }</p>
            </div>
        </div>
    )
}

export default PostStandard;