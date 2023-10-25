import { useState, useEffect } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
  };

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default App;
