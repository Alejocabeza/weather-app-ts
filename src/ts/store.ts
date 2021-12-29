export class Store {
	protected city: string;
	protected countryCode: string;
	protected defaultCity: string = 'Caracas';
	protected defaultCountryCity: string = 've';

	constructor(city: string, countryCode: string, defaultCity: string, defaultCountryCity: string){
		this.city = city;
		this.countryCode = countryCode;
		this.defaultCity = defaultCity;
		this.defaultCountryCity = defaultCountryCity;
	}

	getLocationData(){
		if(localStorage.getItem('city') === null){
			this.city = this.defaultCity;
		}else{
			this.city = localStorage.getItem('city');
		}

		if(localStorage.getItem('countryCode') === null){
			this.countryCode = this.defaultCountryCity;
		}else{
			this.countryCode = localStorage.getItem('countryCode');
		}

		return {
			city: this.city,
			countryCode: this.countryCode,
		}
	}

	setLocationData(city: string, countryCode: string){
		localStorage.setItem('city', city);
		localStorage.setItem('countryCode', countryCode);
	}

}
