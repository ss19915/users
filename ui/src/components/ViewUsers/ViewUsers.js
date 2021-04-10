import { useState } from 'react';
import { TableContainer, Table, TablePagination, Paper, Typography } from '@material-ui/core';
import UsersTableHead from './UsersTableHead';
import UsersTableBody from './UsersTableBody';

const ViewUsers = (props) => {
    const { userDetails } = props;
    const [ page, setPage] = useState(0);
    const [ rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (e, page) => setPage(page);
    const handleChangeRowsPerPage = ({target: { value }}) => setRowsPerPage(value);

    return (
        <Paper>
            <Typography style={{paddingLeft: '1rem', paddingTop: '1rem'}} variant='h5'>All Users</Typography>
            <TableContainer>
                <Table>
                    <UsersTableHead/>
                    <UsersTableBody
                        userDetails={userDetails}
                        rowsPerPage={rowsPerPage}
                        page={page}
                    />
                </Table>
            </TableContainer>
            <TablePagination
                component='div'
                rowsPerPageOptions={[5,10,15]}
                count={Math.ceil(userDetails.length/rowsPerPage)}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onChangePage={handleChangePage}
            />
        </Paper>
    );
};

export default ViewUsers;