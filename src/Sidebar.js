import React from 'react';
import './Sidebar.css';
import GREEN from './images/green.png';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const[{ playlists }, dispatch] = useDataLayerValue();
    return(
        <div className="sidebar">
            <img className= "logo" src={GREEN} alt=""/>
            <SidebarOption Icon = {HomeIcon} title="Home" />
            <SidebarOption Icon = {SearchIcon} title="Search" />
            <SidebarOption Icon ={ LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="playlists">PLAYLISTS</strong>

            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}
            <p>
             
                
            </p>
            
         
            

        </div>

        
    )
}

export default Sidebar;