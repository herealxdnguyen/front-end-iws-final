import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demo=[
    {
        category:"Noodle",
        ingredients:["Noodle","Rice noodle"]    

    },
    {
        category:"Meat",
        ingredients:["Beef","Pork"]
    },
    {
        category:"Vegetables",
        ingredients:["songoku","vegeta"]
    },
    {
        category:"Bread",
        ingredients:["Garlic bread","Bread"]
    }
]

const MenuCard = () => {
    const handleCheckBoxChange=(value)=>{
        console.log("value")
    }
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <div className='lg:flex items-center justify-between'>
                <div className='lg:flex items-center lg:gap-5'>
                <img className="w-[7rem] h-[7-rem] object-cover" src="https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>Pho</p>
                    <p>$499</p>
                    <p className='text-gray-400'>pho pho yummy yummy</p>
                </div>
                </div>
            </div>
        </AccordionSummary>
        <AccordionDetails>
            <form>
            <div className='flex gap-5 flex-wrap'>
                {demo.map((item) => (
                <div>
                    <p>{item.category}</p>
                    <FormGroup>
                    {item.ingredients.map((ing) => (
                    <FormControlLabel
                    control={<Checkbox onChange={() => handleCheckBoxChange(ing)} />}
                    label={ing}
                    />
                    ))}
                    </FormGroup>
                </div>
                ))}
            </div>
                <div className='pt-5'>
                    <Button variant='contained' disabled={false} type='submit'>
                        {true?"Add to cart":"Out of Stock"}
                    </Button>
                </div>
            </form>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard
