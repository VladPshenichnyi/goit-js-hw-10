import './sass/main.scss'
import './css/styles.css';
import FetchApiCountries from './api/FetchService'
import countriesInfoTpl from './templates/countriesInfo.hbs';
import countriesListTpl from './templates/countriesList.hbs';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
let countryNameFind = '';
const inputRef = document.querySelector('#search-box');
const resultOfSearch = {
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
}
const fetchApiCountries = new FetchApiCountries();

inputRef.addEventListener('input', debounce(findCountries, DEBOUNCE_DELAY));

function findCountries() {
    countryNameFind = inputRef.value.trim();
    fetchApiCountries.country = countryNameFind;
    
    if (fetchApiCountries.country === '') {
        clearSearchResult();
        return Notiflix.Notify.info('Try to enter the first letters of the country you are interested in')
    }
    // console.log(fetchApiCountries.country)
    fetchApiCountries.fetchCountries()
        .then(countries => {
            let count = 0;
            count = countries.length;
            // console.log(count);
            if (count > 1 && count <= 10) {
                createMarkupList(countries)
                // console.log("Список найденых стран до 10");
            }
            if (count > 10 ) { 
                clearSearchResult()
                Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
                // console.log('Найденно большое кол-во стран');
            }
            if (count === 1) { 
                createMarkupCountry(countries)
            }
            if (count === undefined) {
                clearSearchResult()
                Notiflix.Notify.failure('Oops, there is no country with that name')
            }
        })
        
}

function clearSearchResult() { 
    resultOfSearch.countryList.innerHTML = '';
    resultOfSearch.countryInfo.innerHTML = '';
}

function createMarkupList(countries) {
    clearSearchResult();
    resultOfSearch.countryList.insertAdjacentHTML('beforeend', countriesListTpl(countries));
}
function createMarkupCountry(countries) {
    clearSearchResult();
    resultOfSearch.countryInfo.insertAdjacentHTML('beforeend', countriesInfoTpl(countries));
}