import React from 'react';
import { useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    textField: {
      marginBottom: theme.spacing(4)
    }
  }));

const AddContact = (props) => {
    const classes = useStyles();

const [name, setName] = useState("")
const [email, setEmail] = useState("")

const add = (e) => {
    e.preventDefault();
    if(name && email) {
        props.addContacts(name,email)
        setName("")
        setEmail("")
    }
}

    return (
        <div>
               
               <form className={classes.root} noValidate autoComplete="off">
                  <TextField id="outlined-basic" label="Name" variant="outlined" 
                  size="small"  className={classes.textField} fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />

                  <TextField id="outlined-basic" label="Email" variant="outlined" size="small" 
                  className={classes.textField} fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </form>
              <Button variant="contained" color="primary" 
              fullWidth
              onClick={add}
              > SUBMIT </Button>
            
        </div>
    )
}

export default AddContact
