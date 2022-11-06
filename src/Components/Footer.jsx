import { MenuItem } from '@mui/material'
import React from 'react'
import Select from 'react-select'
import { useTheme } from '../Context/ThemeContext'
import { themeOptions } from '../styles/theme'
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react'



const Footer = () => {
  
    const {setTheme} = useTheme();

    const handleChange = ()=>{

    }
    const handleThemeChange = (e)=>{
        console.log("works");
        // if(!e.target.value){
        //     return;
        // }
        console.log(e.value);
        // console.log(e.target.data['value']);
        setTheme(e.value);
    }

    const link=()=>{
        alert("How can i help u");
    }

    console.log(themeOptions)

    const helpPlz = () => {  
        window.open('/term'); 
    }
    const aboutPage = () => {  
        window.open('/about'); 
    }

  return (
    <div className='footer'>
        <div className="footer-links" >
                <a href='https://github.com/utkarsh-dubey/typing-test-website' target="_blank">
                    <GitHubIcon />
                </a>
            </div> 
        <div className="footer-links" onClick={helpPlz}>
            Term
        </div> 
        <div className="footer-links" onClick={aboutPage}>
            Contact
        </div>
      
        <div className="theme-options">


            <Select
            options={themeOptions}
            menuPlacement='top'
            onChange={handleThemeChange}
            defaultValue={themeOptions[0]}
            >

            </Select>


        </div> 

    </div>
  )
}

export default Footer