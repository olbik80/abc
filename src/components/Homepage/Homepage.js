import React, { Component } from 'react';
// import { observer } from 'mobx-react';
import styles from './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>HOMEPAGE</h1>
      </div>
    );
  }
}

export default Homepage;
