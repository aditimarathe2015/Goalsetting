import logo from './logo.svg';
import './App.css';
import {Header} from './Core/Header'
import {Footer} from './Core/Footer'
import {Nav} from './Core/Nav'
import {  Route,Switch } from "react-router-dom";
import {Areas} from './Component/Areas'
import Period from './Component/Period'
import GoalSetting from './Component/GoalSetting'
import {Pagenotfound} from './Component/Pagenotfound'

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Nav></Nav>
   
     <Switch>
      <Route path="/area" exact component={Areas}></Route>
       <Route path="/period" exact component={Period}></Route>
       <Route path="/goal" exact component={GoalSetting}></Route>
       <Route  component={Pagenotfound}></Route>
       <Route path="/area/:id" exact component={Areas}></Route>
       </Switch>

       <Footer></Footer>
    </div>
  );
}

export default App;
