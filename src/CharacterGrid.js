import React, { useState } from 'react';
import { CharToBinary } from "./CharToBinary";
import './App.css';

const CharacterGrid = () => {
    const [userInput, setUserInput] = useState('');
    const [characterGrid, setCharacterGrid] = useState([]);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const drawCharacter = () => {
        const inputs = userInput.toUpperCase();
        const grid = [];

        for (const input of inputs) {
            const characterRows = CharToBinary(input);
            console.log(characterRows);

            const rows = [];
            for (let i = 0; i < characterRows.length; i++) {
                const row = [];
                for (let j = 0; j < characterRows[i].length; j++) {
                    if (characterRows[i][j] === "1") {
                        row.push(<div className="box green" key={`${i}-${j}`} />);
                    } else {
                        row.push(<div className="box black" key={`${i}-${j}`} />);
                    }
                }
                rows.push(<div className="row" key={`${input}-${i}`}>{row}</div>);
            }

            grid.push(...rows);
        }

        setCharacterGrid(grid);
    };

    return (
        <div>
            <input type="text" value={userInput} onChange={handleInputChange} />
            <button onClick={drawCharacter}>그리기</button>
            <div id="characterGrid">{characterGrid}</div>
        </div>
    );
}

export default CharacterGrid;
