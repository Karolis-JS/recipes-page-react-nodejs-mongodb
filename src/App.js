import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    link
} from "react-router-dom";

import React, {useState, useEffect} from "react"
import Upload from "./components/Upload";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Navbar from "./components/Navbar";
import SingleRecipe from "./components/SingleRecipe";
import Rewiev from "./components/Rewiev";
import UsersReview from "./components/UsersReview";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";

function App() {

    const [review, setReviews] = useState([])

  return (
    <div className="App">
        <Navbar />
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/upload">
                    <Upload/>
                </Route>

                <Route path="/allrecipes">
                    <Recipes/>
                </Route>

                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={300}
                            classNames="fade"
                        >
                            <Switch location={location}>
                                <Route path="/recipe/:id">
                                    <SingleRecipe/>
                                    <div className="reviewMain">
                                        <Rewiev addReviev={(e) => setReviews([e])}/>
                                        <UsersReview reviews={review}/>
                                    </div>
                                </Route>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />

            </Switch>

        </Router>
    </div>
  );
}

export default App;
