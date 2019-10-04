import React, { Component } from 'react';
import axios from 'axios';
import TournamentItem from '../../components/TournamentItem/TournamentItem';
import classes from './Tournaments.module.css';
import Modal from '../../components/UI/Modal/Modal';
import TournamentDetails from '../../components/TournamentDetails/TournamentDetails';

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
        initialTournaments: [],
        error: false,
        showTournamentDetails: false,
        currentTournamentId: null,
        currentTournament: null
    }

    componentDidMount() {
        axios.get('https://gist.githubusercontent.com/idrinkritalin/fce0f5b884ffd813850ffb6919fe6bf7/raw/51007b611a52c427e34dbe9d40e91490e17c5248/tournaments.json')
            .then(response => {
                this.setState({
                    initialTournaments: [...response.data],
                    tournaments: [...response.data]
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({ error: true })
            });
    }

    // componentWillMount() {
    //     this.setState({tournaments: this.state.initialTournaments})
    //   }

    tournamentClickHandler = (id) => {
        console.log(id, typeof id);
        //TODO: maybe use currentTournamentId only?
        // this.tournamentSummary = this.state.tournaments.find(tournament => tournament.id === id);
        
        const currentTournament = this.state.tournaments.find(tournament => tournament.id === id);
        // console.log('currentTournament',currentTournament)
        // this.tournamentSummary = <div>
        //     {JSON.stringify(currentTournament)}
        //     </div>
        this.setState({
            showTournamentDetails: true,
            currentTournamentId: id,
            currentTournament: currentTournament
        })
    }
 
    hideModalHandler =() => {

        this.setState({
            showTournamentDetails: false,
            currentTournamentId: null
        })
    }

    searchSeriesHandler = (event) => {
        console.log(event.target.value);
        if(event.target.value){
            var updatedList = [...this.state.initialTournaments];
            updatedList = updatedList.filter(function(item){
            return item.series.name.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
            });
            this.setState({tournaments: updatedList});
        } 
        // else{
        //     this.setState({tournaments: this.state.initialTournaments});

        // }
        
        
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
        return (
            <div>

                <Modal show={this.state.showTournamentDetails} modalClosed={this.hideModalHandler}>
                    <TournamentDetails tournamentDetails={this.state.currentTournament} tournamentHeaders={TOURNAMENTS_HEADERS} />
                </Modal>
                <h1>Tournaments</h1>
                <input type="text" placeholder="Search Series" onChange={this.searchSeriesHandler}/>
                {tournamentTable}
            </div>
        )
    }
}

export default Tournaments;