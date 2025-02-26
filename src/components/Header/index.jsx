import { Avatar, Badge, Divider, Menu, MenuItem } from '@mui/material'
import React from 'react'
import './style.css'
import avatar from '../../assets/images/avatar.webp'
import SettingsOutline from '../../assets/icons/settings'
import ProfileCircle from '../../assets/icons/profile'
import LogoutSquare01 from '../../assets/icons/logout'
import BellLight from '../../assets/icons/bell'
import MessageTextAltOutline from '../../assets/icons/message'
import BaselineMenu from '../../assets/icons/menu'
import Button from '../Button'
import DayNight from '../../assets/icons/dayNight'


const menuProps = {
    paper: {
        elevation: 0,
        sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.3))',
            mt: 1.5,
            '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
            },
            '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
            },
        },
    },
}

const Header = ({ handleSidebarToggle }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [darkMode, setDarkMode] = React.useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeTheme = () => {
        document.documentElement.classList.toggle('dark');
        setDarkMode(state => !state);
    }

    return (
        <header className='w-full h-full py-2 px-5 bg-white border-b border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-between dark:bg-gray-900 dark:shadow-gray-700'>
            <div className='part1'>
                <Button className="!rounded-full w-[40px] h-[40px] bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600" onClick={handleSidebarToggle}>
                    <span className='text-[25px] text-gray-700 dark:text-gray-200'>
                        <BaselineMenu />
                    </span>
                </Button>
            </div>

            <div className='part2 w-[40%] flex items-center justify-end gap-5'>
                <div>
                    <Button className='!rounded-full w-[40px] h-[40px] bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600' onClick={changeTheme}>
                        <span className='text-[20px] text-gray-700 dark:text-gray-200'>
                            <DayNight />
                        </span>
                    </Button>
                </div>

                <div>
                    <Button className='!rounded-full w-[40px] h-[40px] bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'>
                        <Badge color="secondary" variant="dot">
                            <span className='text-[27px] text-gray-700 dark:text-gray-200'>
                                <MessageTextAltOutline />
                            </span>
                        </Badge>
                    </Button>
                </div>

                <div>
                    <Button className='!rounded-full w-[40px] h-[40px] bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'>
                        <Badge color="secondary" variant="dot">
                            <span className='text-[27px] text-gray-700 dark:text-gray-200'>
                                <BellLight />
                            </span>
                        </Badge>
                    </Button>
                </div>

                <div>
                    <Button className='!rounded-full w-[40px] h-[40px] bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600' onClick={handleClick}>
                        <Avatar src={avatar} sx={{ width: 35, height: 35 }} />
                    </Button>

                    <Menu
                        className="user-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        slotProps={menuProps}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem className='!bg-white' sx={{ margin: '0 5px' }} onClick={handleClose}>
                            <Avatar src={avatar} sx={{}} />
                            <div className='flex flex-col'>
                                <span className='text-[15px] font-semibold leading-5'>James Howlett</span>
                                <span className='text-[13px] opacity-70'>test@test.com</span>
                            </div>
                        </MenuItem>
                        <Divider />
                        <MenuItem className='flex gap-3' sx={{ margin: '0 8px', borderRadius: '5px', '&:hover': { backgroundColor: 'var(--color-gray-200)' } }} onClick={handleClose}>
                            <span className='text-[25px]'><ProfileCircle /></span>
                            <span className='text-[14px]'>My Profile</span>
                        </MenuItem>
                        <MenuItem className='flex gap-3' sx={{ margin: '0 8px', borderRadius: '5px', '&:hover': { backgroundColor: 'var(--color-gray-200)' } }} onClick={handleClose}>
                            <span className='text-[25px]'><SettingsOutline /></span>
                            <span className='text-[14px]'>Account Settings</span>
                        </MenuItem>
                        <Divider />
                        <MenuItem className='flex gap-3' sx={{ margin: '0 8px', borderRadius: '5px', '&:hover': { backgroundColor: 'var(--color-gray-200)' } }} onClick={handleClose}>
                            <span className='text-[25px]'><LogoutSquare01 /></span>
                            <span className='text-[14px]'>Log Out</span>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header