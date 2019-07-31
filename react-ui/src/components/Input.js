import React from 'react';

class Input extends React.Component {
  
  
  
  render() {
    return (
      <form>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search" name="search" />
        <button
          onClick={e => this.props.handleLinearSearch(e.target.search.value)}
        >
          Linear Search
        </button>
        <button
          onClick={e => this.props.handleBinarySearch(e.target.search.value)}
        >
          Binary Search
        </button>
      </form>
    );
  }
}

export default Input;
