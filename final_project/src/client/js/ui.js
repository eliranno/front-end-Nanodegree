import { saveTrip } from "./requests"
import { checkDates, countdown } from './utils'
let tripDetails = {};


function showModal(trip) {
    let modal = document.querySelector("#trip-details-modal");
    modal.style.display = "block"
    let cityNameElement = document.querySelector("#modal-city-name");
    cityNameElement.innerHTML = trip.cityName;
    const daysLeft = countdown(trip.start);
    document.querySelector('.trip-countdown').innerHTML = `<p">Your trip to <b>${trip.cityName}</b> is ${daysLeft} days away</p>`;

    // Display weather info
    const weather = trip.weatherForecast;
    if (daysLeft > 15) {
        document.querySelector('.trip-weather').innerHTML = `<p">The current weather:</p>
                                                            <p">High ${weather.data[0].high_temp}&deg;C Low ${weather.data[0].low_temp}&deg;C</p>`;
    } else {
        document.querySelector('.trip-weather').innerHTML = `<p">Weather forecast for then:</p>
                                                         <p">High ${weather.data[daysLeft].high_temp}&deg;C Low ${weather.data[daysLeft].low_temp}&deg;C</p>`;
    }

    let img = document.querySelector("#modal-trip-img");
    img.setAttribute("src", trip.photo);

    tripDetails = trip;

}


document.querySelector("#save-button").addEventListener("click", (e) => {
    saveTrip(tripDetails);
    let modal = document.querySelector("#trip-details-modal");
    modal.style.display = "none"


});

document.querySelector("#cancel-button").addEventListener("click", (e) => {
    let modal = document.querySelector("#trip-details-modal");
    modal.style.display = "none"
});


export { checkDates, showModal };