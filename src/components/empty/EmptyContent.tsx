import { Box, Paper } from '@mui/material';
import React from 'react';

const EmptyContent = () => {
    return (
        <Paper sx={{ m: 3, flex: 1 }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '200px',
                    overflow: 'hidden',
                }}
            >
                <img src={''} alt='---' style={{ maxHeight: '100%', maxWidth: '100%' }} />
            </div>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
                <h2>No Data Found! Try Again.</h2>
            </Box>
        </Paper>
    );
};

export default EmptyContent;