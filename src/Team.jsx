import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(0);
    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={teamStyle}>
            <h1>Players: {team}</h1>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleRemove}>remove</button>
        </div>
    )
}