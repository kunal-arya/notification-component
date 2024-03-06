import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"

import { notificationBoxStyle, notificationBtnStackStyle, notificationStackStyle, notificationBtnStyles, notificationModalStyles } from "./style"


type Props = {
    open: boolean;
    handleClose: () => void;
}

const Notification = ({ open, handleClose }: Props) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={notificationModalStyles}
        >
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
                        onClick={handleClose}
                    >Cancel</Button>
                    <Button
                        sx={{
                            ...notificationBtnStyles,
                            borderRadius: '0 0 20px 0',
                        }}
                        onClick={handleClose}
                    >Save</Button>
                </Stack>
            </Box>
        </Modal>
    )
}

export default Notification