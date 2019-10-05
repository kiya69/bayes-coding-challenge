import React, { Component } from 'react';
import axios from 'axios';
import TournamentItem from '../../components/TournamentItem/TournamentItem';
import classes from './Tournaments.module.css';
import Modal from '../../components/UI/Modal/Modal';
import TournamentDetails from '../../components/TournamentDetails/TournamentDetails';

const TOURNAMENT_HEADERS = {
    id: 'ID',
    name: 'NAME',
    country: 'COUNTRY',
    city: 'CITY',
    date_start: 'START DATE',
    date_end: 'END DATE',
    series: {
        id: 'SERIES ID',
        name: ' SERIES NAME',
        date_start: 'START DATE',
        date_end: 'END DATE'
    }
}

class Tournaments extends Component {

    state = {
        tournaments: [],
        originalTournaments: [],
        error: false,
        showTournamentDetails: false,
        currentTournamentDetails: null
    }

    componentDidMount() {
        axios.get('https://gist.githubusercontent.com/idrinkritalin/fce0f5b884ffd813850ffb6919fe6bf7/raw/51007b611a52c427e34dbe9d40e91490e17c5248/tournaments.json')
            .then(response => {
                this.setState({
                    originalTournaments: [...response.data],
                    tournaments: [...response.data]
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({ error: true })
            });
    }

    tournamentClickHandler = (id) => {
        const currentTournamentDetails = this.state.tournaments.find(tournament => tournament.id === id);
      
        this.setState({
            showTournamentDetails: true,
            currentTournamentDetails: currentTournamentDetails
        })
    }
 
    hideModalHandler =() => {
        this.setState({
            showTournamentDetails: false,
        })
    }

    searchSeriesHandler = (event) => {
        var updatedList = [...this.state.originalTournaments];
        updatedList = updatedList.filter(item => 
            item.series.name.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1
        );
        this.setState({tournaments: updatedList});
    }

    render() {
        let tournamentTable = <p style={{ textAlign: 'center' }}>Something went wrong!</p>

        if (!this.state.error) {
            const tournaments = this.state.tournaments.map(tournament =>
                <TournamentItem
                    key={tournament.id}
                    tournament={tournament}
                    clicked={() => this.tournamentClickHandler(tournament.id)}
                />
            )
            tournamentTable =  <table className={classes.TournamentTable}>
                <thead>
                    <tr>
                        <th>{TOURNAMENT_HEADERS.id}</th>
                        <th>{TOURNAMENT_HEADERS.name}</th>
                        <th>{TOURNAMENT_HEADERS.country}</th>
                        <th>{TOURNAMENT_HEADERS.city}</th>
                        <th>{TOURNAMENT_HEADERS.date_start}</th>
                        <th>{TOURNAMENT_HEADERS.date_end}</th>
                        <th>{TOURNAMENT_HEADERS.series.name}</th>
                    </tr>
                </thead>
                <tbody>
                    {tournaments}
                </tbody>                    
            </table>
            
        }
        return (
            <div>
                <Modal show={this.state.showTournamentDetails} modalClosed={this.hideModalHandler}>
                    <TournamentDetails tournamentDetails={this.state.currentTournamentDetails} tournamentHeaders={TOURNAMENT_HEADERS} />
                </Modal>
                <h1>Tournaments</h1>
                <input type="text" placeholder="Search Series" onChange={this.searchSeriesHandler}/>
                {tournamentTable}
            </div>
        )
    }
}

export default Tournaments;