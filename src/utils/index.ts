export const getFbcFbpCookies = () => {
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
    return null;
  };

  return {
    fbc: getCookie("_fbc"),
    fbp: getCookie("_fbp"),
  };
};

export const getClientIp = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (err) {
    console.error("Error getting IP:", err);
    return null;
  }
};
