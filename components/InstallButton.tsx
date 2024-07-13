// @ts-nocheck
import { useState, useEffect } from "react";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => console.log("Service worker registered", reg))
        .catch((err) =>
          console.error("Failed to register service worker", err)
        );
    }
  }, []);

  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };

  const promptAppInstall = async () => {
    if (isIos()) {
      // Handle iOS installation here
      // Example: alert("Install instructions for iOS");
    } else {
      // if (deferredPrompt) {
      deferredPrompt?.prompt();
      const choiceResult = await deferredPrompt?.userChoice;
      // console.log(choiceResult.outcome);
      setDeferredPrompt(null); // Reset after user prompt
      // } else {
      //   alert("You have already installed the app!");
      // }
    }
  };

  return (
    <div
      onClick={promptAppInstall}
      className="bg-blue-1 px-3 py-2 text-center w-full text-sm text-white rounded-xl line-clamp-1 font-semibold cursor-pointer"
    >
      Install App
    </div>
  );
};

export default InstallButton;
