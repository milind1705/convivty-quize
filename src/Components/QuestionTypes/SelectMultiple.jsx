import { CheckBox } from '@mui/icons-material';
import { Box, Button, Checkbox, FormControl, FormControlLabel, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const SelectMultiple = ({ que }) => {
    const question = que.question;
    const [selectedItem, setSelectedItem] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(checkAns(que.ans, selectedItem));
        setSelectedItem([]);

        // Reset the form
        e.target.reset();
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
            <Typography variant='h4'>
                {question}
            </Typography>

            <FormControl >

                {que.options.map((option) => {
                    return (
                        <FormControlLabel key={option} name={option.toString()} label={option} control={<Checkbox color='primary' checked={selectedItem.includes(option.toString())} />} onChange={(e) => handleCheckbox(e)} />
                    )
                })}

            </FormControl>

            <Button sx={{ margin: 2, padding: 2, display: "block" }} variant='contained' type='submit'>
                Check
            </Button>
        </Box>
    )
}

export default SelectMultiple;
