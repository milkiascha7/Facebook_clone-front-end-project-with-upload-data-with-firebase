import React from 'react'
import '../styles/Header.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useStateValue } from './StoreProvider';

const Header = () => {
    const [{ user }, dispatch] = useStateValue()
    return (
        <div className='header'>
            {/* header left */}
            <div className='header__left'>
                <img
                    src=
                    "data:image/png;base64,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"
                    alt="logo"
                />
                <div className='header__input'>
                    <SearchIcon />
                    <input type="text" placeholder='Search Facebook' />
                </div>
            </div>

            {/* header middle */}
            <div className='header__middle'>

                <div className='header__option header__option--active'>
                    <HomeIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <FlagIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <SubscriptionsIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <StorefrontIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <SupervisedUserCircleIcon fontSize='large' />
                </div>
            </div>

            {/* header right */}
            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src={user?.photoURL} alt="profile-pic" />
                    <h4>{user.displayName}</h4>
                </div>
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
    )
}

export default Header