import PropTypes from 'prop-types';
import Featured from '~/components/featured/Featured';
import Navbar from '~/components/navbar/Navbar';
import List from '~/components/list/List';

import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
    </div>
  );
};

Home.propTypes = {};

export default Home;
