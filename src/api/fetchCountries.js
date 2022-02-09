export const fetchCountries = (name) => {
    console.log('as')
    return fetch('https://restcountries.com/v3.1/name/{name}')
        .then(response => {
            return response.json();
        })
        .then(countries => {
            console.log(countries.json());
        })
        .catch(error => { 
            console.log(error);
        })
            // console.log(response)
            // return response.json();
        }
    // new Promise((resolve, reject) => {
    //     console.log(name);
    //     setTimeout(() => {
    //   // Change value of isSuccess variable to simulate request status
    //     const isSuccess = true;

    //     if (isSuccess) {
    //         resolve("success value");
    //     } else {
    //         reject("error");
    //     }
    //     }, 2000);
    // })

// ?fields=name.official,capital,population,flags.svg,languages
