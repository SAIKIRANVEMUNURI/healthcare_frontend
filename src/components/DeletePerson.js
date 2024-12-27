import React, { useState } from 'react';
import axios from 'axios';
 // Optional: Add styles for DeletePerson

const DeletePerson = () => {
    const [id, setId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:8080/api/persons/${id}`);
            alert('Person deleted successfully!');
            setId('');
        } catch (error) {
            console.error('Error deleting person:', error);
        }
    };

    return (
        <div className="container">
            <h2>Delete Person</h2>
            <form onSubmit={handleSubmit}>
                <label>ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
                <button type="submit">Delete Person</button>
            </form>
        </div>
    );
};

export default DeletePerson;
