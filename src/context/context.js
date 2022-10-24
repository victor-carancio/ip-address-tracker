import React, { useState, useContext, useEffect } from "react";
import { fetchIP } from "../Api/ipApi";

const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IP_TRACKER_KEY}&ipAddress=`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [ip, setIp] = useState("192.212.174.101");
  const [ipData, setIpData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getIp = async () => {
    try {
      setIsLoading(true);
      const data = await fetchIP(url, ip);
      if (data === "error") {
        setIpData({});
        setError(true);
      } else {
        setIpData(data);
        setError(false);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getIp();
  }, [ip]);
  return (
    <AppContext.Provider value={{ ip, setIp, isLoading, ipData, error }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
