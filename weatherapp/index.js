const temperaturefield = document.querySelector(".weather1")
const cityfield = document.querySelector(".weather2 p")
const datefield = document.querySelector(".weather2 span")
const iconfield = document.querySelector(".weather3 img")
const weatherfield = document.querySelector(".weather3 span")
const form = document.querySelector("form")
const input = document.querySelector(".searchfield")



let target = "Kathmandu"
const fetchdata = async () => {
    try {
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=64ceb1706207497683f24700240408&q=${target}`);
        const data = await res.json();
        const { current: { temp_c, condition: { text, icon } }, location: { name, localtime },

        } = data;
        temperaturefield.innerHTML = `${temp_c}&deg;C`;
        cityfield.innerHTML = name;
        iconfield.src = icon;
        weatherfield.innerHTML = text;
        const exacttime = localtime.split(" ")[1];
        const exactdate = localtime.split(" ")[0];

        const currentday = new Date();
        let newdate = getTodayDay(currentday.getDay());

        datefield.innerHTML = `${exactdate} -${newdate} ${exacttime}`;
    }
    catch (err) {
        console.log(err);
    }
};

fetchdata(target);
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(input.value.trim()===""){
        alert("Please enter your location");
    }else{
        target=input.value;
        fetchdata(target);
    }
})

function getTodayDay(num) {
    switch (num) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default:
            return "Invalid day";
            break;
    }
}