import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Search from './search';

class App extends React.Component {
  state = {
    count: null,
    value: null,
    index: null,
    search: new Search(),
  };

  handleBinarySearch = (value) =>{
    let result = this.state.search.binarySearch(value);
    this.setState(result);
  }

  handleLinearSearch = (value) =>{
    let result = this.state.search.linearSearch(value);
    this.setState(result);
  }

  render() {
    return (
      <div className="App">
        <Input
          handleBinarySearch={this.handleBinarySearch}
          handleLinearSearch={this.handleLinearSearch}
        />
        {(this.state.count && this.state.index > 0) && (
          <p>We found the element, {this.state.value} at index {this.state.index} and it took us {this.state.count} tries</p>
        )}
        {this.state.index === -1 && <p>{this.state.value} wasn't found and we searched {this.state.count} times</p>}
      </div>
    );
  }
}

export default App;
