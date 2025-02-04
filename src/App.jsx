import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <header>
        <h1>Welcome to My Learning PWA</h1>
        {deferredPrompt && (
          <button onClick={handleInstallClick} className="install-button">
            Install App
          </button>
        )}
      </header>

      <main>
        <div className="module-container">
          <div className="module-box">
            <h2>Module 1: Introduction to React</h2>
            <p>Learn the basics of React and how to build user interfaces.</p>
          </div>
          <div className="module-box">
            <h2>Module 2: Progressive Web Apps</h2>
            <p>Discover how to build PWAs using Workbox and Vite.</p>
          </div>
          <div className="module-box">
            <h2>Module 3: Advanced React Patterns</h2>
            <p>Explore advanced React patterns and best practices.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
