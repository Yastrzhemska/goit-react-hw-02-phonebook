import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from 'yup';


const schema = yup.object({
    name: yup.string()
        .min(3, 'Too short')
        .max(15, 'Too long')
        .required(),
    tel: yup.number()
        .min(5, 'Too short  phone number')
        .positive()
        .required(),
});



export const PhoneForm = ({ title, onAdd }) => {
    
    
    return (
    
    
    <Formik
        initialValues={{
            name: "",
            tel: ""
            }}

        validationSchema={schema}
            
        onSubmit={(values, actions) => {
            onAdd(values);
            actions.resetForm();
            console.log(values)
        }}
    >
            <Form>
                <label>
                Name
                <Field name="name" type="text" />  
                <ErrorMessage component="div" name="name"/>    
                </label>
                <label>
                Number
                <Field name="tel" type="tel" />
                <ErrorMessage component="div" name="tel"/>
                </label>
            
            <button type="submit">Add contact</button>
        </Form>
    </Formik>
    )
};