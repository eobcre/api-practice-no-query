import { useState, useEffect } from 'react';
import UserList from './components/UserList';

const App: React.FC = () => {
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
      <h2>Users</h2>
      <UserList users={users} />
    </div>
  );
};

export default App;
