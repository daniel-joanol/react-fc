import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Dashboard from './pages/dashboard_page';
import LoginPage from './pages/login_page'
import StudentDetailsPage from './pages/student_details_page';

function AppRouting() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <LoginPage /> }/>
                <Route path='/dashboard' element={ <Dashboard /> }/>
                <Route path='/detalles' element={ <StudentDetailsPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouting;
