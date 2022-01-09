import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage, isSubmitting} from 'formik';

import Foot from '../pure/foot_login';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid email format')
                .required('Any email will login for now'),
        password: Yup.string()
                .required('Any password will do for now'),
        check: Yup.bool()
    }
);

const Login = () => {

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }

    useEffect(() => {
        document.body.style.backgroundColor='#FFF';
    }, [])

    const initialCredentials = {
        email: '',
        password: '',
        check: false
    }

    return (
        <div className='col left'>
            <Formik
                initialValues = { initialCredentials }
                validationSchema = { loginSchema }
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 100));
                    await localStorage.setItem('credentials', values);
                    navigateTo('/dashboard');
                }}
            >

            {({
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur }) =>(
                    <div id='main_form-login-page'>
                    <Form>
                        <div>
                            <p>OpenBootcamp<spam className="font_green bold"> | Alumnos</spam></p>
                        </div>
                        
                        <div>
                            <label htmlFor='email' className='nombre_campo'>Email</label>
                            <Field id='email' className='box-login-page' type='email' name='email' placeholder='Introduce tu correo' />

                            {
                                errors.email && touched.email &&
                                (
                                    <ErrorMessage name='email' component='div'/>
                                )
                            }
                        </div>
                        
                        <div>
                            <label htmlFor='password' className='nombre_campo'>Password</label>
                            <Field id='password' className='box-login-page' name='password' placeholder='Introduce tu contraseña'/>
                        
                            {
                                (
                                    <ErrorMessage name='password' component='div'/>
                                )
                            }
                        
                        </div>

                        <div>
                            <p></p>
                            <input className="button" type="submit" value="Enviar" />
                        </div>
                        
                        <div className="container2">
                            <div className="row">
                                <div className="col recuerdame">
                                    <Field type="checkbox" name='check' id='check' /><label for="check">Recuerdame</label>
                                </div>
                                <div className="col olvidado"> 
                                    <p><a href="newpassword.html" target="_blank" className="font_green">He olvidado la contraseña</a></p>
                                </div>
                        </div>
                    </div>
                    </Form>
                    <Foot />
                    </div>
                    
                    
                )}

            </Formik>
        </div>
    )
}

export default Login;
