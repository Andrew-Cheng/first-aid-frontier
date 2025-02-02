import React from "react";
import "./App.css";

function App() {
  return (
    <div className="bg">
      <iframe
        className="video"
        src="/index.html"
        title="Tower Defense"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default App;
