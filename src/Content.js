import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {add, minusOne, plusOne, reset} from "./action";


function Content(props) {

    const dispatch = useDispatch();

    const counter = useSelector((state) => state);

    const [numeral, setNumeral] = useState();

    const handleAdd = () => {
        dispatch(add(numeral))
        setNumeral('')
    };

    const handlePlus = () => {
        dispatch(plusOne())
    };

    const handleMinus = () => {
        dispatch(minusOne())
    };

    const handleReset = () => {
        dispatch(reset())
        setNumeral('')
    }
    return (
        <div><div>
            {counter}
        </div>
        <div>
            <input type="number"
                   placeholder="Введите число..."
                   value={numeral}
                   onChange={(e) => setNumeral(e.target.value)} />
            <button onClick={handleAdd}>Добавить</button>
        </div>
            <div>
                <button onClick={handlePlus}>Плюс</button>
                <button onClick={handleMinus}>Минус</button>
                <button onClick={handleReset}>Сбросить</button>
            </div>
        </div>
    );
}

export default Content;