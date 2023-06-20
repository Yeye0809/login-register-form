import {ErrorMessage, Field, Form, Formik} from 'formik'
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';

let loginValues = {
  user: '',
  password: '',
}

export const LoginPage = () => {

  const handleSubmit = (values)=>{
    console.log(values);

    loginValues = {
      user: '',
      password: '',
    }
  }

  return (
    <div className="container-form animate__animated animate__backInLeft">
        <h1>Login</h1>
        <Formik
          initialValues={ loginValues }
          onSubmit={ handleSubmit }
          validationSchema={ Yup.object({
            user: Yup.string()
                     .min(4, 'must be 4 characteres or more')
                     .max(20, 'must be 12 characteres or less')
                     .required('required'),
            password: Yup.string()
                     .min(8, 'must be 8 characteres or more') 
                     .required('required'),
          })}
        >
            {
              (formk)=>(
                <>
                  <Form>
                    <div className="mb-3">
                      <label htmlFor="user" className="form-label">User Name</label>
                      <Field name="user" type="input" className="form-control"/>
                      <ErrorMessage name="user" component="span"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <Field name="password" type="password" className="form-control"/>
                      <ErrorMessage name="password" component="span"/>
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                      <button type="submit" className="btn btn-primary btn-lg">Login</button>
                    </div>
                  </Form>
                  <div className="text-center mb-3">
                      <NavLink to='/register'>CREATE ACCOUNT</NavLink>
                  </div>
                </>
              )
            }
        </Formik>
      
    </div>
  )
}

