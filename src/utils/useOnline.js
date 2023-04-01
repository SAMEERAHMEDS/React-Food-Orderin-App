import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
};

export default useOnline;
