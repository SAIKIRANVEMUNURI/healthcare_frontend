import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import './AddPerson.css'; // Import the CSS file

const AddPerson = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [persons, setPersons] = useState([]);

    const fetchPersons = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/persons');
            setPersons(response.data);
        } catch (error) {
            console.error('Error fetching persons:', error);
        }
    };

    useEffect(() => {
        fetchPersons();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/persons', { name, email });
            alert('Person added successfully!');
            setName('');
            setEmail('');
            fetchPersons();
        } catch (error) {
            console.error('Error adding person:', error);
        }
    };

    return (
        <div className="container">
            <h2>Add New Person</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Add Person</button>
            </form>
        </div>
    );
};

export default AddPerson;
