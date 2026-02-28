// import React from "react";
// import Routes from "./Routes";

// function App() {
//   return (
//     <Routes />
//   );
// }

// export default App;
import React, { useEffect } from "react";
import Routes from "./Routes";

function App() {
  useEffect(() => {
    // Matches the API connection logic from ModelDemo.jsx
    const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
    
    const pingBackend = async () => {
      try {
        // Hitting the /metadata endpoint to keep the server awake
        await fetch(`${API_URL}/metadata`);
        console.log("Keep-alive ping successful.");
      } catch (error) {
        console.error("Keep-alive ping failed:", error);
      }
    };

    
    const intervalId = setInterval(pingBackend, 300000);

    // Call it once immediately when the app loads
    pingBackend();

    // Cleanup function to clear the interval if the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Routes />
  );
}

export default App;
