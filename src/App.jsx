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
            <h2>Modul 1: Memahami Anemia</h2>
            <p>
              Pelajari apa itu anemia, penyebabnya, dan bagaimana anemia
              memengaruhi kesehatan remaja putri.
            </p>
          </div>
          <div className="module-box">
            <h2>Modul 2: Gejala dan Diagnosis</h2>
            <p>
              Ketahui gejala umum anemia dan bagaimana anemia didiagnosis pada
              remaja putri.
            </p>
          </div>
          <div className="module-box">
            <h2>Modul 3: Pencegahan dan Pengobatan</h2>
            <p>
              Temukan cara mencegah anemia melalui pola makan, suplemen, dan
              perubahan gaya hidup.
            </p>
          </div>
          <div className="module-box">
            <h2>Modul 4: Makanan Kaya Zat Besi</h2>
            <p>
              Pelajari tentang makanan kaya zat besi yang dapat membantu
              mengatasi anemia pada remaja putri.
            </p>
          </div>
          <div className="module-box">
            <h2>Modul 5: Dampak pada Prestasi Akademik</h2>
            <p>
              Pahami bagaimana anemia dapat memengaruhi konsentrasi, energi, dan
              prestasi akademik.
            </p>
          </div>
          <div className="module-box">
            <h2>Modul 6: Mitos dan Fakta Tentang Anemia</h2>
            <p>
              Bantah mitos umum dan pelajari fakta seputar anemia pada remaja
              putri.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
