import React , {useState} from "react"
import { useDispatch } from "react-redux"
import { setUsers , removeUser } from "./redux/slice/login-slice"
import { useSelector } from "react-redux"
const Login = () => {

    const {loginSlice} = useSelector((res)=>res)

    const dispatch = useDispatch()

    const [formValue, setFormValue] = useState({
        name: loginSlice ? loginSlice.name : '',
        email: loginSlice ? loginSlice.email : '',
        phone: loginSlice ? loginSlice.phone : '',
        password: loginSlice ? loginSlice.password : ''
    })

    const handleChange = (e) => {
        const input = e.target
        const name = input.name
        const value = input.value

        setFormValue({
            ...formValue,
            [name]: value
        })

    }

    const login = (e) => {
        e.preventDefault()
        console.log(formValue)
    }

    const handleCheckBox = (e) => {
        const input = e.target
        if (input.checked) {
            dispatch(setUsers(formValue))
        }
        else {
            dispatch(removeUser(formValue))
        }
    }

    return (
        
            <div className='bg-yellow-500 min-h-screen flex justify-center items-center'>
                <div className='bg-white w-6/12 p-6 shadow-lg rounded-2xl'>
                    <h1 className='text-indigo-600 font-bold text-center text-4xl mb-8'>Login</h1>
                    <div>
                        <form className='space-y-4' onSubmit={login}>
                            <div className='flex flex-col'>
                                <label className='text-yellow-500 font-bold text-lg mb-1'>Username:</label>
                                <input
                                    type="text"
                                    placeholder='Guru'
                                    name='name'
                                    value={formValue.name}
                                    className='border border-indigo-300 p-2 rounded-[10px] shadow-lg'
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-yellow-500 font-bold text-lg mb-1'>Email:</label>
                                <input
                                    type="email"
                                    placeholder='example@gmail.com'
                                    name='email'
                                    className='border border-indigo-300 p-2 rounded-[10px] shadow-lg'
                                    value={formValue.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-yellow-500 font-bold text-lg mb-1'>PhoneNo:</label>
                                <input
                                    type="number"
                                    placeholder='+91 9999999999'
                                    className='border border-indigo-300 p-2 rounded-[10px] shadow-lg'
                                    name='phone'
                                    value={formValue.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-yellow-500 font-bold text-lg mb-1'>Password:</label>
                                <input
                                    type="password"
                                    placeholder='******'
                                    name='password'
                                    className='border border-indigo-300 p-2 rounded-[10px] shadow-lg'
                                    value={formValue.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className=''>
                                <input
                                    type="checkbox"
                                    onChange={handleCheckBox}
                                    checked={loginSlice ? true : false}
                                    className='border border-indigo-300 p-2 mr-2 rounded-[10px] shadow-lg '
                                />
                                <label className='text-yellow-500 font-bold text-lg mb-1'
                                    
                                >Remember Me!</label>
                            </div>
                            <button className='bg-indigo-500 text-white p-2 rounded-[10px] font-bold w-full text-xl hover:bg-blue-400 transition-all duration-500'>
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Login