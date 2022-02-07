import './sass/main.scss'
import './css/styles.css';
import fetchCountries from './api/fetchCountries'
import countriesInfo from './templates/countriesInfo.hbs';
import countriesList from './templates/countriesList.hbs';
import Notiflix from 'notiflix';
import { throttle, debounce } from 'lodash.throttle';

const DEBOUNCE_DELAY = 300;1