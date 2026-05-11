import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Layout from "./Layout";
import Button from "./Button";
import UserCard from "./Usercard";


function App() {
  const [count, setCount] = useState(0);

  function btnClick() {
    alert("The Button is Clicked");
  }

  return (
    <>
      <Layout>
        <h2>Welcome to this Page</h2>

        <UserCard name="Saraswathi" age={22} />
        <UserCard name="Kavitha" age={27} />

        <Button
          label="Click Here"
          style={{ display: "flex", alignItems: "center" }}
          onClick={btnClick}
        />
      </Layout>
    </>
  );
}

export default App;
