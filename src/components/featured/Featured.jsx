import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react';
import './featured.scss';

const Featured = () => {
  return (
    <div className="featured">
      <img
        width="100%"
        src="https://media.sohuutritue.net.vn/files/huongmi/2022/05/17/netflix-logo-2219.jpg"
        alt="netflix"
      />
      <div className="info">
        <img
          src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="feauterd"
        />
        <div className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum
        </div>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
