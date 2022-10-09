import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import ListItem from '../listItem/ListItem';
import './list.scss';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';

const List = (props) => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const listContainerRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    const distance = listContainerRef.current.getBoundingClientRect().x - 50;
    if (direction === 'left' && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
      listContainerRef.current.style.transform = `translateX(${distance + 230}px)`;
    } else if (direction === 'right' && sliderNumber < 5) {
      setSliderNumber(sliderNumber + 1);
      listContainerRef.current.style.transform = `translateX(${distance - 230}px)`;
    }
  };

  return (
    <div className="list">
      <span className="list-title">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="slider-arrow left"
          style={{ display: !isMoved && 'none' }}
          onClick={() => handleClick('left')}
        />
        <div className="container" ref={listContainerRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
          <ListItem index={10} />
          <ListItem index={11} />
          <ListItem index={12} />
        </div>
        <ArrowForwardIosOutlined
          className="slider-arrow right"
          onClick={() => handleClick('right')}
        />
      </div>
      <span className="list-title">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="slider-arrow left" />
        <div className="container">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined className="slider-arrow right" />
      </div>
      <span className="list-title">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="slider-arrow left" />
        <div className="container">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined className="slider-arrow right" />
      </div>
    </div>
  );
};

List.propTypes = {};

export default List;
