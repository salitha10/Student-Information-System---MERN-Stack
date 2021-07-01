import './App.css';
import NavHeader from './components/NavHeader';
import AddStudent from './components/AddStudent';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (

    <Router>
      <div>

      <NavHeader />

      <Route path="/add" extract component={AddStudent} />

      </div>
    </Router>

  );
}

export default App;
