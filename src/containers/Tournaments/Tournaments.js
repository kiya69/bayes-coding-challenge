import React, { Component } from 'react';
import axios from 'axios';
import TournamentItem from '../../components/TournamentItem/TournamentItem';

class Tournaments extends Component {

    state = {
        tournaments: [],
        error: false
    }

    componentDidMount() {
        axios.get('https://gist.githubusercontent.com/idrinkritalin/fce0f5b884ffd813850ffb6919fe6bf7/raw/51007b611a52c427e34dbe9d40e91490e17c5248/tournaments.json')
        .then(response => {
            console.log(response.data);

            this.setState({
                tournaments: [...response.data]
            })
        })
        .catch(error => {
            console.log(error);
            this.setState({error: true})
        });
    }

    render(){
        let tournaments = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if(!this.state.error) {
            tournaments = this.state.tournaments.map(tournament => {
                return (
                    <TournamentItem 
                        key={tournament.id}
                        id={tournament.id}
                        name={tournament.name}
                        country={tournament.country}
                        city={tournament.city}
                        date_start={tournament.date_start}
                        date_end={tournament.date_end}
                        series={tournament.series} />
                );
            });
        }
        return <div>
                    <h1>Tournaments</h1>
                    {tournaments}
                </div>
    }
}

export default Tournaments;