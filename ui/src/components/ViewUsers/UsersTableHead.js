import { TableHead, TableRow, TableCell } from '@material-ui/core';
import { UserProperties } from './constants';

const UsersTableHead = () => (
    <TableHead>
        <TableRow>
            {UserProperties.map((property) => (
                <TableCell key={property.key}>{property.label}</TableCell>
            ))}
        </TableRow>
    </TableHead>
);

export default UsersTableHead;