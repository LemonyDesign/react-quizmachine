import React from 'react';
import QuestionsContainer from '../containers/QuestionsContainer';
import '../styles/base/base.scss';

class App extends React.Component {

  render(){
    return (
      <React.Fragment>
        <header className="container">
        <h1>I&rsquo;m Smarticus</h1></header>
        <main className="container">
          <QuestionsContainer />
        </main>
      </React.Fragment>
    )
  }
}

export default App;
