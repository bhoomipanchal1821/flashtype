import TestLetter from "../TestLetter/TestLetter";
import "./TypingChallenge.css";

const TypingChallenge = ({

  timeStarted,
  timeRemaining,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className="conatiner ">
      <div className=" text-center">
        <p className="fs-4">
          00.{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
        </p>
        <p className="text-danger fs-5">
          {!timeStarted && "Start typing to Start the test"}
        </p>
      </div>
      <div className=" w-75 row fs-5 mt-5  mx-auto">
        {/* <div className="col overflow-scroll api ">{{selectedParagraph}}</div> */}
        <div className="col overflow-scroll api ">
          {testInfo.map((individualLetterInfo ,index) => {
            return <TestLetter key={index} individualLetterInfo={individualLetterInfo}/>
          })}
        </div>
        <textarea
        onChange={(e)=>onInputChange(e.target.value)}
          className="textarea overflow-scroll col fs-6"
          placeholder="start typing"
        ></textarea>
      </div>
    </div>
  );
};

export default TypingChallenge;
