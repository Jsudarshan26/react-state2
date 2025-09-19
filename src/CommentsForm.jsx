import { useState } from "react";

import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Username Required';
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }


    return errors;
};

export default function CommentsForm({ addNewComment }) {

    // let [formData, setFormData] = useState({
    //     username: "",
    //     rating: 5,
    //     remarks: ""
    // });

    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: 5,
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            addNewComment(values);
        },
    })


    // let handleInputChange = (event) => {

    //     setFormData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value }
    //     })

    // }

    // let handleSubmit = (event) => {

    //     console.log(formData);

    //     addNewComment(formData);

    //     event.preventDefault();

    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: 5
    //     });

    // };



    return (
        <div>
            <h4>Give A Comment</h4>
            <form onSubmit={formik.handleSubmit}>
                <input placeholder="username" type="text" 
                value={formik.values.username}
                    name="username"
                    onChange={formik.handleChange} />
                <br></br><br></br>

                {formik.errors.username ? <div>{formik.errors.username}</div> : null}
 

                <textarea placeholder="Add Remarks"
                    value={formik.values.remarks} name="remarks"
                    onChange={formik.handleChange}>Remarks</textarea>
                <br></br><br></br>

                <input placeholder="rating" type="number" min={1} max={5} value={formik.values.rating}
                    name="rating"
                    onChange={formik.handleChange} />
                <br></br><br></br>

                <button type="submit">Submit</button>


            </form>
        </div>
    )
}