import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button'
import './index.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Completed = ({props, setData})=>{
    const handleCheckBox = (event)=>{
        for (let i in props){
            if(props[i].task===event.target.value){
                console.log('find')
                props[i].completed = !props[i].completed
            }
            setData([...props])
        }
    }

    const handleDeleteAll= ()=>{
        setData(props.filter((i)=>{return i.completed===false}))
    }
    return (
        <div className="All">
            <div>
            {
                props.filter((iter)=>{return iter.completed===true}).map((iter, index)=>{
                    return (
                        <div className = 'item' key={index}>
                            <div style={{display:'flex', alignItems:'center', width:'40%'}}>
                                <Checkbox {...label} value ={iter.task} checked={iter.completed} onClick = {handleCheckBox} />
                                <div>{iter.task}</div>
                            </div>
                            <button onClick={()=>{
                                setData(props.filter((i)=>{return i.task!==iter.task}))
                            }} style={{marginLeft:'20rem', position:'relative', right: '0'}}><DeleteIcon/></button>
                        </div>
                    )
                })
            }
            </div>
            <Button variant="contained" color="error" onClick={handleDeleteAll}>
                Delete All
            </Button>
        </div>
    )
}