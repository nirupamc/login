import React,{useState} from "react";

const App=()=> {

  const[fullName,setFullName]=useState({
    fName:'',
    lName:'',
    email:'',
    phoneNumber:'',
  });
  
  const inputEvent=(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const {value,name}=event.target; //array destructuring

    setFullName((preValue)=>{ //we are aceesing the previous value of the setstate
     
        if(name === 'fName'){
          return{
          fName : value,
          lName : preValue.lName,
          email:preValue.email,
          phoneNumber:preValue.phoneNumber,
          };
        } 
        else if(name === 'lName'){
          return{  
            fName : preValue.fName,
          lName:value,
          email:preValue.email,
          phoneNumber:preValue.phoneNumber,
        } ;
      }
        else if(name === 'email'){
          return{  
            fName : preValue.fName,
           lName:preValue.lName,
           email:value,
           phoneNumber:preValue.phoneNumber,
        };
      }
        else if (name === 'phoneNumber'){
          return{  
            fName : preValue.fName,
          lName:preValue.lName,
          email:preValue.email,
          phoneNumber:value,
        }
       
        }
      
      

    })
  }
  const onSubmits=(event)=>{
    event.preventDefault();//preventing default reload action of forms
    alert("form submitted") 


  };
 

  
  

  return (
    <>
    <div className="main_div">
    <form onSubmit={onSubmits}>
    <div>
      <h1>Hello {fullName.fName} {fullName.lName} </h1>
      <p> {fullName.email} </p>
      <p>{fullName.phoneNumber}</p>
      <input type="text" placeholder="Enter Your Name." name ='fName' onChange={inputEvent} value={fullName.fName}/>
      <input type="text" placeholder="Enter Your Last Name." name ='lName' onChange={inputEvent} value={fullName.lName}/>
      <input type="text" placeholder="Enter Your Email." name ='email' onChange={inputEvent} value={fullName.email}/>
      <input type="number" placeholder="Enter Your phone Number." name ='phoneNumber' onChange={inputEvent} value={fullName.phoneNumber}/>


      <br/>
      <button type="submit">Click Me</button>
      </div>
      </form>
      </div>

    </>
  );
}


export default App;
