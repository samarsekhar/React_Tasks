import React, { useState } from "react";

const ETForm = ({ settrack, track }) => {
    const [ TotalAMT, setTotalAMT] = useState(0);
    const [ InputValue, setInputValue] = useState(0);
    // validation state
    const total = parseInt(TotalAMT);
    const Value = parseInt(InputValue);
    const date = new Date().toLocaleString();

    const updateHandler = (e) => {
        setInputValue(e.target.value)
    }

    const AddHandler = () => {
        setTotalAMT(total + Value);
        setInputValue("");
         settrack([...track,
        {
            tDate: date,
            tTotal: total,
            tAddedAmount: Value,
            tRemovedAmount: "-",
            tBalanceAmount: total + Value
        }]);
    }

    const RemoveHandler = () => {
        setTotalAMT(total - Value);
        setInputValue("");

        settrack([...track, {
            tDate: date,
            tTotal: total,
            tAddedAmount: "_",
            tRemovedAmount: Value,
            tBalanceAmount: total - Value
        }]);
    }

    return (
        <>
        <div className="container my-4">
            <div className="row">
                <div className="col col-md-6 m-md-auto">
                    <div className="gutter-gap">
                        <h1 className="text-center border p-2">Expense Tracker</h1>
                        <form className="border p-2 mt-5">
                            <h3 className="text-center">Balance: {TotalAMT}</h3>
                            <div className="mb-3">
                                <input type="number" placeholder="Enter Amount" className="form-control"
                                       value={InputValue}
                                       onChange={updateHandler} /> 
                            </div>
                            <div className="mb-3 text-center">
                                <button type="button" className="btn bg-info border me-2"
                                        onClick={AddHandler}>ADD</button>
                                <button type="button" className="btn bg-info border"
                                        onClick={RemoveHandler}>REMOVE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default ETForm;