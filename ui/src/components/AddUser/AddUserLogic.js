import React from 'react';
import AddUser from './AddUser';
import { Users } from '../../repository';

const AddUserLogic = ({onUserAdd, ...otherProps}) => {
    const [ isCreateDisabled, disableCreate ] = React.useState(false);
    const userDetails = {};
    const createUser = () => {
        disableCreate(true);
        Users.create(userDetails).then(onUserAdd).catch( (e) => alert(e));
    };

    const onUserDetailsChange = ({target: { name, value }}) =>{
        userDetails[name] = value;
    };

    return (
        <AddUser
            onUserDetailsChange={onUserDetailsChange}
            isCreateDisabled={isCreateDisabled}
            createUser={createUser}
            {...otherProps}
        />
    );
};

export default AddUserLogic;