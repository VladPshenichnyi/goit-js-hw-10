const BASE_URL = 'https://restcountries.com/v3.1'

export default class FetchApiCountries { 
    constructor() { 
        this.seekCountry = '';
        this.seekOptions = '?fields=name,capital,population,flags,languages';
    };

    fetchCountries() {
        const url = `${BASE_URL}/name/${this.seekCountry}${this.seekOptions}`;
        // console.log(`Мы ищем ==> ${this.seekCountry}`);
        return fetch(url).then((response) => {
            if (!response.ok) {
                // return 
                throw new Error(response.status);
            }
            return response.json();
        })
            .then(countries => { 
            // console.log(countries)
            return countries;                   
            })
    }

    get country() { 
        return this.seekCountry;
    }

    set country(newCountry) {
        this.seekCountry = newCountry;
    }
}