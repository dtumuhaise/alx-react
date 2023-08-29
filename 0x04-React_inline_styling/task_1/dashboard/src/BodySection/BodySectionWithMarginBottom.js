import React, { Component } from 'react'
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const bodyStyles = StyleSheet.create({
  marginBottom: {
    marginBottom: '40px'
  }
});

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(bodyStyles.marginBottom)}>
        <BodySection {...this.props}/>
      </div>
    );
  }
}

BodySectionWithMarginBottom. defaultProps = {
	children: <React.Fragment />
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

export default BodySectionWithMarginBottom;
