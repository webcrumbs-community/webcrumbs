import React from "react";

export default function Widget() {
  return (
    <div style={{ marginTop: "16px" }}>
      <div
        style={{
          backgroundColor: "#fafafa",
          boxShadow: "0px 3px 6px #ccc",
          padding: "16px",
        }}
      >
        <h2>Plugin Showcase: Plugin 1 For inject</h2>
        <p>
          This is where your plugin snippet would go. It's wrapped in a neat
          little container with a light background, making it stand out just
          right.
        </p>
        <small>Loaded from https://localhost:3001</small>
      </div>
    </div>
  );
}
