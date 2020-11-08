import React, { useState } from 'react';
import Dinosaur from './Dinosaur';
const DinosaurList = (props) => {
    const dinosaursData = [
        { name: 'Diplodicus', diet: 'plants', weightKg: 1000 },
        { name: 'Apatosaurus', diet: 'plants', weightKg: 1200 },
        { name: 'Allosaurus', diet: 'meat', weightKg: 500 },
        { name: 'T-Rex', diet: 'meat', weightKg: 700 }
    ]

    const [dinosaurs, setDinosaurs] = useState(dinosaursData)
    const myStylez = {
        margin: '15px',
        border: '1px solid',
        padding: '15px',
        backgroundColor: 'orange'
    }

    return (<div>
        <div style={myStylez}>Your current number of dinosaurs is {dinosaurs.length} </div>
        {dinosaurs.length > 8 && <div>Great job!</div>}
        {dinosaurs.map(d => <Dinosaur name={d.name} diet={d.diet}/>)}

    </div>);
}

export default DinosaurList;