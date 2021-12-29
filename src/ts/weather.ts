export default class Weather{
	
	protected city: string;
	protected countryCode: string;
	protected apiKey: string = '2162b9b02534035ed4c2687bee11ba9f';
	
	constructor(city: string, countryCode: string, apiKey: string){
		this.city = city;
		this.countryCode = countryCode;
		this.apiKey = apiKey;
	}

	async getWeather(){
		const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
		const response = await fetch(url);
		const data = await response.json();
		return data;
	}

	changeLocation(city: string, countryCode: string){
		this.city = city;
		this.countryCode = countryCode;
	}

}
