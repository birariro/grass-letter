import React, {useEffect, useState} from 'react';
import { CharToBinary } from "./CharToBinary";
import './App.css';
const CharacterGrid = (props) => {

    const text = props.text;

    useEffect(() => {
        drawCharacter(text)
    }, [text]);

    const [characterGrid, setCharacterGrid] = useState([]);

    const randomGreenStyleClassName = () => {
        const min = 1;
        const max = 3;
        return "green-"+(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    const drawCharacter = (text) => {
        const inputs = text.toUpperCase();
        const grid = [];

        let rows = [];
        for (let i = 0; i < 5; i++) { //새로
            let row = [];
            for (let rows = 0; rows < inputs.length; rows++) {
                const characterRows = CharToBinary(inputs[rows]);

                //마지막 이라면 한줄띄기 제거
                const columnsSize = (rows === inputs.length-1) ? 5 : 6;

                for (let columns = 0; columns < columnsSize; columns++) { //가로
                    if (characterRows[i][columns] === "1") {
                        const classNameParam = "box "+randomGreenStyleClassName()
                        console.log(classNameParam)
                        row.push(<div className={classNameParam} key={`${rows}-${columns}`} />);
                    } else {
                        row.push(<div className="box black" key={`${rows}-${columns}`} />);
                    }
                }
            }
            rows.push(<div className="row" key={i}>{row}</div>);
        }

        grid.push(<div className="character-grid" key={inputs}>{rows}</div>);
        setCharacterGrid(grid);
    };

    return (
        <div>
            <div className="character-container">
                {characterGrid}
            </div>
        </div>
    );
}

export default CharacterGrid;




