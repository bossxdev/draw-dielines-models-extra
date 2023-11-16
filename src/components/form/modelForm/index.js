import React from 'react'
import {FormControl, MenuItem, Select} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Grid from "@mui/material/Unstable_Grid2";
import {useAppDispatch, useAppSelector} from "@/store";
import {dielineSelector, setSelectModel, setSizeOptions} from "@/store/reducers/dielineSlice";
import {ALL_MODEL, MODEL_DEFAULT_SIZE} from "@/utils/constants";
import {isEmpty} from "lodash";
import {Text} from "@/styles/share.styled";


const ModelFormInput = () => {
    const dispatch = useAppDispatch();
    const { modelSelect } = useAppSelector(dielineSelector);
    const handleChange = (event) => {
        const model = event.target.value
        dispatch(setSelectModel(model))
        dispatch(setSizeOptions(MODEL_DEFAULT_SIZE[model]))
    };

    return (
        <div className="w-auto h-full">
            <div className="mb-3">
                <Text size="18" color="#000000" weight={700}>
                    Models
                </Text>
            </div>
            <Grid2 container alignItems="center"  spacing={2}>
                <Grid xs={12} sm={12} md={12}>
                    <FormControl fullWidth>
                        <Select
                            fullWidth
                            displayEmpty
                            name="printer"
                            size="small"
                            value={modelSelect}
                            onChange={handleChange}
                        >
                            {
                                !isEmpty(ALL_MODEL) &&
                                ALL_MODEL.map((model, index) => (
                                    <MenuItem key={index}  value={model}>{model}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Grid>
            </Grid2>
            <hr className="mt-5 "/>
        </div>
    )
}

export default ModelFormInput
