import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
function QuestionCard()
{
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );
    return (
        <Card style={{padding:10,borderRadius:15}} variant="outlined">
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" startIcon={< ReplayIcon/>}>Reload</Button>
                <Button size="small">Check Answer</Button>

            </CardActions>
        </Card>
    );
}
export default QuestionCard;