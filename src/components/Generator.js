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
     };
    
    const handleRefreshClick = () => {
        generatePassword(8, true, true, true, true);
    };
    
    return (
        <div>
            <header>
                <AppBar position="static" id='nav-bar'>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Password Generator</Typography>
                        <Button color="inherit"></Button>
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
                        <Slider defaultValue={12} aria-label="Default" valueLabelDisplay="auto" onChange={e => generatePassword(e.target.value, true, true, true, true)}/>
                    </div>
                    <div>
                        <FormControlLabel control={<Checkbox onChange={e => generatePassword(8, e.target.checked, true, true, true)}/> }  label="Symbols"/>
                    </div>
                    <div>
                        <FormControlLabel control={<Checkbox onChange={e => generatePassword(8, true, e.target.checked, true, true)}/> }  label="Numbers"/>
                    </div>
                    <div>
                        <FormControlLabel control={<Checkbox onChange={e => generatePassword(8, true, true, e.target.checked, true)}/> }  label="Uppercases"/>
                    </div>
                    <div>
                        <FormControlLabel control={<Checkbox onChange={e => generatePassword(8, true, true, true, e.target.checked)}/> }  label="Lowercases"/>
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