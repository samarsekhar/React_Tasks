import React from "react";
import Footer from "../Footer/Footer";

let Header = () => {
    let emp_name = "Jack";
    let emp_salary = 34000;
    return (
        <div>
            <h5>Header Component</h5>
            <hr/>
            <Footer one={"one"} two={"two"} name={emp_name} salary={emp_salary} />
        </div>
    )
}

export default Header;