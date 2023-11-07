import React, { useState } from 'react';

import { Button, Container, Stack, TextField } from '@mui/material';


const EMIDisplay = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTenure, setLoanTenure] = useState(0);
  const [emi, setEMI] = useState(0);

  const calculateEMI = () => {
    // EMI calculation logic
  
    const p = loanAmount; // Loan Amount
    const r = (interestRate / 12 / 100); // Monthly interest rate
    const n = loanTenure; // Total number of payments

    const emiValue = (p * r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
    setEMI(emiValue.toFixed(2));
  };

  return (
    <div>
      <h1>EMI Calculator</h1>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <TextField required
          id="standard-number"
          type="number"
          label="Loan Amount"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)}
        />
        <TextField required
          id="standard-number"
          type="number"
          label="Interest Rate (Annual %):"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
        />
        <TextField required
          id="standard-number"
          type="number"
          label="Loan Tenure (months):"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          value={loanTenure} onChange={(e) => setLoanTenure(e.target.value)}
        />
        <Button
          color="primary"
          size="medium"
          variant="contained"
          onClick={calculateEMI}>Calculate </Button>
      </Stack>

      <h3>EMI:</h3>
      <p><strong>{emi}</strong> per month</p>
    </div>
  );
};

export default EMIDisplay;
