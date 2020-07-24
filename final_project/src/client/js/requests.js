const geonamesUrl = 'http://api.geonames.org/';
const geonamesKey = 'eliranno';
const geonamesQuery = 'searchJSON?formatted=true&q=';

const weatherBitUrl = "http://api.weatherbit.io/v2.0/forecast/daily?";
const weatherBitKey = '03348f4c2814492daa11fe4fa1e19ac1';

const pixabayURL = 'https://pixabay.com/api/?key=';
const pixabayKey = '17633134-cb398b90fe669344f1fd05d5b';



async function getGeoLocation(location) {
    const endpoint = geonamesUrl + geonamesQuery + location + '&username=' + geonamesKey + '&style=full';
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            const location = {};
            const jsonRes = await response.json();

            location.latitude = jsonRes.geonames[0].lat;
            location.longitude = jsonRes.geonames[0].lng;
            location.countryCode = jsonRes.geonames[0].countryCode;

            console.log(location);
            return location;
        }
    } catch (error) {
        console.log(error);
    }
}


async function getWeatherForecast(latitude, longitude) {
    console.log("getting forecast");
    const endpoint = weatherBitUrl + "key=" + weatherBitKey + "&lat=" + latitude + "&lon=" + longitude;
    try {
        const response = await fetch('http://localhost:3000/forecast', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ endpoint: endpoint })
        });
        if (response.ok) {
            const jsonRes = await response.json();
            return jsonRes;
        }
    } catch (error) {
        console.log(error);
    }
}


async function saveTrip(trip) {
    const endpoint = 'http://localhost:3000/save';
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ trip })
        });
        if (response.ok) {
            true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}


async function getImageURL(city, country) {
    const queryCity = `&q=${city}&image_type=photo&pretty=true&category=places`;
    const queryCountry = `&q=${country}&image_type=photo&pretty=true&category=places`

    const cityEndpoint = pixabayURL + pixabayKey + queryCity;
    const countryEndpoint = pixabayURL + pixabayKey + queryCountry;
    try {
        let response = await fetch(cityEndpoint);
        if (response.ok) {
            let jsonRes = await response.json();
            if (jsonRes.totalHits === 0) {
                // If not, display pictures for the country
                response = await fetch(countryEndpoint);
                if (response.ok) {
                    jsonRes = await response.json();
                    return jsonRes.hits[0].largeImageURL;
                }
            }
            return jsonRes.hits[0].largeImageURL;
        }
    } catch (error) {
        console.log(error);
    }
}



export { getGeoLocation, getWeatherForecast, getImageURL, saveTrip }