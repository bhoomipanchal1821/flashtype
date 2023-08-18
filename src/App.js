import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import ChallangeSection from "./components/ChallangeSection/ChallangeSection";
import Footer from "./components/Footer/Footer";
import React, { useInsertionEffect } from "react";

const Totaltime = 2;
const ApiUrl = " http://metaphorpsum.com/paragraphs/1/9";
const DefaultState = {
  selectedParagraph: "",
  timeStarted: false,
  timeRemaining: Totaltime,
  word: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
};

class App extends React.Component {
  state = DefaultState;

  fetchNewparagrap = () => {
    fetch(ApiUrl)
      .then((response) => response.text())
      .then((info) => {
        const selectedParagraphArray = info.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttampted",
          };
        });
        this.setState({ ...DefaultState, testInfo, selectedParagraph: info });
      });
  };

  componentDidMount() {
    this.fetchNewparagrap();
  }
  startTimer = () => {
    this.setState({ timeStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        // Change the WPM

        const timespent = Totaltime - this.state.timeRemaining;
        const wpm =
          timespent > 0 ? (this.state.word / timespent) * Totaltime : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };
  startAgain = () => this.fetchNewparagrap();
  handleInputChange = (inputvalue) => {
    if (!this.state.timeStarted) this.startTimer();

    const characters = inputvalue.length;
    const word = inputvalue.split(" ").length;
    const index = characters - 1;

    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        word,
      });

      return;
    }
    if (index >= this.state.selectedParagraph.length) {
      this.setState({
        characters,
        word,
      });
      return;
    }
    // Make a copy
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1))
      testInfo[index + 1].status = "notAttampted";

    // Check for mistake
    const isMistake = inputvalue[index] === testInfo[index].testLetter;

    // Update the testInfo
    testInfo[index].status = isMistake ? "correct" : "incorrect";

    // Update the state
    this.setState({
      testInfo,
      word,
      characters,
    });
  };

  render() {
    return (
      <div className="app">
        <div className="d-flex flex-column">
          <NavBar />
          <Landing />
          <ChallangeSection
            selectedParagraph={this.state.selectedParagraph}
            timeStarted={this.state.timeStarted}
            timeRemaining={this.state.timeRemaining}
            word={this.state.word}
            characters={this.state.characters}
            wpm={this.state.wpm}
            testInfo={this.state.testInfo}
            onInputChange={this.handleInputChange}
            startAgain={this.startAgain}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
