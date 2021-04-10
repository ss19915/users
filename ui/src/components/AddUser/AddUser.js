import {
  Grid,
  Button,
  TextField,
  Divider,
  Typography,
} from "@material-ui/core";

const AddUser = (props) => {
  const { onUserDetailsChange, createUser, isCreateDisabled } = props;

  return (
    <Grid container spacing={2} justify='flex-end' alignItems="center">
      <Grid xs={12}>
        <Typography
          style={{  paddingTop: "1rem" }}
          variant="h5"
        >
          Add New User
        </Typography>
      <Divider/>
      </Grid>
      <Grid item xs={6}>
        <TextField
          onChange={onUserDetailsChange}
          fullWidth
          label="First Name"
          name="firstName"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="lastName"
          onChange={onUserDetailsChange}
          fullWidth
          label="Last Name"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          onChange={onUserDetailsChange}
          name="email"
          fullWidth
          label="Email"
        />
      </Grid>
      <Grid item>
        <Button
          disabled={isCreateDisabled}
          onClick={createUser}
          variant="outlined"
        >
          Create User
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddUser;
