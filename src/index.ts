import './css/style.css';
import Weather from './ts/weather';
import { UI } from './ts/UI';
import { Store } from './ts/store';

const store = new Store();
const {city, countryCode} = store.getLocationData();
const ui = new UI();
const weather = new Weather(city, countryCode);

async function fetchWeather(){
	const data = await weather.getWeather();
	ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
	const city = document.getElementById('city').value;
	const countryCode = document.getElementById('countryCode').value;
	weather.changeLocation(city, countryCode);
	store.setLocationData(city, countryCode);
	fetchWeather();
	e.preventDefault();
})

