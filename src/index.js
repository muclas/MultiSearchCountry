import React from 'react';
import { render } from 'react-dom';
import SearchComponent from './SearchComponent';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <h2>Country/Capital Data Multi-Search Service</h2>
    <SearchComponent />
  </div>
);

render(<App />, document.getElementById('root'));
