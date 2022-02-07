export const fetchCountries = (name) => {
return fetch('https://restcountries.com/v3.1/name/{name}')
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        console.log(response)
        return response.json();
    }
    );
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

}