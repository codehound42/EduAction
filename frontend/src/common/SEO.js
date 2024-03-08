import PropTypes from 'prop-types';
import React from 'react'


const SEO = ( { title } ) => {
    return (
        <>
            <meta charSet="utf-8" />
            <title>{ title } || EduVibe - Online Learning and Education React Template</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="EduVibe – Online Learning and Education React Template" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;