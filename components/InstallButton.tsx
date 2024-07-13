// @ts-nocheck
"use client";
import { useState, useEffect } from "react";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const beforeInstallHandler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const appInstalledHandler = () => {
      setIsInstalled(true);
    };

    window.addEventListener("beforeinstallprompt", beforeInstallHandler);
    window.addEventListener("appinstalled", appInstalledHandler);

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => console.log("SW registered: ", reg))
        .catch((err) => console.log("SW registration failed: ", err));
    }

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("beforeinstallprompt", beforeInstallHandler);
      window.removeEventListener("appinstalled", appInstalledHandler);
    };
  }, []);

  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };

  const promptAppInstall = async () => {
    if (isIos()) {
      // Write pop-up message for iOS here.
    } else if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
      }
    } else {
      // Do something when the app is already installed
      alert("You have already installed the app!");
    }
  };

  if (isInstalled) {
    return null; // Do not render the button if the app is already installed
  }

  return (
    <button
      onClick={promptAppInstall}
      className="bg-blue-500 px-3 py-2 w-full sm:w-40 text-sm text-white rounded-xl line-clamp-1 font-semibold"
    >
      Install App
    </button>
  );
};

export default InstallButton;
