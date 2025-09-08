import axios from 'axios';


const api=axios.create({
    baseURL:'https://restcountries.com/v3.1',
    timeout:60000
});


// api to get all country data
const CountryData = () => {

  return (
   api.get("/all?fields=name,population,region,capital,flags")
  )
}

//api to get individual country data only

const CountryIndvData = (name) => {
     return(
      api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
     )
}

export {CountryData,CountryIndvData}