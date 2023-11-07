// SliderInput.js
import React from 'react';
import Slider from '@mui/material/Slider';
import { Grid, Input } from '@mui/material';

const SliderInput = ({ label, value, onChange, min, max, step }) => {

    return (
        <div>
          
            <Grid container spacing={2}>
                <Grid xs={8}>
                <label>{label}</label>
                    <Slider
                        value={value}
                        onChange={onChange}
                        min={min}
                        max={max}
                        step={step}
                        valueLabelDisplay="auto"
                    />
                </Grid>
                
            </Grid>
        </div>
    );
};

export default SliderInput;
