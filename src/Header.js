import './Header.css'

import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';

const Header = () => {
    const [{ user }, dispatch] = useDataLayerValue();

    return (
        <div className='header'>
            <div className='header_left'>
                <SearchIcon className='header_search_icon' />
                <input
                    placeholder='Search for Artists, Songs..'
                    type='text' />

            </div>
            <div className='header_right'>
                <Avatar src={user?.images[0].url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header