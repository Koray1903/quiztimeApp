import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {
  addamount,
  addcategory,
  adddifficulty,
  addtype,
  fetchquestions,
  addStartTime
} from "./redux";
import "../style/Settings.css";

const Settings = props => {

  const [categoryList, setCategoryList] = useState([]);

  const questionAmountArray = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

  // Fetching Categories
  const fetchAllCategories = async () => {
    const fetchCategories = await fetch("https://opentdb.com/api_category.php");
    const fetchedCategories = await fetchCategories.json();
    setCategoryList([...fetchedCategories.trivia_categories]);
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);
  // Fetching Categories

  // Fetching Questions
  useEffect(() => {
    props.fetchdata(props.url);
  }, [props.url]);
  // Fetching Questions

  return (
    <>
      <p id="ModalHeader">SETTINGS</p>
      {/* QUESTION AMOUNT */}
      <div>
        <label>Number of Questions</label>
      </div>
      <div>
        <select>
          {questionAmountArray.map((item, index) =>
            <option onClick={() => props.addamount(`${questionAmountArray[index]}`)}
                    key={index}>{questionAmountArray[index]}</option>)}
        </select>
      </div>
      {/* QUESTION AMOUNT */}

      {/* QUESTION CATEGORY */}
      <div>
        <label>Select a Category</label>
      </div>
      <div>
        <select>
          {categoryList.map((item, index) =>
            <option onClick={() => props.addcategory(`${item.id}`)}
                    key={index}>{item.name}</option>)}
        </select>
      </div>
      {/* QUESTION CATEGORY */}

      {/* QUESTION DIFFICULTY */}
      <div>
        <label>Select a Difficulty</label>
      </div>
      <div>
        <select>
          <option onClick={() => props.adddifficulty("")}>All</option>
          <option onClick={() => props.adddifficulty("easy")}>Easy</option>
          <option onClick={() => props.adddifficulty("medium")}>Medium</option>
          <option onClick={() => props.adddifficulty("hard")}>Hard</option>
        </select>
      </div>
      {/* QUESTION DIFFICULTY */}

      {/* QUESTION TYPE */}
      <div>
        <label>Select a Question Type</label>
      </div>
      <div>
        <select>
          <option onClick={() => props.addtype("")}>Both</option>
          <option onClick={() => props.addtype("multiple")}>Multiple Choice</option>
          <option onClick={() => props.addtype("boolean")}>True / False
          </option>
        </select>
      </div>
      {/* QUESTION TYPE */}

      {/* Start & Close Buttons */}
      <Link to="/Quiz">
        <button className="startButton" onClick={() => props.addStartTime()}>START</button>
      </Link>
      {/* Start & Close Buttons */}
    </>
  );
};

const mapStateToProps = state => {
  return {
    url: state.reducerUrl.url.newUrl
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addamount: amount => dispatch(addamount(amount)),
    addcategory: category => dispatch(addcategory(category)),
    adddifficulty: difficulty => dispatch(adddifficulty(difficulty)),
    addtype: type => dispatch(addtype(type)),
    fetchdata: url => dispatch(fetchquestions(url)),
    addStartTime: () => dispatch(addStartTime())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);