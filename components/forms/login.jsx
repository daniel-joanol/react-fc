import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import Foot from '../pure/foot_login';

const Login = () => {

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }

    useEffect(() => {
        document.body.style.backgroundColor='#FFF';
    }, [])

    return (
        <div className="col left">
            <form id="#main_form-login-page" action="database_form.html"  method="post">
                <fieldset>
                    
                    <div>
                        <p>OpenBootcamp<spam className="font_green bold"> | Alumnos</spam></p>
                    </div>
                    <div>
                        <p className="nombre_campo">Email</p> 
                        <input className="box-login-page" type="text" required id="password" name="email" placeholder="Introduce tu correo" />
                    </div>

                    <div>
                        <p className="nombre_campo">Contraseña</p>
                        <input className="box-login-page" type="password" name="password" id="password" required placeholder="Introduce tu contraseña" />
                    </div>
                    
                    <div className="container2">
                        <div className="row">
                            <div className="col recuerdame">
                                <input type="checkbox" name="check" id="check" /><label for="check">Recuerdame</label>
                            </div>
                            <div className="col olvidado"> 
                                <p><a href="newpassword.html" target="_blank" className="font_green">He olvidado la contraseña</a></p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p></p>
                        <input className="button" type="submit" value="Enviar" onClick={ () => navigateTo('/dashboard') } />
                    </div>
                    
                </fieldset>
            </form>

            <Foot></Foot>
          </div>
    );
}

export default Login;
