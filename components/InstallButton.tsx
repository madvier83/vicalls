// @ts-nocheck
"use client";
import { useState, useEffect } from "react";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const checkInstallation = () => {
      // Check if app is installed
      if (
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone
      ) {
        setIsInstalled(true);
      }
    };

    checkInstallation();

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstalled(false);
    });

    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => console.log("Service worker registered", reg))
        .catch(() => console.log("Service worker registration failed"));
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", null);
      window.removeEventListener("appinstalled", null);
    };
  }, []);

  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };

  const promptAppInstall = async () => {
    if (isIos()) {
      // Write pop-up message for iOS here.
    } else {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        setDeferredPrompt(null);
      }
    }
  };

  const openApp = () => {
    window.location.href = window.location.origin; // Or any other URL for your app
  };

  if (isInstalled) {
    return (
      <div
        onClick={openApp}
        className="bg-green-500 px-3 py-2 text-center w-full text-sm text-white rounded-xl line-clamp-1 font-semibold"
      >
        Open App
      </div>
    );
  }

  return (
    <div
      onClick={promptAppInstall}
      className="bg-blue-500 px-3 py-2 text-center w-full text-sm text-white rounded-xl line-clamp-1 font-semibold"
    >
      Install App
    </div>
  );
};

export default InstallButton;
