import React from 'react';
import classes from './TournamentItem.module.css'

const tournamentItem = (props) => {
    return (
        <tr className={classes.TournamentItem} onClick={props.clicked}>
            <td>{props.tournament.id}</td>
            <td>{props.tournament.name}</td>
            <td>{props.tournament.country}</td>
            <td>{props.tournament.city}</td>
            <td>{props.tournament.date_start}</td>
            <td>{props.tournament.date_end}</td>
            <td>{props.tournament.series.name}</td>
        </tr>
    )
}

export default tournamentItem;