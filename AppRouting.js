import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import LoginPage from './pages/login_page'
import StudentsTablePage from './pages/students_table_page';
import StudentDetailsPage from './pages/student_details_page';

function AppRouting() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <LoginPage /> }/>
                <Route path='/alumnos' element={ <StudentsTablePage /> }/>
                <Route path='/detalles' element={ <StudentDetailsPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouting;
