// @ts-nocheck
"use client";
import { useState, useEffect } from "react";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null);
      setIsVisible(false);
    }
  };

  return (
    // isVisible && (
    <button
      onClick={handleInstallClick}
      className="bg-blue-1 px-3 py-2  w-full sm:w-40 text-sm text-white rounded-xl line-clamp-1 font-semibold"
    >
      Install App
    </button>
    // )
  );
};

export default InstallButton;
