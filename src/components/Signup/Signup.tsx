import { Button } from '@mui/material'
import React, { useState } from 'react'
import SignUpModal from './SignUpModal'

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleIsOpen = () => {
    setIsOpen(true)
  }

  const handleIsClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={() => handleIsOpen()}>SignUp</Button>
      {isOpen && <SignUpModal isOpen={isOpen} closeModal={() => handleIsClose()} />}
    </>
  )
}

export default SignUp
