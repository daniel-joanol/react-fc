import React from 'react';

import AddStudent from '../components/buttons/add_student';
import SearchBox from '../components/pure/search_box';
import StudentsTable from '../components/pure/students-table';

const StudentsTablePage = () => {

    return (
        <div>
            <div className='row'>
                <div className='col-6'><SearchBox /></div>
                <div className='col-6'><AddStudent /></div>
            </div>
            
            <StudentsTable />
        </div>
    );
}

export default StudentsTablePage;
