import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeScreen from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/Home"></Link>
        </nav>

        <Route path="/Home" exact component={HomeScreen} />
      </div>
    </Router>
  );
}

export default App;
