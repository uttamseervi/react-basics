import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
    // we use useEffect  to make the request only once when the component mounts.
    // or whenever there is change in the dependency array the whole function will be executed again
    // parameters for useEffect are one callback and the another one is  an optional array of dependencies that cause the effect to.
   function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
            })
            .catch((error) => {
                console.error("Error fetching currency info:", error);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;


//THE ABOVE IS DESCRIBED HOW THE CUSTOM HOOKS ARE DESIGNED IN REACT  TO MAKE API CALLS AND STORE DATA INTO STATE
// we can also return the array of the data and setData but in this case it isnt right 