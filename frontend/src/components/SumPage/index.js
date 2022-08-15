import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as sumActions from '../../store/sum';
import './SumPage.css'

function SumPage() {
    const dispatch = useDispatch();

    const [valueOne, setValueOne] = useState(0);
    const [valueTwo, setValueTwo] = useState(0);
    const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false);

    const answer = useSelector(state => state?.sum?.sum || 0);

    const handleSubmit = e => {
        e.preventDefault();

        let tempErrors = [];
        if(valueOne === '' || valueTwo === '' ||
        Number.isNaN(valueOne) || Number.isNaN(valueTwo)) {
            tempErrors.push('Please provide two values');
        }

        if(tempErrors.length > 0) {
            setErrors(tempErrors);
            setShowErrors(true);
            return;
        }
        else {
            setShowErrors(false);
            return dispatch(sumActions.fetchSum(valueOne, valueTwo))
                .catch(async (res) => {
                    console.log(res);
                });
        }
    }

    return (
        <>
            <form id='sum-form' onSubmit={handleSubmit}>
                <ul id='errors'>
                    {showErrors && errors.map(error => {
                        return <li key={error} className='error'>{error}</li>
                    })}
                </ul>
                <input className={`value-input`} 
                    id='inputOne' 
                    type='number'
                    value={valueOne}
                    onChange={e => setValueOne(e.target.value)}
                />
                <p id='addition-symbol'>+</p>
                <input className={`value-input`} 
                    id='inputTwo' 
                    type='number'
                    value={valueTwo}
                    onChange={e => setValueTwo(e.target.value)}
                />
                <p id='addition-symbol'>is...</p>
                <p id='answer'>{answer}</p>
                <button type='submit' id='submit-button'>Submit</button>
            </form>
        </>
    )
}

export default SumPage;