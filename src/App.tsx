import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useState } from 'react'

import Notification from './component/notification/notification'

function App() {
  const [openModal, setModal] = useState(false);

  const handleOpen = () => {
    setModal(true);
  }

  const handleClose = () => {
    setModal(false);
  }

  return (
    <Box>
      <Button onClick={handleOpen} variant="contained">Open modal</Button>
      <Notification
        open={openModal}
        handleClose={handleClose}
      />
    </Box>
  )
}

export default App
