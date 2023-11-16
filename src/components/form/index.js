import React from 'react'
import BoxOptionsFormInput from "@/components/form/boxOptionsForm";
import Grid2 from "@mui/material/Unstable_Grid2";
import Grid from "@mui/material/Unstable_Grid2";
import {Stack} from "@mui/material";
import ModelFormInput from "@/components/form/modelForm";


const FormInput = props => {

    return (
        <Stack direction="column" justifyContent="space-between" className="w-full h-full px-5">
            <Grid2 container alignItems="center"  spacing={2}>
                <Grid xs={12} sm={12} md={12} style={{ marginTop: '10px' }}>
                    <ModelFormInput />
                </Grid>
                <Grid xs={12} sm={12} md={12} style={{ marginTop: '10px' }}>
                    <BoxOptionsFormInput />
                </Grid>
            </Grid2>
        </Stack>
    )
}

export default FormInput
