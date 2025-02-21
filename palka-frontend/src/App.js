import './App.css';
import SimpleBottomNavigation from "./SimpleNavigation";
import {Paper} from "@mui/material";
import Stack from '@mui/material/Stack';


function App() {
  return (// todo redo this without using constant height

    <div className="App">
        <header className="App-header"></header>
        <Stack spacing={2} alignItems="center" justifyContent="center">


        <Paper elevation={1} style={{width: 600, height:810 , textAlign: "center", padding: 40 }} >
             <h3> Welcome to palka!</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies.
            Nulla facilisi. Sed nec velit nec nunc tincidunt ultricies. Nulla facilisi. Sed nec velit nec nunc tincidunt ultricies.
            Nulla facilisi. Sed nec velit nec nunc tincidunt ultricies. Nulla facilisi. Sed nec velit nec nunc tincidunt ultricies.
            Nulla facilisi. Sed nec velit nec nunc tincidunt ultricies. Nulla facilisi. Sed nec velit nec nunc tincidunt ultricies.
            Nulla facilisi. Sed nec velit nec nunc tincidunt ultricies. Nulla facilisi. Sed nec velit nec nunc tincidunt ultricies.
            Nulla facilisi. Sed nec velit nec nunc tincidunt ultricies. Nulla facilisi. Sed nec velit nec nunc tincidunt ultricies.

        </Paper>
        </Stack>

        <SimpleBottomNavigation/>

    </div>
  );
}

export default App;
