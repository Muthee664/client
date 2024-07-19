import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    age: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: ''
    }
  });

  useEffect(() => {
    fetch('/api/users') // Fetch from the correct endpoint
      .then(response => response.json())
      .then(data => {
        setUsers(data); // Set the user data
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevUser => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(response => response.json())
      .then(data => {
        setUsers(prevUsers => [...prevUsers, data.user]);
        setNewUser({
          name: '',
          email: '',
          age: '',
          address: {
            street: '',
            city: '',
            state: '',
            zip: ''
          }
        });
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };

  return (
    <div>
      <h1>Users</h1>
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        users.map((user, i) => (
          <div key={i}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Address: {user.address ? `${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zip}` : 'N/A'}</p>
            <hr />
          </div>
        ))
      )}
      
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={newUser.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={newUser.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={newUser.age} onChange={handleChange} />
        </label>
        <br />
        <fieldset>
          <legend>Address</legend>
          <label>
            Street:
            <input type="text" name="street" value={newUser.address.street} onChange={handleAddressChange} />
          </label>
          <br />
          <label>
            City:
            <input type="text" name="city" value={newUser.address.city} onChange={handleAddressChange} />
          </label>
          <br />
          <label>
            State:
            <input type="text" name="state" value={newUser.address.state} onChange={handleAddressChange} />
          </label>
          <br />
          <label>
            Zip:
            <input type="text" name="zip" value={newUser.address.zip} onChange={handleAddressChange} />
          </label>
        </fieldset>
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default App;
