
import { Box, Fade, FormControl, Grid, InputLabel, MenuItem, Pagination, Popper, Select, Table, TableBody, TableCell, TableRow, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LockResetIcon from '@mui/icons-material/LockReset';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';


import React from 'react'
import './users.css'
import { Stack } from '@mui/system';

const Users = () => {

    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    const usersList = [
        {
            name: 'Adil',
            icon: <MoreHorizIcon />
        },
        {
            name: 'Admin',
            icon: <MoreHorizIcon />
        },
        {
            name: 'apim_reserved_user',
            icon: <MoreHorizIcon />
        },
        {
            name: '04',
            icon: <MoreHorizIcon />
        },
        {
            name: 'pmteam',
            icon: <MoreHorizIcon />
        },
        {
            name: 'sibtain',
            icon: <MoreHorizIcon />
        }
    ]

    return (
        <Grid className='user-card'>
            <h1>Users</h1>
            <Grid className='select-users' >
                <div>
                    <h6>Enter Role Name Pattern</h6>
                    <Grid >
                        <SearchIcon className='role-name-search' />
                        <TextField size="small" fullWidth variant="outlined" />
                    </Grid>


                </div>
                <div>
                    <h6>Select Domain</h6>
                    <Grid>
                    
                        <FormControl style={{ minWidth: 260 }}>
                            <Select size='small' >
                                <MenuItem value={10}>Admin</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </div>
                <div>
                    <h6>Select Claim URL</h6>
                    <Grid >
                        <FormControl style={{ minWidth: 260 }}>
                     
                            <Select fullWidth size='small' >
                                <MenuItem value={30}>Admin</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                </div>
            </Grid>

            <Grid mt={5}>
                <div className='users-table-header'>
                    <p>Name</p>
                    <p>Actions</p>
                </div>
            </Grid>

            <Grid>
                <Table>
                    {/* <TableHead className='users-table-header' >
                        <TableRow style={{borderRadius: '10px'}} >
                            <TableCell  >Name</TableCell>
                            <TableCell align='right'>Actions</TableCell>
                        </TableRow>
                    </TableHead> */}
                    <TableBody>
                        {usersList.map((item) => {
                            return (
                                <TableRow >
                                    <TableCell sx={{ borderBottom: 'none' }} >{item.name}</TableCell>
                                    <TableCell onClick={handleClick} sx={{ borderBottom: 'none', cursor:'pointer' }} align='right'>
                                        {item.icon}

                                    </TableCell>
                                    <Popper id={id} open={open} anchorEl={anchorEl} transition>
                                        {({ TransitionProps }) => (
                                            <Fade {...TransitionProps} timeout={350}>
                                                <Box className='popper-actions'>
                                                    <p><LockResetIcon /> Change Password</p>
                                                    <p><AssignmentIndIcon /> Assign Role</p>
                                                    <p><RemoveRedEyeIcon /> View Role</p>
                                                    <p><AccountCircleIcon /> User Profile</p>
                                                    <p><DeleteIcon /> Delete</p>
                                                </Box>
                                            </Fade>
                                        )}
                                    </Popper>
                                </TableRow>
                            )
                        })
                        }

                    </TableBody>


                </Table>
                <Grid className='paggination'>
                    <Box sx={{color: '#A0A3BD'}}>Total:24</Box>
                    <Stack spacing={2}>
                        <Pagination count={10} variant="outlined" shape="rounded" />
                    </Stack>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Users