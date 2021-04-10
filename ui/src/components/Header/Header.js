import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

const Header = ({onAddUserClick})=> (
    <AppBar>
        <Toolbar>
            <Typography style={{flexGrow: 1}}>Admin Dashboard</Typography>
            <Button variant='outlined' onClick={onAddUserClick} color='inherit'>Add User</Button>
        </Toolbar>
    </AppBar>
);

export default Header;