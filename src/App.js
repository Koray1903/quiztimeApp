import React from "react";
import {Provider} from "react-redux";
import store from "./components/redux/store";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import QuizPage from "./components/QuizPage";
import Homepage from "./components/Homepage";
import Results from "./components/Results";


function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>

          <Route exact path="/">
            <Homepage/>
          </Route>

          <Route exact path="/Quiz">
            <QuizPage/>
          </Route>

          <Route exact path="/Result" component={Results}/>

        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
