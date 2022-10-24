export const fetchIP = async (url, ipAddress) => {
  try {
    const response = await fetch(`${url}${ipAddress}`);
    const data = await response.json();
    /* console.log(data); */
    if (data.code === 422) {
      console.log("la ip no es valida");
      return "error";
    } else {
      const {
        ip,
        location: { city, region, lat, lng, timezone },
        isp,
      } = data;

      return {
        ip,
        location: `${region}, ${city}`,
        time: `UTC ${timezone}`,
        isp,
        geoCode: [lat, lng],
      };
    }
  } catch (error) {
    /* console.log(error); */
  }
};
