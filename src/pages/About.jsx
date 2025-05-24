import React from "react";
import style from "../css/About.module.css";
import Countries from "../../public/countries.json";

const About = () => {

  return (
    <section className={style.container}>
      <h2 className={style.title}>
        Here are the Intersting Facts <br /> we're proud of{" "}
      </h2>

      <div className={style.cardCollection}>
        <div className={style.cards}>
          {Countries.map((element) => {
            const {id,countryName,capital,population,interestingFact} = element;
            
            return(
            <div className={style.card} key={id}>
              <h2 className={style.cardTitle}>{countryName}</h2>
              <p>
                <span className={style.cardDescription}>Capitals: </span>
                {capital}
              </p>
              <p>
                <span className={style.cardPopulation}>Population: </span>
                {population}
              </p>
              <p>
                <span className={style.cardInterestingFacts}>
                  InterestingFact:  </span>
                {interestingFact}
              </p>
            </div>);
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
