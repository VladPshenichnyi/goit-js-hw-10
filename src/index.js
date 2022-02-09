import './sass/main.scss'
import './css/styles.css';
import fetchCountries from './api/fetchCountries'
import countriesInfo from './templates/countriesInfo.hbs';
import countriesList from './templates/countriesList.hbs';
import Notiflix from 'notiflix';
import { throttle, debounce } from 'lodash.throttle';

const DEBOUNCE_DELAY = 300;
let name = null;

const inputRef = document.querySelector('#search-box')

inputRef.addEventListener('input', fetchCountries => { 
    console.log('Ввод текста')
    const name = inputRef.value
    console.log(name);
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,flags.svg,languages`)
        .then(response => {
            return response.json();
        })
        .then(countries => {
            console.log(countries);
        })
        .catch(error => { 
            console.log(error);
        })
})
// 

// fetchCountries()