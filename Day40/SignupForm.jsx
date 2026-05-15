import { useState } from "react";
import TextInput from "./TextInput";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const isNameValid = name.trim() !== "";
  const isEmailValid = email.includes("@");
  const isPasswordValid = password.length >= 6;

  const isFormValid = isNameValid && isEmailValid && isPasswordValid;

  function handleSubmit(e) {
    e.preventDefault();

    if (!isNameValid) {
      alert("Name is required");
      return;
    }

    if (!isEmailValid) {
      alert("Enter valid email");
      return;
    }

    if (!isPasswordValid) {
      alert("Password must be at least 6 characters");
      return;
    }

    setData({
      name,
      email,
      password,
    });

    setSubmitted(true);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setData(null);
    setSubmitted(false);
  }

  return (
    <div
      style={{
        backgroundColor: "lightsteelblue",
        padding: "20px",
        margin: "20px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1>Signup Form</h1>

        <TextInput
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            marginRight: "10px",
          }}
        >
          Submit
        </button>

        <button
          type="button"
          onClick={clearForm}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px",
          }}
        >
          Clear
        </button>
      </form>

      {submitted && (
        <h2 style={{ color: "green" }}>Form Submitted Successfully</h2>
      )}

      {data && (
        <div
          style={{
            backgroundColor: "white",
            padding: "15px",
            marginTop: "20px",
          }}
        >
          <h2>Preview</h2>

          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
        </div>
      )}
    </div>
  );
}

export default SignupForm;
