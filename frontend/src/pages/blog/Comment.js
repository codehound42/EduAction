import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import PropTypes from 'prop-types';

const Comment = ( { url, id, title } ) => {
    const disqusShortname = 'devsvibe-com';
    const disqusConfig = {
        url: url,
        identifier: `${id}`,
        title: title
    };
    return (
        <DiscussionEmbed shortname={ disqusShortname } config={ disqusConfig } />
    )
}

Comment.propTypes = {
    url: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string
};

export default Comment;