import { Link } from "react-router-dom";

function Users() {
  const users = [
    { id: 1, name: "Saraswathi" },
    { id: 2, name: "Ramya" },
    { id: 3, name: "Kavitha" },
  ];

  return (
    <div>
      <h1>Users Page</h1>

      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Users;
