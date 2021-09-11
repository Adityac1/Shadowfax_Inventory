import './App.css';
import Addingsection from './Component/Addingsection';
import AddedList from './Component/AddedList';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AddedCard from './Component/AddedCard';

function App() {
  return (
    <div>
      <div className="topBar">
      <p>Shadowfax Inventory</p>
      </div>
      
      <Router>
        <Switch>
          <Route path="/add">
            <Addingsection/>
          </Route>
          <Route path="/" exact>
            <AddedList/>
          </Route>
          <Route path = "/detail/:id" component={AddedCard} />
            
        </Switch>
      </Router>
      {/* <Addingsection/> */}
      {/* <AddedList/> */}
    </div>
  );
}

export default App;
