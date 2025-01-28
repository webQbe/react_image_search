import React, { Component } from 'react'
import TextField from '@mui/material/TextField';

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
      </div>
    )
  }
}


export default Search;