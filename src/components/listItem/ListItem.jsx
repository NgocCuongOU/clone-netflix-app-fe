import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './listItem.scss';
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const videoEmbeded =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';

  return (
    <div
      className="list-item"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://vtv1.mediacdn.vn/thumb_w/640/2018/11/17/tm-04371rthor-chris-hemsworth-zoom-4ba40fb7-5d31-4495-b5dc-c9386900a4b6-15424727680731295442154.jpg"
        alt="netflix film"
      />

      {isHovered && (
        <>
          <video src={videoEmbeded} autoPlay={true} loop />
          <div className="item-info">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="item-info-top">
              <span>1 hours 14 mins</span>
              <span className="limit">16+</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popu
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

ListItem.propTypes = {};

export default ListItem;
