import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const IncreaseBudget = () => {
    const { dispatch, budget } = useContext(AppContext);

    const [NewBudget, setNewBudget] = useState(budget)

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'UPDATE_BUDGET',
            payload: NewBudget
        })
    }

    return (
        <div className='alert alert-secondary'>
            <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label for='new-budget'>Name</label>
                    <input 
                        required='required' 
                        type='text'
                        className='form-control' 
                        id='new-budget'
                        value={NewBudget}
                        onChange={(event) => setNewBudget(event.target.value)}>
                        </input>
                </div>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary'>
                        Save
                    </button>
                </div>
            </div>
        </form>
        </div>
    )
}

export default IncreaseBudget;