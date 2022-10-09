import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBackOutlined } from '@material-ui/icons';
import './watch.scss';

const Watch = (props) => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined className="icon" />
        Home
      </div>
      <video
        src="https://player.vimeo.com/progressive_redirect/playback/757794968/rendition/720p/file.mp4?loc=external&oauth2_token_id=1027659527&signature=f8786094416ce8721a087f08e81c32c7010af55336a564b319cf5e3d78910785"
        controls
        autoPlay
        progress
        className="video"
      />
    </div>
  );
};

Watch.propTypes = {};

export default Watch;
