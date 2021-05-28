import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
    contactlist: {
      maxWidth: 1000
    }
  }));

const ContactList = (props) => {
    const classes = useStyles();

    const deleteContact = (name) => {
        props.removeContacts(name)
    }
    const contact_list = props.contacts.map(( contact ) => {
        const { name, email } = contact;
    return (
        <div>

            <List className={classes.contactlist}>
      <ListItem>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={email} />
        <DeleteIcon  fontSize="large" color="secondary" style={{ cursor: "pointer" }} onClick={() => deleteContact(name)}/>
      </ListItem>



    </List>

        </div>

    )
    })

    return <div>{contact_list}</div>
}

export default ContactList
