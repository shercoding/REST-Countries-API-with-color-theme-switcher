fetch("https://restcountries.com/v3.1/name/deutschland")
  .then((res) => res.json())
  .then((data) => console.log(data));