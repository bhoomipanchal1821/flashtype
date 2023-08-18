import "./ChallangeSection.css";
import TestContainer from "../TestContainer/TestContainer";
const ChallangeSection = ({
  selectedParagraph,
  timeStarted,
  timeRemaining,
  word,
  characters,
  wpm,
  testInfo,
  onInputChange,
  startAgain,
}) => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <div data-aos="fade-down" className="text-center display-2 fw-bold ">
        Take A Speed Tast Now
      </div>
      <TestContainer
        selectedParagraph={selectedParagraph}
        timeStarted={timeStarted}
        timeRemaining={timeRemaining}
        word={word}
        characters={characters}
        wpm={wpm}
        testInfo={testInfo}
        onInputChange={onInputChange}
        startAgain={startAgain}
      />
    </div>
  );
};

export default ChallangeSection;
