import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { UserProperties } from './constants';

const UsersTableBody = (props) => {
    const {
        userDetails,
        rowsPerPage,
        page,
    } = props;

    return(
        <TableBody>
            {userDetails.slice(rowsPerPage*page, rowsPerPage*page + rowsPerPage).map( (userDetail, index) => (
                <TableRow key={index}>
                    {UserProperties.map( (property) => (
                        <TableCell key={property.key}>{userDetail[property.key]}</TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
    );
}

export default UsersTableBody