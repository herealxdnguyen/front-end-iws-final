import React from 'react'

import { Button, Card } from '@mui/material';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
const AddressCard = ({item,showButton,handleSelectAddress}) => {
    
  return (
    <Card className="flex gap-5 w-64 p-5">
        <AddLocationAltIcon/>
        <div className='space-y-3 text-gray-500'>
            <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
            {showButton && (<Button variant="outlined" fullWidth onClick={()=>handleSelectAddress(item)}>Add</Button>)}
            
        </div>
    </Card>
      
  )
}

export default AddressCard

