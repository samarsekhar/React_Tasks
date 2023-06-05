import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        mobile: "",
        guardian_label: "",
        guardian_name: "",
        address: "",
        Country: "",
        dob: "",
        sex: "",
        id_type: "",
        govt_id: "",
        email: "",
        contact_number: "",
        state: "",
        city: "",
        pincode: "",
        occupation: "",
        religion: "",
        martial_status: "",
        blood_group: "",
        nationality: "",
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSumbit] = useState(false);
    const navigate = useNavigate();
    const changeHandler = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSumbit(true);
        axios.post("", formValues);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formErrors);
        }
    }, [formErrors, isSubmit]);

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "This field is required";
        }
        if (!values.mobile) {
            errors.mobile = "This field is required";
        }
        if (!values.guardian_label) {
            errors.guardian_label = "This field is required";
        }
        if (!values.guardian_name) {
            errors.guardian_name = "This field is required";
        }
        if (!values.address) {
            errors.address = "This field is required";
        }
        if (!values.Country) {
            errors.Country = "This field is required";
        }
        if (!values.dob) {
            errors.dob = "This field is required";
        }
        if (!values.sex) {
            errors.sex = "This field is required";
        }
        if (!values.id_type) {
            errors.id_type = "This field is required";
        }
        if (!values.govt_id) {
            errors.govt_id = "This field is required";
        }
        if (!values.email) {
            errors.email = "This field is required";
        }
        if (!values.contact_number) {
            errors.contact_number = "This field is required";
        }
        if (values.state) {
            errors.state = "This field is required";
        }
        if (!values.city) {
            errors.city = "This field is required";
        }
        if (!values.pincode) {
            errors.pincode = "This field is required";
        }
        if (!values.occupation) {
            errors.occupation = "This field is required";
        }
        if (!values.religion) {
            errors.religion = "This field is required";
        }
        if (!values.martial_status) {
            errors.martial_status = "This field is required"
        }
        if (!values.blood_group) {
            errors.blood_group = "This field is required";
        }
        if (!values.nationality) {
            errors.nationality = "This field is required";
        }
        if (Object.keys(errors) != 0) {
            return errors;
        } else {
            return true
        }
    };

    return (
        <>
            <div className="container-fluid border p-3 border-3 border-secondary fs-6 mr-3 ml-3 mb-3 mt-3" style={{ backgroundColor: "wheat" }}>
                <div className="row">
                    <div className="col">
                        {formErrors === true ? (
                            navigate("/DataTable")) : (
                            <>
                                <form className="form-horizontal" onSubmit={""}>
                                    <div className="row">
                                        {/* section 1 */}
                                        <div className="col col-md-4">
                                            {/* article 1 */}
                                            <h3 className="mb-3">
                                                <u>Personal Details</u>
                                            </h3>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">
                                                    Name<sup className="text-danger">*</sup>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" placeholder="Enter Name" name="name" value={""} onChange={""} />
                                                    <span className="text-danger"></span>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">
                                                    Mobile
                                                </label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" placeholder="Enter Mobile number" name="mobile" value={""} onChange={""} />
                                                    <span className="text-danger"></span>
                                                </div>
                                            </div>

                                            {/* article 2 */}
                                            <h3 className="mb-3">
                                                <u>Contact Details</u>
                                            </h3>
                                            <div className="row mt-3 mb-3">
                                                <div className="col col-md-3">
                                                    <label>Guardian Details</label>
                                                </div>
                                                <div className="col col-md-4">
                                                    <select className="form-select" aria-label="Default select example" name="guardian_label" onChange={""}>
                                                        <option>Guardian Label</option>
                                                        <option value="Mr">Mr</option>
                                                        <option value="Mrs">Mrs</option>
                                                        <option value="MS">MS</option>
                                                        <option value="Miss">Miss</option>
                                                    </select>
                                                    <span className="text-danger"></span>
                                                </div>

                                                <div className="col col-md-5">
                                                    <input type="text" className="form-control" placeholder="Enter Guardian Name" name="guardian_name" value={""} onChange={""} />
                                                    <span className="text-dnager"></span>
                                                </div>
                                            </div>

                                            {/* article 3 */}
                                            <h3 className="mb-3">
                                                <u>Address Details</u>
                                            </h3>
                                            <div className="form-group row mt-4">
                                                <label className="col-sm-2 col-form-label">
                                                    Address
                                                </label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" placeholder="Enter Address" name="address" value={""} onChange={""} />
                                                    <span className="text-danger"></span>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">
                                                    Country
                                                </label>
                                                <div className="col-sm-8">
                                                    <select className="form-select" aria-label="Default select example" name="Country" onChange={""} >
                                                        <option>Country</option>
                                                        <option value="India">India</option>
                                                        <option value="Japan">Japan</option>
                                                        <option value="Srilanka">Srilanka</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                    </select>
                                                    <span className="text-danger"></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* section 2 */}
                                        <div className="col col-md-8 mt-5">
                                            {/* article 1 */}
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <div className="form-group row">
                                                        <div className="col-sm-3">
                                                            <label htmlFor="inputCity">
                                                                Date of Birth or Age
                                                                <sup className="text-danger">*</sup>
                                                            </label>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" id="inputCity" placeholder="DD/MM/YYYY or Age in years" name="dob" value={""} onChange={""} />
                                                            <span className="text-danger"></span>
                                                        </div>
                                                        <div></div>
                                                    </div>
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <div>
                                                        <div className="form-group row">
                                                            <div className="col-sm-1">
                                                                <label htmlFor="inputState">
                                                                    Sex<sup className="text-danger">*</sup>
                                                                </label>
                                                            </div>

                                                            <div className="col-sm-11">
                                                                <select id="inputState" className="form-select" name="sex" onChange={""} >
                                                                    <option>Enter Sex</option>
                                                                    <option value="Male">Male</option>
                                                                    <option value="Female">Female</option>
                                                                    <option value="Transgender">Transgender</option>
                                                                </select>
                                                                <span className="text-danger"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* article 2 */}
                                            <div className="row">
                                                <div className="col col-md-2 mb-3">
                                                    <label>Govt Issued Id</label>
                                                </div>
                                                <div className="col col-md-5">
                                                    <select className="form-select" aria-label="Default select example" name="id_type" onChange={""} >
                                                        <option value="Adhar">Aadhar Card</option>
                                                        <option value="Pan">Pan Card</option>
                                                        <option value="Driving liscence">Driving liscence</option>
                                                        <option value="other">other</option>
                                                    </select>
                                                    <span className="text-danger"></span>
                                                </div>

                                                <div className="col col-md-5">
                                                    <input type="text" className="form-control" placeholder="Enter Govt Id" name="govt_id" value={""} onChange={""} />
                                                    <span className="text-danger"></span>
                                                </div>
                                            </div>

                                            {/* article 3 */}
                                            <div className="row mt-3">
                                                <div className="col col-md-6">
                                                    <div className="form-group row">
                                                        <div className="col-sm-2">
                                                            <label>Email</label>
                                                        </div>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" placeholder="Enter Email" name="email" value={""} onChange={""} />
                                                            <span className="text-danger"></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col col-md-6">
                                                    <div className="form-group row">
                                                        <div className="col-sm-3">
                                                            <label>Emergency Contact Number</label>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="Enter Contact Number" name="contact_number" value={""} onChange={""} />
                                                            <span className="text-danger"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* article 4 */}
                                            <div className="row mt-4">
                                                <div className="col col-md-6">
                                                    <div className="form-group row">
                                                        <div className="col-sm-2">
                                                            <label>State</label>
                                                        </div>
                                                        <div className="col-sm-10">
                                                            <select className="form-select" aria-label="Default select example" name="state" onChange={""} >
                                                                <option>Enter State</option>
                                                                <option value="AP">AP</option>
                                                                <option value="KA">KA</option>
                                                                <option value="TN">TN</option>
                                                                <option value="OD">OD</option>
                                                                <option value="TE">TE</option>
                                                                <option value="KE">KE</option>
                                                            </select>
                                                            <span className="text-danger"></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col col-md-6">
                                                    <div className="form-group row">
                                                        <div className="col-sm-2">
                                                            <label htmlFor="">City</label>
                                                        </div>
                                                        <div className="col-sm-10">
                                                            <select className="form-select" aria-label="Default select example" name="city" onChange={""} >
                                                                <option>Enter city</option>
                                                                <option value="Bangalore">Bangalore</option>
                                                                <option value="Hyderbad">Hyderabad</option>
                                                                <option value="Chennai">Chennai</option>
                                                                <option value="Bhubaneswer">Bhubaneswer</option>
                                                                <option value="Kolkata">Kolkata</option>
                                                            </select>
                                                            <span className="text-danger"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* article 5 */}
                                            <div className="form-group row mt-3">
                                                <div className="col-sm-1">
                                                    <label htmlFor="">Pincode</label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control" placeholder="Enter pincode" name="pincode" value={""} onChange={""} />
                                                    <span className="text-danger"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* section 3 */}
                                    <div className="row">
                                        <div className="col">
                                            {/* article 1 */}
                                            <h3 className="mb-3">
                                                <u>Other Details</u>
                                            </h3>
                                            <div className="form row">
                                                <div className="col col-md-3">
                                                    <div className="form-group row">
                                                        <label className="col-form-label col-sm-3">Occupation</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" placeholder="Enter Occupation" name="occupation" value={""} onChange={""} />
                                                            <span className="text-danger"></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col col-md-3">
                                                    <div className="form-group row">
                                                        <label className="col-form-label col-sm-2">Religion</label>
                                                        <div className="col-sm-10">
                                                            <select className="form-select" aria-label="Default select example" name="religion" onChange={""} >
                                                                <option>Enter Religion</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                            <span className="text-danger"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col col-md-3">
                                                    <div className="form-group row">
                                                        <label className="col-form-label col-sm-2">Martial Status</label>
                                                        <div className="col-sm-10">
                                                            <select className="form-select" aria-label="Default select example" name="martial_status" onChange={""} >
                                                                <option>Enter Martial Status</option>
                                                                <option value="married">Married</option>
                                                                <option value="sinle">Single</option>
                                                            </select>
                                                            <span className="text-danger"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col col-md-3">
                                                    <div className="form-group row">
                                                        <label className="col-form-label col-sm-2">Blood Group</label>
                                                        <div className="col-sm-10">
                                                            <select className="form-select" aria-label="Default select example" name="blood_group" onChange={""} >
                                                                <option>Enter Group</option>
                                                                <option value="A+">A+</option>
                                                                <option value="B+">B+</option>
                                                                <option value="AB+">AB+</option>
                                                                <option value="AB">AB</option>
                                                                <option value="O+">O+</option>
                                                                <option value="O-">O-</option>
                                                            </select>
                                                            <span className="text-danger"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* article 2 */}
                                            <div className="form-group row">
                                                <label className="col-sm-1" col-form-label mb-1>Nationality</label>
                                                <div className="col-sm-4">
                                                    <input type="search" className="form-control" placeholder="Enter Nationlity" name="nationality" value={""} onChange={""} />
                                                    <span className="text-danger"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* buttons */}
                                    <div className="d-flex justify-content-end">
                                        <button className="btn btn-outline-danger btn-lg mr-5 p-3 fs-5" type="button">Cancel</button>
                                        <button className="btn btn-success btn-lg mr-5 p-3 fs-5">Submit</button>,
                                    </div>
                                </form>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}
export default Form;