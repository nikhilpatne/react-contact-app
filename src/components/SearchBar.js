import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
    searchIcon: {
        padding: theme.spacing(0, 2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
}));

export const SearchBar = (props) => {
  const classes = useStyles();

  const getSearchValue =(searchTerm) => {
      props.searchHandler(searchTerm)
  }

  return (
    <Paper style={{ width: '100%', margin: '20px 0'}}>
    <div style={{ display: 'flex'}}>

        <div>
        <SearchIcon className={classes.searchIcon}/>
        </div>
        <div>
        <InputBase
              placeholder="Search Contacts ......"
              fullWidth
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => getSearchValue(e.target.value)}
            />

            </div>
           
    </div>
    </Paper>
  );
}
