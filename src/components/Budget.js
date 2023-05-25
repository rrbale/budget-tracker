import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import IncreaseBudget from './IncreaseBudget';

const Budget = () => {
    const { budget } = useContext(AppContext);

    const [UpdatingBudget, setUpdatingBudget] = useState(false);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: ${budget}</span>
            <div className='col-sm text-right'>
                    <button type='submit' className='btn btn-primary' onClick={() => setUpdatingBudget(true)}>
                        Edit
                    </button>
            </div>
        </div>
    );
};

export default Budget;