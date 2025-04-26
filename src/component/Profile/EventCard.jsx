import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <Card sx={{width:345}}>
        <CardMedia

        sx={{height:345}} 
        image='https://images.pexels.com/photos/19347048/pexels-photo-19347048/free-photo-of-delicious-vietnamese-meals-on-plates-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <CardContent>
            <Typography variant='h5'>
                Viet Flash Food
            </Typography>
            <Typography variant='body2'>
                90% off on your all order
            </Typography>
            <div className='py-2 space-y-2'>
                <p>{"mumbai"}</p>
                <p className='text-sm text-blue-500'>April 30 12:00AM-12:00PM</p>
            </div>
            {true && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </CardContent>
    </Card>
  )
}

export default EventCard
