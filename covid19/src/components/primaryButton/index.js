import * as React from 'react';    
import Button from '@mui/material/Button';  

const PrimaryButton=(props)=> {  
  const {title, onClick}=props;
  return (  
      <Button variant="contained" onClick={onClick}>{title||'title'}</Button>   
  );  
}  

export default PrimaryButton;