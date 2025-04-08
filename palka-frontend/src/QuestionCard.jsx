import {
    Box,
    Button, ButtonGroup,
    Card,
    CardActions,
    CardContent,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
function QuestionCard({data, onRedo, onSkip, onCheck,onChange, alreadyAnswered})
{
    const getErrorMessage = (id) => {
        if(alreadyAnswered[id]) return "   | Wrong Answer !";
        return "";

    };

    return (
        <div>
            <div id="question" style={{paddingTop: 70}}>
                <h2>{data.question}</h2>
            </div>
            <div id="answers" style={{paddingTop: 15}}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={onChange}
                >
                    <FormControlLabel value="0"  control={<Radio />} label={data.first_answer + getErrorMessage(0)} disabled={alreadyAnswered[0]} />
                    <FormControlLabel value="1"  control={<Radio />} label={data.second_answer + getErrorMessage(1)} disabled={alreadyAnswered[1]}/>
                    <FormControlLabel value="2"  control={<Radio />} label={data.third_answer+ getErrorMessage(2) }  disabled={alreadyAnswered[2]}/>
                    <FormControlLabel value="3"  control={<Radio />} label={data.fourth_answer + getErrorMessage(3)}  disabled={alreadyAnswered[3]} />

                </RadioGroup>
            </div>
            <div id="actions" style={{paddingTop: 50,display: "flex", justifyContent: "space-between"}}>
                <ButtonGroup>
                    <Button onClick={onSkip} variant="outlined" color="primary">Skip</Button>
                    <Button onClick = {onRedo} variant="outlined" startIcon={<ReplayIcon />}>Redo</Button>
                </ButtonGroup>
                <Button onClick={onCheck} variant="contained" color="primary">Check answer!</Button>

            </div>
        </div>
    );
    }

export default QuestionCard;