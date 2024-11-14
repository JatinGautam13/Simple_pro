import React,{useState} from 'react'
import Sign from './Sign'

const Login = () => {

    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")

    const submitHandler=(e)=>{
        e.preventDefault()

        // setMail("")
        // setPass("")
    }

    const [showModel, setShowModel] = useState(false)


  return (
    <>
    <div className='flex justify-between '>
      <div>
        <video controls src="https://res.cloudinary.com/dfv1qnzoz/video/upload/v1719039250/gh211amrhepwgubdirem.mp4" className=' rounded-lg'></video>
      </div>
    <div className='border-2 border-[#ebebeb] h-[22vw] w-[28%] rounded mt-2' >
        <form className='flex flex-col border-black mx-6 my-4' onSubmit={(e)=>{
              submitHandler(e)
        }} >

            <input value={mail} onChange={(e)=>{
              setMail(e.target.value)
            }} type="email" placeholder='Email address or phone number' className='border-2 border-[#EbEAEA] mb-3 h-12 pl-4 rounded'/>

            <input value={pass} onChange={(e)=>{
              setPass(e.target.value)
            }} type="password" placeholder='password' className='border-2 border-[#ebeaea] mb-3 h-12 pl-4 border- rounded '  />

            <button className=' bg-[#040c4a] text-white h-10 rounded hover:bg-blue-600'>Log in</button>

            <a className='text-center text-blue-500 hover:underline underline-offset-2 '>Forgetten password?</a>
            <div className='w-full h-0.5 my-6 bg-[#ebeaea]'></div>
            <button onClick={(e)=>{setShowModel(true)
                submitHandler(e)
            }} className= 'bg-[#42b72a] text-white h-11 rounded hover:bg-[#449d48]'>Create New Account</button>
        </form>
        {showModel&&<Sign onClose={()=>setShowModel(false)}/>}
    </div>
    </div>
    </>
  )
}

export default Login