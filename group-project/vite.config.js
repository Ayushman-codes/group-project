import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My React Project</h1>
      <p>This is my first React application.</p>

      <button
        onClick={() => alert("Hello BCA Student!")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;