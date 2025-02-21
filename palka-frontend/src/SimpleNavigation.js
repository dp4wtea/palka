import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TuneIcon from '@mui/icons-material/Tune';
export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (

            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Learn"  icon={<OutlinedFlagIcon />} />
                <BottomNavigationAction label="Cards" icon={<DashboardIcon />} />
                <BottomNavigationAction label="Settings" icon={<TuneIcon />} />
            </BottomNavigation>
    );
}