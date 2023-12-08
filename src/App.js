import './App.css';
import { TextField,Button } from '@mui/material';
import { useState } from 'react';


function App() {
  const [uname,setUname]=useState()
  const [email,setEmail]=useState()
  const [pwd,setPwd]=useState()
  const [conpwd,setConpwd]=useState()
  const [validateuname,setValidateuname]=useState(true)
  const [validateemail,setValidateemail]=useState(true)
  const [validatepwd,setValidatepwd]=useState(true)
  // const [validateconpwd,setValidateconpwd]=useState(true)



  const validateInput1=(e)=>{
    const {name,value}=e.target
    if(!!value.match((/^[a-zA-Z\d_]{4,16}$/))){
      if(name=='uname'){
        setUname(value)
        setValidateuname(true)
      }
    }
    else{
      if(name=='uname'){
        setUname(value)
        setValidateuname(false)
      }
    }
  }


  const validateInput2=(e)=>{
    const {name,value}=e.target
    if(!!value.match((/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/))){
      if(name=='email'){
        setEmail(value)
        setValidateemail(true)
      }
    }
    else{
      if(name=='email'){
        setEmail(value)
        setValidateemail(false)
      }
    }
  }


  const validateInput3=(e)=>{
    const {name,value}=e.target
    if(!!value.match((/^(?=.{8,})(?=.*\d)(?=.*[A-Z])(?!.*\s).*$/))){
      if(name=='pwd'){
        setPwd(value)
        setValidatepwd(true)
      }
    }
    else{
      if(name=='pwd'){
        setPwd(value)
        setValidatepwd(false)
      }
    }
  }


// console.log(uname,email,pwd,conpwd)

const handlesubmit=(e)=>{
  // e.preventDefault()
  if(!uname || !email || !pwd || !conpwd){
    alert('Enter valid information!')

  }
  else if(pwd !== conpwd){
    alert('Incorrect Confirm Password')
  }
  else{
    alert('Registration Successfull!')
  }

}





  return (
    <div className='d-flex justify-content-center w-100 align-items-center' id='d1' >
      <div className='p-5 rounded' id='d2'>
        <h1 >Registration Form</h1>
        <form action="" className='my-5' onSubmit={(event)=>handlesubmit(event)}>
          <div className='mb-3'>
          <TextField id="outlined-basic1" label="Username"  variant="outlined" name='uname' color="secondary" value={uname} className='w-100' onChange={(event)=>validateInput1(event)}/>
          {
            !validateuname &&
            <div className='text-danger' style={{fontSize:'13px'}}>
              *Enter Valid Username
            </div>
          }
          </div>
          <div className='mb-3'>
          <TextField id="outlined-basic2" label="E-mail"  variant="outlined" name='email' color="secondary" className='w-100' value={email} onChange={(event)=>validateInput2(event)}/>
          {
            !validateemail &&
            <div className='text-danger' style={{fontSize:'13px'}}>
              *Enter valid E-mail
            </div>
          }
 
          </div>
          <div className='mb-3 '>
          <TextField id="outlined-basic3" label="Password" type='password' variant="outlined" color="secondary" name='pwd' className='w-100 ' value={pwd} onChange={(event)=>validateInput3(event)} />
          {
            !validatepwd &&
            <div className='text-danger' style={{fontSize:'13px'}}>
              *Password must contain atleast 8 characters  including <br /> uppercase and numbers 
            </div>
          }

          </div>
          <div className='mb-3'>
          <TextField id="outlined-basic4" label="Confirm Password" type='password' color="secondary" variant="outlined" name='conspwd' className='w-100' value={conpwd} onChange={(event)=>setConpwd(event.target.value)} />

          </div>
          <div className='mb-3 mt-5'>
          <Button variant="contained" type='submit' style={{width:'180px',marginLeft:'64px',height:'39px',backgroundColor:'#b300b3'}} 
          // disabled={validateuname && validateemail && validatepwd && conpwd ? false : true}
          >Submit</Button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default App;
