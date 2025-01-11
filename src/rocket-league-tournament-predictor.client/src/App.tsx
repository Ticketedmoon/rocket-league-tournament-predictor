import { useEffect, useState, Fragment } from 'react';
import './App.css';

interface PlayerData {

    id: number,

    name: string,

    tournament_placements: TournamentPlacement[]
}

interface TournamentPlacement {

    name: string,

    tournament_tier: number,

    placement: number

}

const App = () => {
    const [playerTournamentData, setPlayerTournamentData] = useState<PlayerData[]>();

    useEffect(() => {
        setTimeout(() => {
            populateWeatherData();
        }, 3000);
    }, []);

    const populateWeatherData = async() => {
        const response = await fetch('/player');
        if (response.ok) {

            const data = await response.json();

            setPlayerTournamentData(data);
        }
    }

    const contents = playerTournamentData === undefined
        ? <p><em>Loading...</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Tournament Name</th>
                    <th>Tournament Tier</th>
                    <th>Tournament Placement</th>
                </tr>
            </thead>
            <tbody>
                {playerTournamentData.map(playerData =>
                    playerData.tournament_placements.map(tournamentData =>
                        <tr key={playerData.id}> 
                            <td>{playerData.id}</td>
                            <td>{playerData.name}</td>
                            <td>{tournamentData.name}</td>
                            <td>{tournamentData.tournament_tier}</td>
                            <td>{tournamentData.placement}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tableLabel"> Rocket League Tournament Predictor </h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
}

export default App;