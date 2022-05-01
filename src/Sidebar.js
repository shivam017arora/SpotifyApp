import './Sidebar.css'

import React from 'react'
import SidebarOption from './SidebarOption';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';



function Sidebar() {

    const [{ playlists }, dispatch] = useDataLayerValue();

    console.log(playlists)

    return (
        <div className='sidebar'>
            <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='logo' />
            <SidebarOption option='Home' Icon={HomeIcon} key={1} />
            <SidebarOption option='Search' Icon={SearchIcon} key={2} />
            <SidebarOption option='Your Library' Icon={LibraryMusicIcon} key={3} />
            <br />
            <strong className='sidebar_title'> PLAYLISTS </strong>
            <hr />
            {playlists?.items?.map((playlist) => (
                <SidebarOption option={playlist.name} key={playlist.id} />
            ))}
        </div>
    )
}

export default Sidebar;