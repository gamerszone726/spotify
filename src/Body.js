import React from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';

import DISCOVER from './images/discover.jpg';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { SmokingRoomsTwoTone } from '@material-ui/icons';
import SongRow from './SongRow';

function Body({ spotify }) {
    const[{discover_weekly}, dispatch] = useDataLayerValue();
    return(
        <div className="body">
            <Header spotify={ spotify } />
            <div className="body__info">
                <img className="discover__logo" src={discover_weekly?.images[0].url}alt="" />
                <div className="body_infoText">
                    <b>PLAYLISTS</b>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songslist">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" fontSize="large"/>
                    <FavoriteIcon className="heart" fontSize="medium"/>
                    <MoreHorizIcon />
                </div>

                {/*Songs playLists */}
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
  
        </div>
    )
}

export default Body;