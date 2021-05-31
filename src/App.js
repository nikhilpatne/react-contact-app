import React from 'react';
import  { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import Paper from '@material-ui/core/Paper';
import { SearchBar } from './components/SearchBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    color: theme.palette.text.secondary,
  },
  textField: {
    marginBottom: theme.spacing(4)
  }
}));

export default function App() {
  const classes = useStyles();

  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const addContacts = (name,email) => {
  
    if(name && email) {
        setContacts([...contacts, {name: name, email: email }])
    }
    else{ alert("Please provider username or password") }
}

const searchHandler = (searchTerm) => {
  setSearchTerm(searchTerm);
  if (searchTerm !== "") {
    const newContactList = contacts.filter((contact) => {
      return Object.values(contact)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setSearchResults(newContactList);
  } else {
    setSearchResults(contacts);
  }
};

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
      <Grid container spacing={3}>

      <Grid item xs={12} sm={12}>
        <Header/>
      </Grid>


        <Grid item xs={6} sm={2}></Grid>
              <Grid item xs={12} sm={8}>
              {/* <Paper className={classes.paper}> */}
                  <AddContact addContacts={addContacts}/>
                  {/* </Paper> */}
              </Grid>
        <Grid item xs={6} sm={2}></Grid>



        <Grid item xs={6} sm={2}></Grid>
              <Grid item xs={12} sm={8}>
                  <SearchBar searchHandler={searchHandler}/>
                  <ContactList contacts={searchTerm.length < 1 ? contacts : searchResults} removeContacts={removeContacts}/>
              </Grid>

        <Grid item xs={6} sm={2}></Grid>










      </Grid>

</div>
  );
}
