type UserProps = {
  id: number;
  name: string;
};

type UserListProps = {
  users: UserProps[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default UserList;
