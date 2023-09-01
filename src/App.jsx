import "./index.css"
import Home from "./Components/Home.jsx"
import About from "./Components/About"
import Contact from "./Components/Contact"
import NotFound from "./Components/NotFound"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

export default function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}


