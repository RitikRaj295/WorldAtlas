import React,{Suspense} from 'react';
import { useState, useTransition } from 'react';
import {CountryData} from '../api/CountryData';
import { useEffect } from 'react';
import Loader from '../components/UI/Loader';
import SearchFilter from '../components/UI/SearchFilter';
const CountryCard= React.lazy(()=> import('../components/Layout/CountryCard'))


import style from '../css/Country.module.css';

const Country = () => {
const [isPending, startTransition] = useTransition();
const [countries,setcountries]=useState([]);
const [search,setSearch]=useState();
const [filter,setFilter]=useState("all")

useEffect(()=>{
  startTransition(async ()=>{
   const result= await CountryData();
   setcountries(result.data);
  })
},[]);

     
 if(isPending) return    (<div className={style.loader}> <Loader/>
 </div>)

 const searchCountry=(country)=>{
  if(search){
     return country.name.common.toLowerCase().includes(search.toLowerCase())
  }
  return country;
 }

 const filterCountry=(country)=>{
   if(filter==="all") return country
   return(filter===country.region)  
 }

const filterCountries = countries.filter((country)=> searchCountry(country) && filterCountry(country))

  return (
   <div className={style.outerContainer}>
    <SearchFilter 
     search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}
    />

     <ul className={style.container}>
      {
        filterCountries.map((country,index)=>{
          // console.log(country.name.common)
          return(
            <Suspense fallback={<p>Loading Data..</p>}> 
            <CountryCard country={country} key={index}/>
            </Suspense>
          )
        })
      }

     </ul>
      </div>
  )
}

export default Country
