import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);
function Login() {
 
  const [newUser,setNewUser]=useState(false);
  const[user,setUser]=useState({
    isSignIn:false,
    name:'',
    email:'',
    photo:'',
    password:'',
    error:'',
    success:false
  });
const [loggedInUser,setLoggedInUser]=useContext(UserContext);
const history=useHistory();
const location=useLocation();
let { from } = location.state || { from: { pathname: "/" } };

const provider = new firebase.auth.GoogleAuthProvider();
const handleSingIn=()=>{
  firebase.auth().signInWithPopup(provider)
  .then(res=>{
    const {displayName,email,photoURL}=res.user;
    const signInUser={
      isSignIn:true,
      name:displayName,
      email:email,
      photo:photoURL
    }
   setUser(signInUser)

  })
  .catch(error=>console.log(error))
}

const handelSingOut=()=>{
  firebase.auth().signOut()
  .then(()=>{
    const signOut={
      isSignIn:false,
      name:'',
      email:'',
      photo:''
    }
    setUser(signOut);
  })
  .catch(error=>console.log(error))
}

//form validate
const handleOnChange=(event)=>{
  // debugger;
  let isFieldValid=true;
   if(event.target.name==='email'){
      isFieldValid=/\S+@\S+\.\S+/.test(event.target.value)    
   }
   if(event.target.name==='password'){
          const passwordLength=event.target.value.length>6;
          const passwordHasDigit=/\d{1}/.test(event.target.value)
          isFieldValid=passwordLength && passwordHasDigit;
   }
  if(isFieldValid){
          const newUserInfo={...user};
          newUserInfo[event.target.name]=event.target.value;
          setUser(newUserInfo);
  }
}
const handleOnSubmit=(event)=>{
  event.preventDefault();
  if(newUser && user.email && user.password){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    //successful handle
    .then(res=>{
        const newUserInfo={...user};
        newUserInfo.error='';
        newUserInfo.success=true;
        setUser(newUserInfo);
         setLoggedInUser(newUserInfo);
         history.replace(from);
     
    })
    //error handles
    .catch(function(error) {   
      const newUserInfo={...user};
      newUserInfo.error=error.message;
      newUserInfo.success=false;
      setUser(newUserInfo);
    });
  }
  if(!newUser && user.email && user.password){
    
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res=>{
      const newUserInfo={...user};
      newUserInfo.error='';
      newUserInfo.success=true;
      setUser(newUserInfo)
      setLoggedInUser(newUserInfo);
      history.replace(from);
   })
    
    .catch(function(error) {
      const newUserInfo={...user};
      newUserInfo.error=error.message;
      newUserInfo.success=false;
      setUser(newUserInfo);
     
    });
  }

}
  return (
   <div style={{textAlign:'center'}}>

     {/* handle gmail  */}
   {
     user.isSignIn?<button onClick={handelSingOut}>Sing Out</button>:<button onClick={handleSingIn}>Sing In </button>
   }
   <br/>
   <button>Facebook Login</button>
     {
       user.isSignIn && 
       <div>
          <p>Welcome:{user.name}</p>
          <p>User Email:{user.email}</p>
          <p><img src={user.photo} alt='' /></p>
       </div>
     }
     {/* ending part gmail */}
            <h1>Our Own authentication</h1>
            <input type="checkbox" onChange={()=>{setNewUser(!newUser)}}/>
            <label htmlFor="newUser">New User Sign Up</label>
            <form onSubmit={handleOnSubmit}>
             {newUser && <input type="text" name="name" id="" placeholder='Enter your name'/>}
             <br/>
                <input type="text" name="email"  onBlur={handleOnChange} required placeholder="email address"/> <br/>
                <input type="password" name="password"  onBlur={handleOnChange} required placeholder="password"/> <br/>
                <input type="submit" value="Submit"/>
            </form>
           <p style={{color:'red'}}>{user.error}</p>
           {user.success && <p style={{color:'green'}}>Data {newUser?'create':'logged in'} Successfully</p>}
   </div>
  );
}

export default Login;
