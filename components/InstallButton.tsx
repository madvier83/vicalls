// @ts-nocheck
import { useState, useEffect } from "react";

const InstallButton = () => {
  useEffect(() => {
    const handleInstallPrompt = () => {
      let deferredPrompt;

      window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        deferredPrompt = e;

        // Show install button or prompt
        document.getElementById("installButton").style.display = "block";
      });

      // Install button click handler
      document.getElementById("installButton").addEventListener("click", () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();

          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
              console.log("User accepted the install prompt");
            } else {
              console.log("User dismissed the install prompt");
            }
            deferredPrompt = null;
          });
        }
      });
    };

    handleInstallPrompt();
  }, []);
  return (
    <div
      // onClick={handleInstallPrompt}
      id="installButton"
      style={{ display: "none" }}
      className="bg-blue-1 px-3 py-2 text-center w-full text-sm text-white rounded-xl line-clamp-1 font-semibold cursor-pointer"
    >
      Install App
    </div>
  );
};

export default InstallButton;
