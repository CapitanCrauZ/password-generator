import React, {useState} from 'react';
import '../stylesheets/Generator.css';
import Button from '@mui/material/Button';
import { Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import DarkModeIcon from '@mui/icons-material/DarkMode';


export function Generator(){
  
    const [password, setPassword] = useState('');    
    
    const generatePassword = (length, includeSymbols, includeNumbers, includeUppercase, includeLowercase) => {
        let charset = '';
        let result = '';
    
        if (includeSymbols) charset += '!@#$%^&*()';
        if (includeNumbers) charset += '0123456789';
        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    
        for (let i = 0, n = charset.length; i < length; ++i) {
        result += charset.charAt(Math.floor(Math.random() * n));
        }
    
        setPassword(result);
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(password);    
        alert("Password copied correctly!");
    };

    const actualLength = () => document.getElementById("length-slider").textContent; 
    
    const handleRefreshClick = () => {
        
        // let symbols = document.getElementById("symbols-checkbox").checked;
        // let numbers = document.getElementById("numbers-checkbox").checked;
        // let uppercases = document.getElementById("uppercases-checkbox").checked;
        // let lowercases = document.getElementById("lowercases-checkbox").checked;

        generatePassword(actualLength(), true, true, true, true);
    };
    
    return (
        <div>
            <header>
                <AppBar position="static" id='nav-bar'>
                    <Toolbar>
                        <LockIcon id="padlock-icon" />
                        <Typography id="navbar-title" variant="h6" component="div" sx={{ flexGrow: 1 }}>Password Generator</Typography>
                        <Button id='mode-button' color="inherit">
                            <DarkModeIcon/>
                        </Button>
                    </Toolbar>
                </AppBar>
            </header>
            <main className='container'>
                <FormGroup>
                    <div>
                        <TextField placeholder='Choose your preferences' type="text" value={password} readOnly />
                    </div>
                    <br></br>
                    <div className='buttons-row'>
                        <Button variant="contained" color="primary" onClick={handleCopyClick}>copy</Button>
                        <Button variant="contained" color="success" onClick={handleRefreshClick}>refresh</Button>
                    </div>
                    <br></br>
                    <div>
                        <Slider id="length-slider" defaultValue={12} aria-label="Default" valueLabelDisplay="auto" onChange={e => generatePassword(e.target.value, true, true, true, true)}/>
                    </div>
                    <div>
                        <FormControlLabel id='symbols-checkbox' control={<Checkbox onChange={e => generatePassword(actualLength(), e.target.checked, true, true, true)}/> }  label="Symbols"/>
                    </div>
                    <div>
                        <FormControlLabel id='numbers-checkbox' control={<Checkbox onChange={e => generatePassword(actualLength(), true, e.target.checked, true, true)}/> }  label="Numbers"/>
                    </div>
                    <div>
                        <FormControlLabel id='uppercases-checkbox' control={<Checkbox onChange={e => generatePassword(actualLength(), true, true, e.target.checked, true)}/> }  label="Uppercases"/>
                    </div>
                    <div>
                        <FormControlLabel id='lowercases-checkbox' control={<Checkbox onChange={e => generatePassword(actualLength(), true, true, true, e.target.checked)}/> }  label="Lowercases"/>
                    </div>
                </FormGroup>
            </main>
            <footer>
               <p>@2022 Created by CaptainCrauZ</p> 
            </footer>
        </div>      
        );
    };

export default Generator;