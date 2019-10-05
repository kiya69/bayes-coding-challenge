import React from 'react';
import classes from './TournamentDetails.module.css';

const TournamentDetails = (props) => {
    let tournamentDetails = null;
    if(props.tournamentDetails) {
        tournamentDetails = Object.keys(props.tournamentHeaders || {}).map(key => 
            {
                // Handle "series" object
                if(typeof props.tournamentDetails[key] === 'object'){
                    const seriesObj = props.tournamentDetails[key];
                    return Object.keys(seriesObj).map(seriesObjKey =>( 
                        <p key={seriesObjKey}><span className={classes.bold}>{props.tournamentHeaders[key][seriesObjKey]}: </span>
                            {seriesObj[seriesObjKey]}
                        </p>))
                }
                return (
                    <p key={props.tournamentDetails[key]}><span className={classes.bold}>{props.tournamentHeaders[key]}: </span>{props.tournamentDetails[key]}</p>
                );
            });
    }
    return (

        <div className={classes.TournamentDetails}>
            <h3>Tournament Details:</h3>
            <div>
                {tournamentDetails}
            </div>
        </div>
    )
}


export default TournamentDetails;