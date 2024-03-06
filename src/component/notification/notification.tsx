import { Button, Stack, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import { notificationBoxStyle, notificationBtnStackStyle, notificationStackStyle, notificationBtnStyles } from "./style"


const Notification = () => {
    return (
        <Box
            sx={notificationBoxStyle}
        >
            <Stack
                sx={notificationStackStyle}
            >
                <Typography fontSize={"22px"}>Document Changed</Typography>
                <Typography>Do you want to save your edits?</Typography>
            </Stack>

            <Stack sx={notificationBtnStackStyle}>
                <Button
                    sx={{
                        ...notificationBtnStyles,
                        borderRadius: "0 0 0 20px",
                        borderRight: "1px solid rgba(0,0,0,0.1)",
                    }}
                >Cancel</Button>
                <Button
                    sx={{
                        ...notificationBtnStyles,
                        borderRadius: '0 0 20px 0',
                    }}
                >Save</Button>
            </Stack>
        </Box>
    )
}

export default Notification