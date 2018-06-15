import React, { Component } from 'react';
import logo from './Images/pancakes.png';
import './App.css';
import breakfastList from './breakfast.json';





class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    clickStatus: "",
    results: breakfastList
  };

  componentDidMount = () => {
    this.shuffle(this.state.results);
  };

  shuffle = resultsArr => {
    let currentIndex = resultsArr.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = resultsArr[currentIndex];
      resultsArr[currentIndex] = resultsArr[randomIndex];
      resultsArr[randomIndex] = temporaryValue;
    }
    this.setState({
      results: resultsArr
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Click On Breakfast Food</h1>
        </header>
        <p className="App-intro">
          The rules are simple: click a card, get a point. Click a card you've already clicked, lose a point.
          </p>
          <p>
        Try and build your score as quickly as possible while enjoying sumptuous images of breakfast dishes.
  
  
        </p>
      </div>
    );
  };
}




export default App;
