// Fetch data from REST Countries API
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Filter countries from Asia continent/region
    const asiaCountries = data.filter((country) => country.region === "Asia");

    // Filter countries with a population of less than 200000 (2 lakhs)
    // const lowPopulationCountries = data.filter(
    //   (country) => country.population < 200000
    // );

    // Print name, capital, and flag of each country using forEach
    console.log("Countries in Asia:");
    asiaCountries.forEach((country) => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flag);
      console.log("----------------------");
    });

    // console.log("Countries with population less than 2 lakhs:");
    // lowPopulationCountries.forEach((country) => {
    //   console.log("Name:", country.name.common);
    //   console.log("Capital:", country.capital);
    //   console.log("Flag:", country.flag);
    //   console.log("----------------------");
    // });

    // Calculate total population of countries using reduce
    const totalPopulation = data.reduce(
      (acc, country) => acc + country.population,
      0
    );
    console.log("Total population of countries:", totalPopulation);

    // Find the country that uses US dollars as currency
    const usDollarCountries = data.filter(country => country.currencies && country.currencies.USD);
    console.log("Countries that use US dollars as currency:");
    usDollarCountries.forEach((country) => {
      console.log(country.name.common);
    });
  })
  .catch((error) => console.log("Error fetching data:", error));
