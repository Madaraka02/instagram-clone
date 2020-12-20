import React from 'react';
import './Sidebar.css';
import Avatar from '@material-ui/core/Avatar';


function Sidebar({username}) {
    return (
        <div className="sidebar">
            <div className="sidebar__user">
            <Avatar/>
            <div className="sidebar__username">
            <h4>254_effect</h4>
            <h5><small>254_effect</small></h5>
            </div>
            </div>
            <div className="sidebar__suggestions">
                <h4>Suggestions For You</h4>
                <h6>See All</h6>
            </div>
            <p>About.Help.Press.API.Jobs.Privacy.Terms.Locations.
                <br></br>
                Top Accounts.Hashtags.Language
             </p>
             <p>INSTAGRAM FROM FACEBOOK</p>
        </div>
    )
}

export default Sidebar
