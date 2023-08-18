import "./ChallangeDetailCard.css";

const ChallangeDetailCard = ({ cradName, cardValue }) => {
  return (
    <div className="card-detalis ">
      <div class="card">
        <div class="card-body d-flex justify-content-center fs-5  fw-light ">
          {cradName}
          </div>
          <div class="card-body d-flex justify-content-center ">
          {cardValue }
        </div>
      </div>
    </div>
  );
};

export default ChallangeDetailCard;
