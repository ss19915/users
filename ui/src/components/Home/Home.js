import AddUser from '../AddUser';
import ViewUsers from '../ViewUsers';
import Header from '../Header';
import React, { useState } from 'react';
import { Grid, makeStyles, Modal, Paper, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    paper: {
        width: 500,
        padding: theme.spacing(2, 4, 3),
        marginTop: '10%',
    },
    container: {
        marginTop: '1rem',
    }
}));

const Home = () => {
    const [ isAddUserOpen, controlAddUserPanel ] = useState(false);
    const openAddUserPanel = () => controlAddUserPanel(true);
    const closeAddUserPanel = () => controlAddUserPanel(false);
    const onUserAdd = () =>  window.location.reload();
    const classes = useStyles();
    return (
        <React.Fragment>
            <Header onAddUserClick={openAddUserPanel}/>
            <Toolbar/>
            <Grid className={classes.container} container justify='center'>
                <Grid item>
                </Grid>
                <Grid item>
                    <Modal
                        className={classes.modal}
                        open={isAddUserOpen}
                        onClose={closeAddUserPanel}
                        >
                        <Paper className={classes.paper}>
                            <AddUser onUserAdd={onUserAdd}/>
                        </Paper>
                    </Modal>
                        <ViewUsers/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Home;

