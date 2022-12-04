import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Basic = () => (
    <div>
        <h1>Adding a Recipe (Formik)</h1>
        <Formik 
        initialValues={{ email : '', password: ''}}
        validate={ values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required'
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.text(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(  () => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }}
        >
            {({
                values,
                errors, 
                touched, 
                handleChange,
                handleBlur, 
                handleSubmit, 
                isSubmitting,
                /* Ajouter autres goodies ici */
            }) => (
                <form onSubmit={handleSubmit}>
                    <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.email}
                />
                { errors.password && touched.password && errors.password}
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </form>
            )}
            </Formik>

    </div>
);

export default Basic;