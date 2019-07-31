import React from 'react';

class Input extends React.Component {
  handleLinear(e) {
    e.preventDefault();
    this.props.handleLinearSearch(e.target.search.value);
  }

  handleBinary(e) {
    e.preventDefault();
    this.props.handleBinarySearch(e.target.search.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e => this.handleLinear(e))}>
          <label htmlFor="search">Linear Search: </label>
          <input type="text" id="search" name="search" />
          <button type="submit" >Linear Search</button>
        </form>
        <form onSubmit={(e => this.handleBinary(e))}>
          <label htmlFor="search">Binary Search: </label>
          <input type="text" id="search" name="search" />
          <button type="submit">Binary Search</button>
        </form>
      </div>
    );
  }
}

export default Input;
