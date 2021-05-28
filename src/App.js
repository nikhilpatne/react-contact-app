import React from 'react';
import  { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textField: {
    marginBottom: theme.spacing(4)
  }
}));

export default function App() {
  const classes = useStyles();

  const [contacts, setContacts] = useState([])


  const addContacts = (name,email) => {
  
    if(name && email) {
        setContacts([...contacts, {name: name, email: email }])
    }
    else{ alert("Please provider username or password") }
}


const removeContacts = (name) => {
  const newList = contacts.filter((contact) =>{
    return contact.name !== name;
  })

  setContacts(newList)
  console.log(name)
}
useEffect(() => {
  const retriveContacts = JSON.parse(localStorage.getItem("contacts"));
  if (retriveContacts) setContacts(retriveContacts);
}, []);

useEffect(() => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts]);

  return (
    <div className={classes.root}>
      <Grid container spacing={7}>

      <Grid item xs={12} sm={12}>
        <Header/>
      </Grid>


        <Grid item xs={6} sm={2}></Grid>
              <Grid item xs={12} sm={8}>
                  <AddContact addContacts={addContacts}/>
              </Grid>
        <Grid item xs={6} sm={2}></Grid>



        <Grid item xs={6} sm={2}></Grid>
              <Grid item xs={12} sm={8}>
                  <ContactList contacts={contacts} removeContacts={removeContacts}/>
              </Grid>
        <Grid item xs={6} sm={2}></Grid>










      </Grid>

</div>
  );
}
