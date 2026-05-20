import { useState, useEffect, useCallback, useMemo } from "react";

function UserDashboard() {
  // State
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  // 1 & 5. Fetch users using useEffect + cleanup
  const fetchUsers = useCallback(() => {
    const controller = new AbortController();

    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.log(err);
        }
      });

    // cleanup function
    return () => {
      console.log("Cleanup Running...");
      controller.abort();
    };
  }, [filter]);

  // 1 & 4. Run on mount + refetch when filter changes
  useEffect(() => {
    const cleanup = fetchUsers();

    return cleanup;
  }, [fetchUsers]);

  // 3. Expensive calculation using useMemo
  const averageNameLength = useMemo(() => {
    console.log("Calculating Average...");

    if (users.length === 0) return 0;

    let total = users.reduce((sum, user) => {
      return sum + user.name.length;
    }, 0);

    return (total / users.length).toFixed(2);
  }, [users]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Dashboard</h1>

      {/* Filter Input */}
      <input
        type="text"
        placeholder="Search user..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      {/* 2. Refresh Button using useCallback */}
      <button onClick={fetchUsers}>Refresh</button>

      <hr />

      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h3>Total Users: {users.length}</h3>

          <h3>Average Name Length: {averageNameLength}</h3>

          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default UserDashboard;
