import React, {useState} from 'react'
import {InputAdornment, TextField} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Grid from "@mui/material/Unstable_Grid2";
import {dielineSelector, setSizeOptions} from "@/store/reducers/dielineSlice";
import {useSelector} from "react-redux";
import {isUndefined} from "lodash";
import {useAppDispatch} from "@/store";
import {Text} from "@/styles/share.styled";

const BoxOptionsFormInput = (props) => {
    const dispatch = useAppDispatch();
    const { sizeOptions, } = useSelector(dielineSelector);
    const [selectUnit, setSelectUnit] = useState('cm')

    const handleChange = (event) => {
        const { name, value } = event.target

        const setOptions = [];
        for (const option of sizeOptions.size_options) {
            const data = {...option};
            if(data.name === name) {
                data.value = Number(value);
            }
            setOptions.push(data)
        }

        dispatch(setSizeOptions({
            ...sizeOptions,
            size_options: setOptions
        }))
    }

    return (
        <div className="w-auto h-full">
            <div className="mb-3">
                <Text size="18" color="#000000" weight={700}>
                    Change Options
                </Text>
            </div>
            <Grid2 container alignItems="center"  spacing={2}>
                {
                    !isUndefined(sizeOptions.size_options) &&  sizeOptions.size_options.map((option, index) => (
                        <Grid key={index} xs={4} sm={4} md={4}>
                            <Text size="18" color="#999" weight={400}>
                                {option.label}
                            </Text>
                            <TextField
                                fullWidth
                                name={option.name}
                                size="small"
                                type="number"
                                value={option.value}
                                onChange={handleChange}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">{selectUnit}</InputAdornment>,
                                }}
                            />
                        </Grid>
                    ))
                }
            </Grid2>
            <hr className="mt-5 "/>
        </div>
    )
}

export default BoxOptionsFormInput
