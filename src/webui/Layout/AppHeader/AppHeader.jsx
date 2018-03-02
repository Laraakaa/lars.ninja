import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = ({ title }) => {
  return (
    <header className="AppHeader">
      <h1 className="AppHeader__Title">{title}</h1>
    </header>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default AppHeader;
