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
    // Get the API URL from your environment variables, or use the local default
    const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
    
    const pingBackend = async () => {
      try {
        // Send a lightweight GET request to your metadata endpoint
        await fetch(`${API_URL}/metadata`);
        console.log("Keep-alive ping successful.");
      } catch (error) {
        console.error("Keep-alive ping failed:", error);
      }
    };

    // Set an interval to run every 10 minutes (600,000 milliseconds)
    const intervalId = setInterval(pingBackend, 600000);

    // Call it once immediately when the app loads so the server wakes up right away
    pingBackend();

    // Cleanup function to clear the interval if the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Routes />
  );
}

export default App;
