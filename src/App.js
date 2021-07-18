import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Loginpage from './components/login_component';
import Eventpage from './components/event_component';


function App() {
  return (
    <div>
  
      <Router>
        <section>
          <Switch>
            <Route path="/login"  eexact component={Loginpage} />
            <Route path="/event" component={Eventpage} />  
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
