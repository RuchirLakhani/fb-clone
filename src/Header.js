import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import {useStateValue} from './StateProvider';

function Header() {
     
    const [{user} , dispatch] = useStateValue();


    return (
        <div className="header">
            <div className="header_left">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.jpg"  alt="logo" />

                <div className="header_input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>

            <div className="header_middle">
                <div className="header_option header_option--active">
                    <HomeIcon fontSize="large" />
                </div>

                <div className="header_option">
                    <FlagIcon fontSize="large" />
                </div>

                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>

                <div className="header_option">
                    <StorefrontIcon fontSize="large" />
                </div>

                <div className="header_option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>


            </div>

            <div className="header_right">

                <div className="header_info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                    <IconButton>
                        <AddIcon />
                    </IconButton>

                    <IconButton>
                        <ForumIcon />
                    </IconButton>

                    <IconButton>
                        <NotificationsActiveIcon />
                    </IconButton>

                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>





            </div>
        </div>
    )
}

export default Header
