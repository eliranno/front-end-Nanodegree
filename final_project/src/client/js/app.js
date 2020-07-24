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
    console.log("button was clicked");
    const zip = document.querySelector("#zip").value;
    let response = queryFunc(zip);
    response.then(data => {
        const obj = {
            date: newDate,
            temp: data.main.temp,
            content: document.getElementById('feelings').value
        }
        postData("http://localhost:3000/projectData", obj)
        updateUI(data);
    });

});





function updateUI(data) {
    let dateElement = document.getElementById('date');
    let tempElement = document.getElementById('temp');
    let contentElement = document.getElementById('content');

    const serverData = getData("http://localhost:3000/projectData");

    console.log("recevied " + serverData);
    serverData.then(d => {
        dateElement.innerText = d.date;
        tempElement.innerText = d.temp;
        contentElement.innerText = d.content;
    });
};


async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

const getData = async function(url) {
    let response = await fetch(url)
    try {
        let data = response.json();
        console.log(data);

        return data;
    } catch (err) {
        console.log(err);
    }

}