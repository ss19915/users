import { Users } from '../../repository';
import ViewUsers from './ViewUsers';
import { useEffect, useState } from 'react';

const ViewUsersContext = (props) => {
    const [ userDetails, setUserDetails ] = useState([]);
    useEffect(() =>{
        Users.getAll().then(({data}) => setUserDetails(data)).catch(alert);
    }, []);
    
    return(
        <ViewUsers
            {...props}
            userDetails={userDetails}
        />
    );
};

export default ViewUsersContext;