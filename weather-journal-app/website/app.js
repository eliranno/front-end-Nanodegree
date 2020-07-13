/* Global Variables */

const uri = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "1095ccd7f8ce888d732b09bb7f07f0c1";


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();




let queryFunc = async function(zipcode) {
    let queryUri = uri + "zip=" + zipcode + ",us&appid=" + apiKey;
    console.log(queryUri);
    let response = await fetch(queryUri);
    try {
        if (response.ok) {
            let data = await response.json();
            return data;
        }
    } catch {
        console.log("request failed");
    }
};


const generateButton = document.querySelector("#generate");
generateButton.addEventListener('click', () => {
    const zip = document.querySelector("#zip").value;
    let response = queryFunc(zip);
    console.log(response.main.temp);
});