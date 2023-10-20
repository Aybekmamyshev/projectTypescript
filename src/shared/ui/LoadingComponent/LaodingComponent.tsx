import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from "./loading.module.sass"

 function LoadingComponent() {
    return (
        <div className={styles.wrapper}>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </div>
    );
}

export default LoadingComponent