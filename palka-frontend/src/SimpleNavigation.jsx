import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TuneIcon from '@mui/icons-material/Tune';
import {useNavigate} from "react-router-dom";
export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    let navigate = useNavigate();

    return (

            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    navigate(`/app/${newValue === 0 ? "learn" : newValue === 1 ? "cards" : "settings"}`);
                }}
            >
                <BottomNavigationAction label="Learn"  icon={<OutlinedFlagIcon />} />
                <BottomNavigationAction label="Cards" icon={<DashboardIcon />} />
                <BottomNavigationAction label="Settings" icon={<TuneIcon />} />
            </BottomNavigation>
    );
}