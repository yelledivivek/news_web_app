import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/auth/authAction';

function Login(props) {
  const form = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector(state => state.login);
  const history = useNavigate()
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(loginUser(username,password)).then(() =>{
        history('/')
        // window.location.reload().catch(() => {
        //     setLoading(false)
        // })
    })
  };
  if (isLoggedIn) {
    return <Link to="/" />;
  }

  return (
    <div>
        <div className='container mx-auto mt-40 block rounded-lg shadow-lg max-w-md p-6 bg-white'>
            <form className='' onSubmit={handleLogin} ref={form}>
                <div className='mb-6'>
                    <label htmlFor='username' className='inline-block mb-2 text-gray-700'>User Name</label>
                    <input type='text' className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' name='username' value={username} onChange={onChangeUsername} placeholder='User Name'/>
                </div>
                <div className='mb-6'>
                    <label htmlFor='password' className='inline-block mb-2 text-gray-700'>Password</label>
                    <input type='password' className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' name='password' value={password} onChange={onChangePassword} placeholder='Password' />
                </div>
                    <button className='w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' disabled={loading}>Login</button>
                    <p className=' text-gray-800 mt-6 text-center'>
                    Not a member? <Link to='/signup' className='text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out'>Register</Link>
                    </p>
            </form>
        </div>
    </div>
  )
}

export default Login