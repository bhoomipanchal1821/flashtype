import './TestLetter.css'

const TestLetter = ({individualLetterInfo}) =>{
const { status } = individualLetterInfo;

const statusClass = {
    correct:"fs-6-correct",
    incorrect:"fs-6-incorrect",
    notAttampted:"fs-6-not-attempted"
}[status]
    return(
        <div className="d-inline">
            <span className={`fs-6 ${statusClass}`}>{individualLetterInfo.testLetter}</span>
        </div>
    )
}

export default TestLetter;