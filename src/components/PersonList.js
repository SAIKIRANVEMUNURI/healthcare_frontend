import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PersonList.css'; // Import the CSS file

const PersonList = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        async function fetchPersons() {
            try {
                const response = await axios.get('http://localhost:8080/api/persons');
                setPersons(response.data);
            } catch (error) {
                console.error('Error fetching persons:', error);
            }
        }
        fetchPersons();
    }, []);

    return (
        <div>
            <h2>Person List</h2>
            <table className="person-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person) => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PersonList;
