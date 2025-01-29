import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';


class Search extends Component {
    state = {
        searchText: '', /* blank by default, updated by onTextChange() */
        amount: 15, // Default result amount
        apiUrl: 'https://pixabay.com/api',
        apiKey: '',
        images: []  /* Array to store search results */
    };

    // Update searchText of the state
    onTextChange = (e) => {
        this.setState({[e.target.name]: e.target.value},
            // Make API request
            () => {
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                        // Select hits from response & add to images array
                        .then(res => this.setState({images: res.data.hits})) 
                        .catch(err => console.log(err)); // Handle errors
            });
    };

    // Update amount of the state
    onAmountChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }; 

  render() { 

    // Console log updated images array
    console.log(this.state.images);

    return (
      <div>
        <TextField 
            name="searchText" // Must match state field name
            value={this.state.searchText} 
            onChange={this.onTextChange} // Handle searchText change event
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
                <br />
                {this.state.searchText.length > 0 ? // If Search Text Available
                   // Pass results to ImageResults
                  (<ImageResults images={this.state.images} />) :
                  null}
      </div>
    );
  }
}


export default Search;