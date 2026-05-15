function TextInput({ label, type, value, onChange }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>{label}</label>
      <br />

      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{
          padding: "8px",
          marginTop: "5px",
        }}
      />
    </div>
  );
}

export default TextInput;
