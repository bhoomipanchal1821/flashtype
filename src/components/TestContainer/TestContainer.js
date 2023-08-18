import TryAgain from "../TryAgain/TryAgain";
import TypingChallangeContainer from "../TypingChallangeContainer/TypingChallangeContainer";
import "./TestContainer.css";

const TestContainer = ({
  selectedParagraph,
  timeStarted,
  timeRemaining,
  word,
  characters,
  wpm,
  testInfo,
  onInputChange,
  startAgain
}) => {
  return (
    <div className="bg-white text-dark fs-1 mt-5">
      {timeRemaining > 0 ? (
        <TypingChallangeContainer
          selectedParagraph={selectedParagraph}
          timeStarted={timeStarted}
          timeRemaining={timeRemaining}
          word={word}
          characters={characters}
          wpm={wpm}
          testInfo={testInfo}
          onInputChange={onInputChange}
        />
      ) : (
        <div className="bg-white text-dark fs-1 d-flex align-items-center justify-content-center mt-5">
          <TryAgain word={word} characters={characters} wpm={wpm} startAgain={startAgain}/>
        </div>
      )}
    </div>
  );
};

export default TestContainer;
