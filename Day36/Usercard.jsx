const UserCard = ({ name, age }) => {
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        color:"black",
        border: "2px solid black",
        margin: "5px",
        padding: "4px",
      }}
    >
      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>
    </div>
  );
};
export default UserCard;
