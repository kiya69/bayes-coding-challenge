import React from 'react';

const TournamentDetails = (props) => {
    // console.log('TournamentDetails', props);
    let tournamentDetails = null;
    if(props.tournamentDetails) {
        tournamentDetails = Object.keys(props.tournamentHeaders || {}).map(key => 
            {
                console.log(key, props.tournamentDetails[key]);
                if(typeof props.tournamentDetails[key] === 'object'){
                    const seriesObj = props.tournamentDetails[key];
                    return Object.keys(seriesObj).map(seriesObjKey =>( 
                    
                    <p key={key}><span>{props.tournamentHeaders[key][seriesObjKey]}: </span>
                        {seriesObj[seriesObjKey]}
                    </p>))
                }
                return (
            // console.log(`key= ${e} value = ${props.tournamentHeaders[e]}`);

                    <p key={props.tournamentDetails[key]}><span>{props.tournamentHeaders[key]}: </span>{props.tournamentDetails[key]}</p>
                );
                
        });
        // tournamentDetails = <div>
        //     <p><span>{props.tournamentHeaders.id}: </span>{props.tournamentDetails.id}</p>
        //     <p><span>{props.tournamentHeaders.name}: </span>{props.tournamentDetails.name}</p>
        // </div>
        console.log('tournamentDetails',tournamentDetails)
    }
    return (

        <div>
            <h3>Tournament Details:</h3>
            <div>
                {tournamentDetails}
            </div>
        </div>
    )
}


export default TournamentDetails;