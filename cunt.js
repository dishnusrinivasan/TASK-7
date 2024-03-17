const Url = "https://restcountries.com/v3.1/all";

fetch(Url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error");
    }
    return response.json();
  })
  .then((data) => {
    const allAsian = data.filter(co);
  });
