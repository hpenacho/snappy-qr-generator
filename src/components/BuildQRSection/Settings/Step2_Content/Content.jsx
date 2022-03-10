import useFormPicker from "../../../../hooks/useFormPicker";
import { Stack } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";

const Content = ({ form }) => {

    return (
        <>
            <Box p={2}>
                {form}
            </Box>

        </>
    )
}

export default Content;
