import React from 'react';

import StudentDetails from '../components/pure/student_details';
import PdfReader from '../components/pure/pdf_reader';

const StudentDetailsPage = () => {
    return (
        <div className="container">
            <div class="row">
                <StudentDetails />
                <PdfReader />
            </div>
        </div>
    );
}

export default StudentDetailsPage;
