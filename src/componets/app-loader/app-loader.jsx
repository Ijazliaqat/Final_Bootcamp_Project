import { LinearProgress } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react';
import './app-loader.css'

const AppLoader = () => {
    return (
        <div >
            <Stack  sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                <LinearProgress className='app-loader' color="success" />
            </Stack>
        </div>
    )
}

export default AppLoader