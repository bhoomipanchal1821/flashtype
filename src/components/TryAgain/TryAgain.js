import "./TryAgain.css";
const TryAgain = ({ word, characters, wpm ,startAgain}) => {
  return (
    <div className="fw-light ">
      <div className="fw-bold text-decoration-underline">Test Results</div>
      <div className="fs-4 mt-4">
        <div>
          <p>
            <b>characters:</b>
            {characters}
          </p>
        </div>
        <div>
          <p>
            <b>word:</b>
            {word}
          </p>
        </div>
        <div>
          <p>
            <b>speed:</b> {wpm} wpm
          </p>
        </div>
      </div>
      <div className="whole btn">
        <button onClick={()=>startAgain()} className="btn btn-secondary">Re-try</button>
        <button
          className="btn btn-primary"
          onClick={() =>
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u=",
              "facebook-share-dialog",
              "width=800,height=600"
            )
          }
        >
          Share
        </button>
        <button
          className="btn btn-info"
          onClick={() =>
            window.open(
              "https://twitter.com/intent/tweet?text=Check%20this%20out%20",
              "Twitter",
              "width=800,height=600"
            )
          }
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TryAgain;
