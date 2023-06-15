import React,{useEffect, useState} from 'react'
import styles from "./index.module.css"
import { useNavigate } from 'react-router-dom'
import { usePassCode } from '../../Context'
export default function Access() {
  const [isNew , setNew] = useState(true)
  const [DispassCode, setDisPassCode] = useState("")
  const [tempPassCode, setTempPassCode] = useState("")
  const [displayCode , setDisplayCode] = useState(false)
  
  const navigate = useNavigate();
  
  const { passCode , updatePassCode } = usePassCode();
  
  const getPassCode = async()=>{
    try{
      const options = {
        method : "POST",
        headers: {
          "content-type" :"application/json"
        }
      }
      const resp = await fetch("http://127.0.0.1:5000/user/create",options)
      if (resp.ok){
        const data = await resp.json()
        setDisPassCode(data["code"]+"|"+data["password"])
        updatePassCode(data["code"]+"|"+data["password"])
        setTempPassCode(data["code"] + "|" + data["password"])
      }
      else{
        setDisPassCode("Error setting pass code")
      }
    }
    catch(e){
      setDisPassCode("Server Error setting pass code")
      throw new Error(e)
    }
    setTimeout(() => {
      setDisplayCode(false)
      setNew(true)
    }, 5000);

  }
  const checkPassCode = async()=>{
    console.log(tempPassCode)
    try{
      if (isNew == true){
        const options = {
          method : "POST",
          headers : {
            "content-type" : "application/json"
          },
          body : JSON.stringify({
            password  : tempPassCode
          })
        }
        try{
          const resp = await fetch ("http://127.0.0.1:5000/user/check",options)
          if (resp.ok){
            updatePassCode(tempPassCode)
            setTempPassCode("")
            setNew(true)
            navigate("/")
          }
          else{
            alert("pass code is wrong")
          }
        }
        catch (e){
          throw new Error(e)
        }
      }
    }
    catch(e){
      throw new Error(e)
    }
  }
    const handleChange = async(e)=>{
      setTempPassCode(e.target.value)
    }
  return (
    <>
    <div>

      <div className={styles.maincontainer}>
        <div className={styles.entercontainer} >
          <p1 className ={styles.passtitle}> {!isNew  == false ?  "Pass Code" : "Generate Pass Code"} </p1>
          { isNew ? (<>
          <input className={styles.passcode} onChange={(e)=>{handleChange(e)}} placeholder={Array(tempPassCode.length).fill('*').join('')}/>
          <p1 className={styles.createaccount}>Want to <button className={styles.createbutton} onClick={()=>{setNew(!isNew)}}>Create</button> an account?</p1>
          <button className={styles.loginbtn} onClick={()=>{checkPassCode();}}>Login</button>
          </>
          ) : displayCode == false ? <>
          <p1 className ={styles.timerwarning}>Pass Code will disappear after 5 seconds</p1><button className={styles.genpas} onClick={()=>{setDisplayCode(!displayCode); getPassCode();}}>Gen Pass Code</button>
          </>
          : passCode != "" ? <p1 className = {styles.displayPassCode}>{DispassCode}</p1> :<p1 className = {styles.displayPassCode}>Loading . . .</p1> }
          
        </div>
      </div>
    </div>
    </>
  )
}
      // <div className={styles.informationcontainer}>
      //   <div className={styles.informationdis}>

      //         <h1>Why use a Pass Code instead of normal username, and password?</h1>
      //         <p1>Simplicity: Passcodes are typically shorter and easier to remember than complex usernames and passwords. This can enhance the user experience, especially in situations where frequent logins are required.
      //       <br/><br/>
      // Anonymity: Passcodes can offer a certain level of anonymity as they do not reveal any personal information about the user. This can be useful in situations where privacy is a concern or when the system doesn't require individual identification.
      // <br/><br/>
      // Memorability: Passcodes can be based on personal information or easy-to-remember patterns, which can make them more memorable for users. This can reduce the likelihood of forgotten credentials and the need for password reset processes.
      // <br/><br/>
      // Efficiency: In certain contexts, such as public kiosks or shared devices, passcodes can provide a quick and efficient way for multiple users to access a system without the need for individual account creation and login.
      // <br/><br/>
      // Enhanced Security: Passcodes can be used in conjunction with other authentication factors to strengthen security. For example, they can be combined with biometric authentication (e.g., fingerprint or facial recognition) or used as a secondary factor alongside a traditional username and password.</p1>
      // </div>
      //   </div>
  