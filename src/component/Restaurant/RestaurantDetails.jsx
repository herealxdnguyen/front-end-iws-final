import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';

const categories=[
    "noodle",
    "roll",
    "rice"
]
const foodTypes=[
    {label:"All",value:"all"},
    {label:"noodle",value:"noodle"},
    {label:"declan rice",value:"declan rice"}
]
const menu=[1,1,1,1,1,1]
const RestaurantDetails = () => {
    const[foodType,setFoodType]=useState("all")
    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name)
    }

  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-500 py-2 mt-10'>Home/vietnamese/vietfastfood/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>

                        <img className="w-full h-[40vh] object-cover" src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                    </Grid>
                    <Grid item xs={12} lg={6}>

                        <img className="w-full h-[40vh] object-cover" src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                    </Grid>
                    <Grid item xs={12} lg={6}>

                        <img className="w-full h-[40vh] object-cover" src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                    </Grid>
                    
                </Grid>
            </div>
            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>
                    Vietnamese Flash Food</h1>
                <p className='text-gray-500 mt-1'> Vietnamese food yummy yummy</p>
                <div className='space-y-3 mt-3'>
                <p className='text-gray-500 flex items-center gap-3'>
                    <LocationOnIcon/>
                    <span>
                        Hanoi
                    </span>
                </p>
                <p className='text-gray-500 flex items-center gap-3'>
                    <CalendarTodayIcon/>
                    <span>
                        Mon-Sun: 12AM-12PM
                    </span>
                </p>
                </div>
                
            </div>
        </section>
        <Divider/>
        <section className='pt-[2rem] lg:flex relative'>
            <div className='space-y-10 lg:w-[20%] filter'>
                <div className='box space-y-5 lg:sticky top-28 d'>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Type
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value=
                            {foodType}>
                                {foodTypes.map((item)=>
                                <FormControlLabel
                                key={item.value} 
                                value={item.value} 
                                control={<Radio />} 
                                label={item.label} />)}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Category
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                {categories.map((item)=><FormControlLabel 
                                value={item} 
                                control={<Radio />} 
                                label={item} />)}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                {menu.map((item)=><MenuCard/>)}
            </div>
        </section>
    </div>
  )
}

export default RestaurantDetails
 