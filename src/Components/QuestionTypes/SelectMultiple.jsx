import { Box, Button, Checkbox, FormControl, FormControlLabel, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import playSound from '../PlaySound'

const SelectMultiple = ({ que, mute }) => {
    const question = que.question;
    const [attempts, setAttempts] = useState(que.attempts);

    const [selectedItem, setSelectedItem] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        que.attempts = que.attempts -1 ;
        setAttempts(que.attempts);
        setSelectedItem([]);
        if(checkAns(que.ans, selectedItem)){
            playSound(mute, true);
                  que.status = "correct";
              }else{
                  playSound(mute, false);
                  que.status = "wrong";
              }
    }

    const checkAns = (ansArr, newArr) => {
        if (newArr.length !== ansArr.length) {
            return false
        }
        for (let item of ansArr) {
            if (!newArr.includes(item.toString())) {
                return false
            }
        }
        return true
    }

    useEffect(() => {
        console.log(selectedItem)
    }, [selectedItem])

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        if (!checked) {
            const removedId = selectedItem.filter((items) => {
                return items !== name
            });
            setSelectedItem(removedId);
        } else {
            setSelectedItem([...selectedItem, name])
        }
    }

    return (
        <Box component={"form"} onSubmit={(e) => handleSubmit(e)}>
            <Typography variant='h6'>
                {question}
            </Typography>
            <Typography paddingBlock={1}>{`${attempts} attempt(s) left`} </Typography>

            <FormControl >

                {que.options.map((option) => {
                    return (
                        <FormControlLabel key={option} name={option.toString()} label={option} control={<Checkbox color='primary' disabled={que.attempts <= 0} checked={selectedItem.includes(option.toString())} />} onChange={(e) => handleCheckbox(e)} />
                    )
                })}

            </FormControl>

            <Button sx={{ margin: 2, padding: 2, display: "block" }} variant='contained' disabled={que.attempts <= 0} type='submit'>
                Check
            </Button>
        </Box>
    )
}

export default SelectMultiple;
