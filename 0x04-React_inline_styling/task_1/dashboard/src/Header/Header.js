import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import './Header.css';
import { StyleSheet, css } from 'aphrodite';



const headerStyles = StyleSheet.create({
  h1: {
      marginLeft: '3rem'
  },

  appHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      color: '#E11D3F',
      borderBottom: '3px solid #E11D3F'
  },

  appLogo: {
      width: '150px',
      height: '150px'
  }
});
  
function Header() {
  return (
    <div className={css(headerStyles.appHeader)}>
      <img src={logo} alt="logo" />
      <h1 className='{css(headerStyles.h1)}'>School dashboard</h1>
    </div>
  )
}

export default Header;
