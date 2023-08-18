import ChallangeDetailCard from "../ChallangeDetailCard/ChallangeDetailCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

const TypingChallangeContainer = ({
  selectedParagraph,
  timeStarted,
  timeRemaining,
  word,
  characters,
  wpm,
  testInfo ,
  onInputChange
}) => {
  return (
    <div className="d-flex flex-column  flex-grow-1  ">
      <div className="d-flex flex-row">
        <ChallangeDetailCard cradName="word" cardValue={word} />
        <ChallangeDetailCard cradName="characters" cardValue={characters} />
        <ChallangeDetailCard cradName="wpm" cardValue={wpm} />
      </div>
      <div className="challange">
        <TypingChallenge
          timeStarted={timeStarted}
          timeRemaining={timeRemaining}
          selectedParagraph={selectedParagraph}
          testInfo={testInfo}
          onInputChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default TypingChallangeContainer;
