import React from 'react';
import './SidebarChannel.css';
import { useDispatch } from 'react-redux';
import { setchannelInfo } from './features/appSlice'

function SidebarChannel( { id, channelName } ) {
    const dispatch = useDispatch();
    return (
        <div onClick={ () => dispatch(setchannelInfo({
            channelId:id,
            channelName:channelName
        }))} className="sidebarChannel">
            <h4> <span className="sidebarChannel__hash">#</span>{channelName}</h4>
        </div>
    )
}

export default SidebarChannel
