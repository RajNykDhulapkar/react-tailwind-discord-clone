import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Header />
                    <Hero />
                </Route>
                <Route exact path='/channels'>
                    <Home />
                </Route>
                <Route exact path='/channels/:id'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
