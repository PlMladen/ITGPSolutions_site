// src/analytics.js
import ReactGA from "react-ga4";

const initAnalytics = () => {
    ReactGA.initialize("G-VX7V5BW6FV");
    ReactGA.send("pageview");
};

export default initAnalytics;
