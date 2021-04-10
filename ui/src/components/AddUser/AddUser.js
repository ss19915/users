import { Grid, Button, TextField } from "@material-ui/core";

const AddUser = (props) => {
  const { onUserDetailsChange, createUser, isCreateDisabled } = props;

  return (
    <Grid container spacing={2} alignItems="center" >
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
