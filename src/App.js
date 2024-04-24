import './App.css';

import Create from './Components/Create/Create';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'; 
import Read from './Components/Read/Read';
import Update from './Components/Update/Update'; 
import Display from './Components/Display/Display'; 

function App() {
  return (

    <Router>
      <div className="main">
        {/* <h2 className="main-header">Employee Details</h2> */}
        {/* <nav>
          <ul>
            <li><Link to='/create'>Add a new employee details</Link></li>
          </ul>
        </nav> */}
        <Routes>
     
          <Route path='/' exact element={<Dashboard/>} />

          <Route path='/read' exact element={<Read/>} />

          <Route path='/create'exact element={<Create/>} />
       
          <Route path='/display' exact element={<Display/>} /> 

          <Route path='/update' exact element={<Update/>} />

        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
