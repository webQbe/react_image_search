import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Masonry from '@mui/lab/Masonry';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';


class ImageResults extends Component {
  render() {
    let imageListContent; // Init imageListContent
    const { images } = this.props; // Pull images from props

    if(images){ // If results are available
        // Loop through images array & extract data
        // Update imageListContent
        imageListContent = (
            <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
                {images.map(img => (
                    <ImageListItem key={img.id}>
                        <img src={img.largeImageURL} alt={img.tags} />
                        <ImageListItemBar 
                        title={img.tags} 
                        subtitle={<span>by <strong>{img.user}</strong></span>} 
                        actionIcon={<IconButton sx={{ color: 'white' }} 
                        aria-label={`zoom in on ${img.tags}`}>
                                <ZoomInIcon />
                        </IconButton> }/>
                    </ImageListItem>
                ))}
            </Masonry>
        
        );
        
    } else {

        // If no results
        imageListContent = null;

    }

    return (
      // Output imageListContent
      <div>
        {imageListContent}
      </div>
    )
  }
}

// Type-checking for images prop
ImageResults.propTypes = {
    images: PropTypes.array.isRequired // Validate images must be an array
}

export default ImageResults;
