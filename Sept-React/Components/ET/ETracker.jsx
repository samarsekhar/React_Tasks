import React from "react";

const ETracker = ({track}) => {
    return (
        <>
        {
            (Object.keys(track).length > 0 ?
            <div className="container">
                <div className="row">
                    <div className="col m-auto">
                        <div className="gutter-gap">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>DATE</td>
                                        <td>REASON</td>
                                        <td>TOTAL AMOUNT</td>
                                        <td>ADDED AMOUNT</td>
                                        <td>REMOVED AMOUNT</td>
                                        <td>BALANCE</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        track.map((element, index) => {
                                            return <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{element.tDate}</td>
                                                <td>{element.tReason}</td>
                                                <td>{element.tTotal}</td>
                                                <td>{element.tAddedAmount}</td>
                                                <td>{element.tRemovedAmount}</td>
                                                <td>{element.tBalanceAmount}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> : null 
            )
        }
        </>
    )
};

export default ETracker;