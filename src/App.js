import React from 'react';
import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Characters from './components/Characters';
import marvelCharacters from './marvelCharacters.json';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      score: 0,
      topScore: 0,
      totalScore: 0,
      marvelCharacters: marvelCharacters,
      notClicked: marvelCharacters,
      prompt: 'Rules: Can only click the same character once!'
  };
};
  
  shuffleCharacters = array => {
    for (let i=0; i<array.length; i++) {
      let j = Math.floor(Math.random()*(i+1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({
      marvelCharacters: array
    })
  };

  clickCharacter = characterID => {
   const findCharacter = this.state.notClicked.find(el => characterID === el.id);

   if (findCharacter === undefined) {
     this.setState({
       score: 0,
       topScore: this.state.score<this.state.topScore ? this.state.topScore:this.state.score,
       marvelCharacters: marvelCharacters,
       notClicked: marvelCharacters,
       prompt: 'Sorry! Try again!'
     });
   } else {
      const newCharacter = this.state.notClicked.filter(el => el.id !== characterID);
      this.setState({
        score: this.state.score + 1,
        marvelCharacters: marvelCharacters,
        notClicked: newCharacter,
        promp: 'Great job!'

      });
   }
   this.shuffleCharacters(this.state.marvelCharacters)
  };

  render() {
    return (
      <div id="full">
        <Wrapper>
        <Header 
          score={this.state.score} 
          topScore={this.state.topScore} 
          prompt={this.state.prompt}
        />
        <div className="flex-container">
          {this.state.marvelCharacters.map(characters => (
            <Characters 
              id={characters.id} 
              img={characters.img} 
              clickCharacter={this.clickCharacter} 
            />
          ))}
        </div>
        </Wrapper>
      </div>
    );
  }
} //  Closes React.Component

export default App;



