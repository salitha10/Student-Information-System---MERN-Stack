import './App.css';
import NavHeader from './components/NavHeader';
import AddStudent from './components/AddStudent';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AllStudents from './components/AllStudents';

function App() {
  return (

    <Router>
      <div>

      <NavHeader />

      <Route path="/" exact component = {AllStudents} />
      <Route path="/add" exact component={AddStudent} />

      </div>
    </Router>

  );
}

export default App;
