import './Body.css'

import React from 'react'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow'

function Body() {
    const [{ rapCavier }, dispatch] = useDataLayerValue();

    return (
        <div className='body'>
            <Header />
            <div className='body_info'>
                <img src={rapCavier?.images[0].url} alt='' />
                <div className='body_info_text'>
                    <strong> PLAYLIST </strong>
                    <h2> Rap Cavier </h2>
                    <p> {rapCavier?.description} </p>
                </div>
            </div>

            <div className='body_songs'>
                <div className='body_icons'>
                    <PlayCircleFilledIcon className='body_shuffle' />
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />
                </div>
                {rapCavier?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body;