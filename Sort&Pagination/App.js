import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const [sortValue, setSortValue] = useState("");

    const sortOptions = ["name", "email", "phone", "address", "status"];
    useEffect(() => {
        loadUsersData();
    }, []);

    const loadUsersData = async () => {
        return await axios.get("http://localhost:5000/users")
                          .then((response) => setData(response.data))
                          .catch((err) => console.log(err))
    };

    console.log("data", data)

    const handleSearch = async (e) => {
        e.preventDefault();
        return await axios.get(`http://localhost:5000/users?q=${value}`)
                          .then((response) => {
                            setData(response.data);
                            setValue("");
                          })
                          .catch((err) => console.log(err))
    };

    const handleReset = () => {
        loadUsersData();
    };

    const handleSort = async (e) => {
        let value = e.target.value;
        setSortValue(value);
        return await axios.get(`http://localhost:5000/users?_sort=${value}&_order=asc`)
                          .then((response) => {
                            setData(response.data);
                          })
                          .catch((err) => console.log(err));
    };


    const handleFilter = async (value) => {
        return await axios.get(`http://localhost:5000/users?status=${value}`)
                          .then((response) => {
                            setData(response.data);
                          })
                          .catch((err) => console.log(err));
    };
    return(
        <div className="container" style={{marginTop: "50px"}}>
            <form style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent: "center",
            }}
            className="d-flex input-group w-auto" 
            onSubmit={handleSearch}>
                <input
                type="text"
                className="form-control"
                placeholder="Search Name..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />
                <button className="btn btn-dark" type="submit">Search</button>
                <button className="btn btn-info mx-2" onClick={() => handleReset}>Reset</button>
            </form>
            <h2 align="center">Search, Filter, Sort and Pagination using JSON fake Rest API</h2>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        {data.length === 0 ? (
                            <tbody className="align-center md-8">
                                <tr>
                                    <td colSpan={8} className="text-center mb-8">NO DATA FOUND</td>
                                </tr>
                            </tbody>
                        ) : (
                            data.map((item, index) => (
                                <tbody key={index}>
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                    <td>{item.status}</td>
                                </tr>
                                </tbody>
                            ))
                        )}
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <h5>Sort By:</h5>
                    <select style={{ width: "50%", borderRadius: "2px", height: "35px"}}
                            onChange={handleSort}
                            value={sortValue}
                            >
                        <option>Please select value</option>
                        {sortOptions.map((item, index) => (
                            <option value={item} key={index}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <h5>Filter By Status</h5>
                    <button className="btn btn-success" onClick={() => handleFilter("Active")}>Active</button>
                    <button className="btn btn-danger"
                    style={{ marginLeft: "4px"}} 
                    onClick={() => handleFilter("Inactive")}>Inactive</button>
                </div>
            </div>
        </div>
    );
}

export default App;