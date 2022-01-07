import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { Student } from '../../models/student.class'

const StudentComponent = ({student}) => {

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }

    function organizeTags (tags) {

        console.log(tags);

       /*  let spamTags = '';
    
        for (let i = 0; i <tags.length; i++){
            spamTags += <spam className="etiqueta"> newTags[i] </spam> + ' ';
        }

        console.log(spamTags); */

        tags.map((tag) => {
            console.log('got here')
            return (
                <spam className='etiqueta'>{tag}</spam>   
            )
        })

/*         return spamTags;
 */        
    }

    return (

        <tr onClick={() => navigateTo('/detalles')} style={{ cursor: 'pointer'}}>
            <td>{student.name}</td>
            <td>{student.city}</td>
            <td>{student.country}</td>
            <td>{student.phoneNumber}</td>
            <td>{student.email}</td>
            <td>{organizeTags(student.tags)}</td>
        </tr>
    );
}

StudentComponent.propTypes = {
    student: PropTypes.instanceOf(Student).isRequired,
    tags: PropTypes.array.isRequired
}

export default StudentComponent;
