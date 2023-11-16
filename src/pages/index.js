import {useAppDispatch} from "@/store";
import {DEFAULT_MODEL, MODEL_DEFAULT_SIZE} from "@/utils/constants";
import {setSelectModel, setSizeOptions} from "@/store/reducers/dielineSlice";
import {useDeepEffect} from "@/hooks/useDeepEffect";
import Box from "@mui/material/Box";
import {DieLineContainer} from "@/styles/share.styled";
import Grid2 from "@mui/material/Unstable_Grid2";
import Grid from "@mui/material/Unstable_Grid2";
import DieLineComponents from "@/components/dieline";
import FormInput from "@/components/form";
import React from "react";
import MainLayout from "@/components/layouts/mainLayout";


const  Home = () => {
    const dispatch = useAppDispatch();

    const fetchData = async () => {
        await dispatch(setSelectModel(DEFAULT_MODEL))
        await dispatch(setSizeOptions({ ...MODEL_DEFAULT_SIZE[DEFAULT_MODEL]}))
    }

    useDeepEffect(() => {
        fetchData()
    }, []);

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <DieLineContainer>
                <Grid2 container direction="row" justifyContent="center" spacing={2} className="w-full h-full">
                    <Grid xs={9} md={9}>
                        <DieLineComponents />
                    </Grid>
                    <Grid xs={3} md={3}>
                        <FormInput />
                    </Grid>
                </Grid2>
            </DieLineContainer>
        </Box>
    )
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
