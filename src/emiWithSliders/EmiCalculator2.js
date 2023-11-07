// EmiCalculator.js
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Grid, Input, TextField, Typography } from '@mui/material';


const EmiCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(100000);
    const [interestRate, setInterestRate] = useState(5);
    const [loanTenure, setLoanTenure] = useState(12);

    const calculateEMI = () => {
        const principal = loanAmount;
        const rate = interestRate / 100 / 12; // Monthly interest rate
        const time = loanTenure;

        const emi =
            principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1);
        return emi.toFixed(2);
    };

    const interest = calculateEMI() * loanTenure - loanAmount;

    const data = [
        { name: 'Principal', value: loanAmount },
        { name: 'Interest', value: interest },
    ];

    const COLORS = ['#0088FE', '#FF8042'];

    const TotalAmountPayable = loanAmount + interest;
    return (
        <div>
            <h1>Loan EMI Calculator</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}><label>Loan Amount</label></Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item md={9} xs={12}>
                    <Slider
                        marks={[
                            {
                                value: 1000,
                                label: "0",
                            },
                            {
                                value: 10000000,
                                label: "1 Cr",
                            },
                        ]}
                        value={loanAmount}
                        onChange={(event, newValue) => setLoanAmount(newValue)}
                        min={1000}
                        max={10000000}
                        step={10000}
                        valueLabelDisplay="auto"
                    />
                </Grid>
                <Grid item md={3} xs={12}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Loan Amount"
                        value={loanAmount}
                        size="small"
                        onChange={(e) => setLoanAmount(e.target.value === '' ? 0 : Number(e.target.value))}
                        inputProps={{
                            step: 10000,
                            min: 1000,
                            max: 10000000,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item md={12} xs={12}><label>Loan Tenure (Months)</label></Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item md={9} xs={12}>
                    <Slider
                        marks={[
                            {
                                value: 3,
                                label: "3",
                            },
                            {
                                value: 240,
                                label: "240",
                            },
                        ]}
                        label="Loan Tenure (Months)"
                        value={loanTenure}
                        onChange={(event, newValue) => setLoanTenure(newValue)}
                        min={3}
                        max={240}
                        step={1}
                        valueLabelDisplay="auto"
                    />
                </Grid>
                <Grid item md={3} xs={12}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Loan Tenure"
                        value={loanTenure}
                        size="small"
                        onChange={(e) => setLoanTenure(e.target.value === '' ? 0 : Number(e.target.value))}
                        inputProps={{
                            min: 3,
                            max: 240,
                            step: 1,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item md={12} xs={12}> <label>Interest Rate (%)</label></Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item md={9} xs={12}>
                    <Slider
                        marks={[
                            {
                                value: 1,
                                label: "1%",
                            },
                            {
                                value: 20,
                                label: "20%",
                            },
                        ]}
                        value={interestRate}
                        onChange={(event, newValue) => setInterestRate(newValue)}
                        min={1}
                        max={20}
                        step={1}
                        valueLabelDisplay="auto"
                    />
                </Grid>
                <Grid item md={3} xs={12}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Interest Rate"
                        value={interestRate}
                        size="small"
                        onChange={(e) => setInterestRate(e.target.value === '' ? 0 : Number(e.target.value))}
                        inputProps={{
                            min: 1,
                            max: 20,
                            step: 1,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} mt={4}>
                <Grid item md={6} xs={12}>
                    <div>
                        <h2>EMI Details</h2>
                        <p>Monthly EMI</p>
                        <h5>₹ {calculateEMI()}</h5>
                        <p>Principal Amount</p>
                        <h5>₹ {loanAmount}</h5>
                        <p>Interest Amount</p>
                        <h5>₹ {interest}</h5>
                        <p>Total Amount Payable</p>
                        <h5>₹ {TotalAmountPayable}</h5>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </div>
    );
};

export default EmiCalculator;
