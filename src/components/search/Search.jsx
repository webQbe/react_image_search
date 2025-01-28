import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '',
        images: []
    }

  render() {
    return (
      <div>
        <TextField 
            name="searchText"
            value={this.state.searchText}
            onChange={this.onTextChange}
            label="Search For Images"
            fullWidth
        />
        <br /><br />
                <Select
                    name="amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    label="Amount"
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                </Select>
      </div>
    )
  }
}


export default Search;