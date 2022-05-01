import './Footer.css'

import React from 'react'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <img className='footer_album_art' src='https://upload.wikimedia.org/wikipedia/en/6/60/Recovery_Album_Cover.jpg' alt='album_art' />
                <div className='footer_song'>
                    <h4> Beautiful </h4>
                    <p> Recovery </p>
                </div>
            </div>
            <div className='footer_center'>
                <ShuffleIcon className='footer_green' />
                <SkipPreviousIcon className='footer_icon' />
                <PlayCircleOutlineIcon fontSize='large' className='footer_icon' />
                <SkipNextIcon className='footer_icon' />
                <RepeatIcon className='footer_green' />
            </div>
            <div className='footer_right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer