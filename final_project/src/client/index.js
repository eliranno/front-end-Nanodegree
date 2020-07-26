import './styles/style.scss'
import { checkDates, showModal } from './js/ui'
import { getGeoLocation, getWeatherForecast, getImageURL } from './js/requests'

let showTripDetailsButton = document.querySelector("#show-details-button");
init();

function init() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').then(registration => {
                console.log('SW registered: ', registration);
            }).catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
        });
    }
}

showTripDetailsButton.addEventListener("click", async(event) => {
    console.log("showTripDetailsButton was clicked");
    let startDate = new Date(document.querySelector("#start-date").value + "T00:00");
    let endDate = new Date(document.querySelector("#end-date").value + "T00:00");
    let isValidRage = checkDates(startDate, endDate);
    if (!isValidRage) {
        alert("the dates you entered are invalid.");
        return;
    }
    let city = document.querySelector("#city-input").value;
    if (city.length < 2) {
        alert("the name of the city is invalid");
        return;
    }
    let trip = {};

    let geoLocation = await getGeoLocation(city);

    let photo = await getImageURL(city, geoLocation.countryCode);

    trip.latitude = geoLocation.latitude;
    trip.longitude = geoLocation.longitude;
    trip.countryCode = geoLocation.countryCode;
    trip.cityName = city;
    trip.start = startDate;
    trip.end = endDate;
    trip.photo = photo;

    trip.weatherForecast = await getWeatherForecast(geoLocation.latitude, geoLocation.longitude);
    console.log(trip);
    showModal(trip);
});