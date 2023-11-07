import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EMIDisplay from '../emiComponents/EMIDisplay';
import MyCart from '../shoppingCart/MyCart';

import EmiCalculator from '../emiWithSliders/EmiCalculator2';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

 function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="EMI Calculator" {...a11yProps(0)} />
          <Tab label="Shopping Cart" {...a11yProps(1)} />
          <Tab label="EMI with Slider" {...a11yProps(2)} />
          <Tab label="Video Gallery" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <EMIDisplay></EMIDisplay>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <MyCart></MyCart>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <EmiCalculator></EmiCalculator>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      item 4
      </CustomTabPanel>
    </Box>
  );
}

export default BasicTabs;