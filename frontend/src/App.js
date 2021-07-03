import './App.css';
import NavHeader from './components/NavHeader';
import AddStudent from './components/AddStudent';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AllStudents from './components/AllStudents';
import EditStudent from './components/EditStudent';

function App() {
  return (

    <Router>
      <div>

      <NavHeader />

      <Route path="/" exact component = {AllStudents} />
      <Route path="/add" exact component={AddStudent} />
      <Route path="/update/:id" exact component={EditStudent} />

      </div>
    </Router>

  );
}

export default App;
