import React, { Component } from 'react';
import axios from 'axios';
import TournamentItem from '../../components/TournamentItem/TournamentItem';
import classes from './Tournaments.module.css';
import Modal from '../../components/UI/Modal/Modal';

const TOURNAMENTS_HEADERS = {
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
        error: false,
        showTournamentDetail: false,
        currentTournamentId: null
    }

    componentDidMount() {
        axios.get('https://gist.githubusercontent.com/idrinkritalin/fce0f5b884ffd813850ffb6919fe6bf7/raw/51007b611a52c427e34dbe9d40e91490e17c5248/tournaments.json')
            .then(response => {
                this.setState({
                    tournaments: [...response.data]
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({ error: true })
            });
    }

    tournamentClickHandler = (id) => {
        console.log(id);
        //TODO: maybe use currentTournamentId only?
        this.setState({
            showTournamentDetail: true,
            currentTournamentId: id
        })
    }

    hideModalHandler =() => {

        this.setState({
            showTournamentDetail: false,
            currentTournamentId: null
        })
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
                        <th>{TOURNAMENTS_HEADERS.id}</th>
                        <th>{TOURNAMENTS_HEADERS.name}</th>
                        <th>{TOURNAMENTS_HEADERS.country}</th>
                        <th>{TOURNAMENTS_HEADERS.city}</th>
                        <th>{TOURNAMENTS_HEADERS.date_start}</th>
                        <th>{TOURNAMENTS_HEADERS.date_end}</th>
                        <th>{TOURNAMENTS_HEADERS.series.name}</th>
                    </tr>
                </thead>
                <tbody>
                    {tournaments}
                </tbody>                    
            </table>
            
        }
        let tournamentSummary = null;
        if(this.state.currentTournamentId){
            console.log(this.state.tournaments[this.state.currentTournamentId])
            tournamentSummary = <div>
                {this.state.tournaments[this.state.currentTournamentId]}
            </div>
        }
        return (
            <div>

                <Modal show={this.state.showTournamentDetail} modalClosed={this.hideModalHandler}>
                    {tournamentSummary}
                </Modal>
                <h1>Tournaments</h1>

                {tournamentTable}
            </div>
        )
    }
}

export default Tournaments;