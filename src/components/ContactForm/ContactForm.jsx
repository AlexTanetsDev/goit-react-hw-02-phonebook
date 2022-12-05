import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required().positive().integer(),
})

const initialValues = {
    name: "",
    number: ""
}

export const ContactForm = ({onFormSubmit}) => {
    const hendleSubmit = (values, {resetForm}) => {
        onFormSubmit(values);
        resetForm();
        }
    return (
      
        <Formik initialValues={initialValues } validationSchema={schema} onSubmit={hendleSubmit}>
        <Form autoComplete="off">
            <label htmlFor="name">Name
                    <Field type="text" name="name" />
                <ErrorMessage name="name" component="div"/>    
            </label>
                
            <label htmlFor="number">Number
                    <Field type="tel" name="number" />   
                     <ErrorMessage name="number" component="div"/>   
            </label>
            <button type="submit">Add contact</button>
        </Form>
     </Formik>
)

}