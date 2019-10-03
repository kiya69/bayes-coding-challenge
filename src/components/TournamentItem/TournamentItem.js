import React from 'react';

const tournamentItem = (props) => {
    return (
        <div>
            <table>
                <tr>
                    <th>{props.id}</th>
                    <th>{props.name}</th>
                    <th>{props.country}</th>
                    <th>{props.city}</th>
                    <th>{props.date_start}</th>
                    <th>{props.date_end}</th>
                    <th>{props.series.name}</th>
                </tr>
            </table>
        </div>
    )
}

export default tournamentItem;