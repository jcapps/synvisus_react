import React, {PropTypes} from 'react';

const Video = ({filename}) => {
    const mp4Video = require(`../../videos/${filename}.mp4`);

    return (
        <video controls>
            <source src={mp4Video}/>
            Your browser does not support the HTML used to display this video.
        </video>
    );
};

Video.propTypes = {
    filename: PropTypes.string.isRequired
};

export default Video;