export class UI {
	location: any = document.getElementById('weather-location');
	description: any = document.getElementById('weather-description');
	string: any = document.getElementById('weather-string');
	humidity: any = document.getElementById('weather-humidity');
	wind: any = document.getElementById('weather-wind');

	constructor(location: any, description: any, string: any, humidity: any, wind: any){
		this.location = location;
		this.description = description;
		this.string = string;
		this.humidity = humidity;
		this.wind = wind;
	}

	render(weather: any){
		this.location.textContent = weather.name + ' / '+ weather.sys.country;
    this.description.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp + ' °c';
    this.humidity.textContent = 'Humidity: '+weather.main.humidity+' %';
    this.wind.textContent = 'wind: '+weather.wind.speed+' m/s';
	}
}
