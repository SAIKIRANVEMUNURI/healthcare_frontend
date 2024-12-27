import React, { useState } from 'react';
import axios from 'axios';
import './GetPerson.css'; // Optional: Add styles for GetPerson

const GetPerson = () => {
    const [id, setId] = useState('');
    const [person, setPerson] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/api/persons/${id}`);
            setPerson(response.data);
        } catch (error) {
            console.error('Error fetching person:', error);
        }
    };

    return (
        <div className="container">
            <h2>Get Person</h2>
            <form onSubmit={handleSubmit}>
                <label>ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
                <button type="submit">Get Person</button>
            </form>
            {person && (
                <div className="person-details">
                    <h3>Person Details</h3>
                    <p>ID: {person.id}</p>
                    <p>Name: {person.name}</p>
                    <p>Email: {person.email}</p>
                </div>
            )}
        </div>
    );
};

export default GetPerson;
