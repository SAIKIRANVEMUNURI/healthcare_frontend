import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddPerson from './components/AddPerson';
import GetPerson from './components/GetPerson';
import GetAllPersons from './components/GetAllPersons';
import DeletePerson from './components/DeletePerson';
import Home from './components/Home';
import logo from 'C:/Users/saiki/Documents/Healthcare/healthcare/src/hc.jpg'; // Adjust the path if necessary

import './App.css'; // If you have a global CSS file

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                      <li> <img src={logo} alt="Logo" className="hlogo" /> </li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add-person">Add Person</Link></li>
                        <li><Link to="/get-person">Get Person</Link></li>
                        <li><Link to="/get-all-persons">Get All Persons</Link></li>
                        <li><Link to="/delete-person">Delete Person</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-person" element={<AddPerson />} />
                    <Route path="/get-person" element={<GetPerson />} />
                    <Route path="/get-all-persons" element={<GetAllPersons />} />
                    <Route path="/delete-person" element={<DeletePerson />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
