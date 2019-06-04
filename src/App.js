import React, { Component } from 'react';
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import data from './data.json';
import "bootstrap/dist/css/bootstrap.css"
import "react-bootstrap"
require("react-bootstrap/ModalHeader")

class App extends Component {
  styles = {
    sectionStyles: {
      background: "Red"
    }
  };

  state = {
    count: 0,
    value: '',
    savedClicked: [],
    data,
    loose: false,
    showImage: false,
    highScore: 0
  };

  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };


  addCounter = ({ target }) => {
    const { id } = target;
    if (this.state.savedClicked.indexOf(id) === -1) {
      this.setState({
        count: this.state.count + 1,
        highScore: (this.state.highScore <= this.state.count) ? this.state.highScore + 1 : this.state.highScore,
        value: this.state.value
      });
      this.setState(state => {
        const savedClicked = state.savedClicked.concat(id);
        return {
          savedClicked,
          value: ''
        };
      });
      this.shuffledata();
    } else {
      this.setState({
        loose: true,
        showImage: true
      })
    }
  };

  restart = () => {
    if (this.state.loose) {
      console.log('Restarted again')
      this.setState({
        count: 0,
        value: '',
        savedClicked: [],
        loose: false,
        showImage: false
      })
    }
  }
  shuffledata = () => {
    this.state.data.sort(() => Math.random() - 0.5);
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.count}
          highScore={this.state.highScore}
        />
        <Header
          result={this.state.loose}
          reset={this.restart()}
        />
        <section style={this.styles} className="section">
          <div className="row">
            {this.state.data.map(newImage => (
              <Section
                key={newImage.id}
                id={newImage.id}
                image={newImage.image}
                iwasClicked={this.addCounter}
              />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
