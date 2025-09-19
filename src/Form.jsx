import { useState } from "react";


export default function Form() {

    // let [fullName, setFullName] = useState("");

    // let [userName, setUserName] = useState("")

    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: ""
    })

    // let handleNameChange = (event) => {
    //     // console.log(event.target.value)
    //     setFullName(event.target.value);
    // };

    // let handleUserChange = (event) => {
    //     // console.log(event.target.value)
    //     setUserName(event.target.value);

    //     console.log(event.target.value)
    // };

    let handleInputChange = (event) => {
        let fieldName = event.target.name;

        let NewVal = event.target.value

        setFormData((currData) => {
            // currData[fieldName]=NewVal;


            return { ...currData, [fieldName]: NewVal };
        });

    }

    let handleSubmit = e => {
        e.preventDefault();

        console.log(formData);

        setFormData({
            fullName: "",
            userName: "",
            password: ""
        })
    }



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="FullName">Full Name</label>
            <input
                placeholder="Enter Name" type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                id="FullName"
                name="fullName"
            />
            <br></br>
            <br></br>

            <label htmlFor="username">UserName</label>
            <input
                placeholder="Enter Name" type="text"
                value={formData.userName}
                onChange={handleInputChange}
                id="username"
                name="userName"
            />

            <label htmlFor="password">Password</label>
            <input
                placeholder="Enter password" type="password"
                value={formData.password}
                onChange={handleInputChange}
                id="password"
                name="password"
            />

            <button>Submit</button>

        </form>
    )
}