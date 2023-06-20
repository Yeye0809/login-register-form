import { ErrorMessage, Field, Form, Formik  } from 'formik';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';

export const RegisterPage = () => {

  const [registerValues, setRegisterValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
});

  const handleSubmit = (values)=>{
    console.log(values)
    setRegisterValues({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
  }


  return (
    <div className="container-form animate__animated animate__backInRight">
      <h1>Create an account</h1>  
      <Formik
        initialValues={ registerValues }
        onSubmit={(values)=>handleSubmit(values)}
        validationSchema={ Yup.object({
            firstName: Yup.string()
                          .max(12, 'Must be 28 characteres or less')
                          .required('Required'),
            lastName:  Yup.string()
                         .max(12, 'Must be 20 characteres or less')
                         .required('Required'),
            email:     Yup.string()
                         .email('Invalid email address')
                         .required('Required'),
            password:  Yup.string()
                          .min(8, 'Must be 8 character or more')
                          .max(12, 'Must be 12 character or less')
                          .required('Required')
        })}
      >
        {
            (formik)=>(
              <>
                <Form autoComplete='off'>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <Field name="firstName" type="text" className="form-control"/>
                        <ErrorMessage name="firstName" component="span" className="mb-2"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <Field name="lastName" type="text" className="form-control"/>
                        <ErrorMessage name="lastName" component="span" className="mb-2"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">email</label>
                        <Field name="email" type="text" className="form-control"/>
                        <ErrorMessage name="email" component="span" className="mb-2"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <Field name="password" type="password" className="form-control"/>
                        <ErrorMessage name="password" component="span" className="mb-2"/>
                    </div>                   

                    <div className="d-flex justify-content-center mb-3">
                    < button className='btn btn-primary btn-lg' type='submit'>Submit</button>
                    </div>

                </Form>
                <div className="text-center mb-3">
                    <NavLink to='/login'>CREATE ACCOUNT</NavLink>
                </div>
              </>
            )
        }

      </Formik>
    </div>
  )
}

