import './App.css';
import SimpleBottomNavigation from "./SimpleNavigation";
import {Divider, Paper} from "@mui/material";
import Stack from '@mui/material/Stack';
import {Outlet} from "react-router-dom";

function App() {
  return (// todo redo this without using constant height

    <div className="App">
        <header className="App-header">

        </header>
        <Stack spacing={2} alignItems="center" justifyContent="center">

            <Paper elevation={1} style={{width: 600, height: 810, textAlign: "center", padding: 40, borderRadius: 30}}>
                <div style={{}}>
                    <h1>Palka </h1>

                </div>

                <Divider/>

                <Outlet/>

            </Paper>
        </Stack>

        <SimpleBottomNavigation/>
    </div>
  );
}

export default App;
