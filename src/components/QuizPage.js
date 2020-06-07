import React, {useState} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import "../style/QuizPage.css";
import AnswerButtons from "./QuizPage/AnswerButtons";
import NotFoundPage from "./NotFoundPage";
import Question from "./QuizPage/Question";
import CategoryTypeDifficulty from "./QuizPage/CategoryTypeDifficulty";
import {addFinishTime} from "./redux";


const QuizPage = props => {

  // Next question
  const [pageSecond, setPageSecond] = useState(1);
  const [pageFirst, setPageFirst] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);

  const handlNextClick = () => {
    if (pageFirst !== props.data.length - 1) {
      setPageSecond(pageSecond + 1);
      setPageFirst(pageFirst + 1);
      setQuestionNumber(questionNumber + 1);
    } else {
      return null;
    }
  };
  // Next question

  return (
    <>
      {(props.data.length > 0 && props.data) ? props.data.slice(pageFirst, pageSecond).map(question =>

          <div className="QuizMain">
            <Link to="/">
              <p className="returnHomepageQuiz">HOMEPAGE</p>
            </Link>
            <div className="QuestionBackground">

              {/* CATEGORY TYPE DIFFICULTY COMPONENT */}
              <CategoryTypeDifficulty question={question}/>
              {/* CATEGORY TYPE DIFFICULTY COMPONENT */}

              {/* QUESTION COMPONENT */}
              <Question question={question} questionNumber={questionNumber}/>
              {/* QUESTION COMPONENT */}

              {/* ANSWER BUTTONS COMPONENT */}
              <AnswerButtons question={question} pageFirst={pageFirst} pageSecond={pageSecond}/>
              {/* ANSWER BUTTONS COMPONENT */}

              <div className="buttonFlexMain">
                {/* NEXT QUESTION AND FINISH BUTTON */}
                {pageFirst !== props.data.length - 1 ?
                  <button className="buttonText" onClick={handlNextClick}>Next Question</button>
                  :
                  <Link to="/Result"> {/* LINK TO RESULTS PAGE */}
                    <button className="buttonText" onClick={() => props.addFinishTime()}>Finish
                    </button>
                  </Link>
                }
                {/* NEXT QUESTION AND FINISH BUTTON */}
              </div>

            </div>
          </div>
        ) :
        <NotFoundPage/> // NOT FOUND COMPONENT
      }
    </>
  );
};

const mapStateToProps = state => {
  return {
    url: state.reducerUrl.url.newUrl,
    data: state.reducerUrl.url.questionsArray
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFinishTime: () => dispatch(addFinishTime())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizPage);