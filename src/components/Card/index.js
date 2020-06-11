import React from 'react';
import { CardContent, Typography, Grid, Card} from "@material-ui/core";
import CountUp from "react-countup";

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
  return (
    <div className={"card-content"}>
      <div className={"infected card"}>
        <h3>Infected</h3>
        <h5>{confirmed ?
          <CountUp
            start={0}
            end={confirmed.value}
            duration={2.5}
            separator={','}>
          </CountUp>: 'Loading...'}</h5>
        <h3>{lastUpdate}</h3>
        <p>Number of active cases of Covid 19</p>
      </div>
      <div className={"recovered card"}>
        <h3>Recovered</h3>
        <h5>{recovered ?
          <CountUp
            start={0}
            end={recovered.value}
            duration={2.5}
            separator={','}>
          </CountUp>: 'Loading...'}</h5>
        <h3>{lastUpdate}</h3>
        <p>Number of recovered cases of Covid 19</p>
      </div>
      <div className={"deaths card"}>
        <h3>Deaths</h3>
        <h5>{deaths ?
          <CountUp
            start={0}
            end={deaths.value}
            duration={2.5}
            separator={','}>
          </CountUp>: 'Loading...'}</h5>
        <h3>{lastUpdate}</h3>
        <p>Number of deaths cases of Covid 19</p>
      </div>

    </div>
  )
}
export default Cards