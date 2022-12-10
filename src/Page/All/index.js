import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import './index.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const All = ({props, setData})=>{
    const [open, setOpen] = React.useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };
    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
    const handleClick=(e)=>{
        e.preventDefault();
        const data = document.getElementById('input').value;
        setData([
            ...props,
            {
                task: data,
                completed: false
            }
        ])
        setOpen(true);
    }
    const handleCheckBox = (event)=>{
        for (let i in props){
            if(props[i].task===event.target.value){
                console.log('find')
                props[i].completed = !props[i].completed
            }
            setData([...props])
        }
    }
    return (
        <div className="All">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '30ch', height: '7.2ch' },
                }}
                noValidate
                autoComplete="off"
                alignItems={'center'}
                >
                <TextField id="input" label="Add new task" variant="outlined"/>
                <Button variant="contained" onClick ={handleClick}>ADD</Button>
            </Box>
            <div>
            {
                props.map((iter, index)=>{
                    return (
                        <div className = 'item' key={index}>
                            <Checkbox {...label} value={iter.task} checked={iter.completed} onClick = {handleCheckBox} />
                            <div>{iter.task}</div>
                        </div>
                    )
                })
            }
            </div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Add successfully"
                action={action}
            />
        </div>
    )
}