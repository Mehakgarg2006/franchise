import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [obj, setObj] = useState({
    uid: "",
    pwd: ""
    
  });
  const navigate = useNavigate();

  function doUpdate(event) {
    const { name, value } = event.target;
    setObj({ ...obj, [name]: value });
  }

  async function doSave() {
    let url = "http://localhost:2006/franchisees/loginuser";
   

    try {
      let resp = await axios.post(url, obj, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
      if (resp.data.status === true) {
        alert(resp.data.msg);
        localStorage.setItem('uid', obj.uid);
        navigate('/big');
        
      } else {
        alert(resp.data.msg);
      }
    } catch (error) {
  
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    }
  }

  return (
    <div className="bg-black dark:bg-gray-800 h-screen overflow-hidden flex items-center justify-center">
    <div className="bg-white lg:w-6/12 md:w-7/12 w-8/12 shadow-3xl rounded-xl">
      <div className="bg-gray-800 shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
        </svg>
      </div>
      <form className="p-12 md:p-24">
        <div className="flex items-center text-lg mb-6 md:mb-8">
          <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
            <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
          </svg>
          <input
            type="text"
            name="uid"
            onChange={doUpdate}
            id="username"
            className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="Username"
            required
          />
        </div>
        <div className="flex items-center text-lg mb-6 md:mb-8">
          <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
            <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
          </svg>
          <input
            type="password"
            name="pwd"
            onChange={doUpdate}
            id="password"
            className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="Password"
            required
          />
        </div>
        <input
          type="button"
          value="Login"
          onClick={doSave}
          className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded cursor-pointer"
        />
      </form>
    </div>
  </div>
  )
}
export default Login;




// import React, { useState } from 'react';

// const Login = () => {
//     const [values, setValues] = useState({
//         uid: '',
//         pwd: ''
//     });
//     const [errors, setErrors] = useState({});
//     const [isLoading, setIsLoading] = useState(false);

//     const doUpdate = (e) => {
//         const { name, value } = e.target;
//         setValues({
//             ...values,
//             [name]: value
//         });
//         // Clear errors when user starts typing
//         if (errors[name]) {
//             setErrors({
//                 ...errors,
//                 [name]: ''
//             });
//         }
//     };

//     const validateForm = () => {
//         let tempErrors = {};
//         if (!values.email) {
//             tempErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//             tempErrors.email = 'Email is invalid';
//         }
//         if (!values.password) {
//             tempErrors.password = 'Password is required';
//         } else if (values.password.length < 6) {
//             tempErrors.password = 'Password must be at least 6 characters';
//         }
//         setErrors(tempErrors);
//         return Object.keys(tempErrors).length === 0;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             setIsLoading(true);
//             // Simulate API call
//             setTimeout(() => {
//                 console.log('Form submitted:', values);
//                 setIsLoading(false);
//                 // Here you would typically make your API call
//                 // and handle the response
//             }, 1000);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
//                 <div>
//                     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//                         Franchise Login
//                     </h2>
//                 </div>
//                 <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                     <div className="rounded-md shadow-sm space-y-4">
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                                 Email address
//                             </label>
//                             <input
//                                 id="email"
//                                 name="uid"
//                                 type="email"
//                                 autoComplete="email"
//                                 required
//                                 value={values.email}
//                                 onChange={doUpdate}
//                                 className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
//                                     } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
//                                 placeholder="Enter your email"
//                             />
//                             {errors.email && (
//                                 <p className="mt-2 text-sm text-red-600">{errors.email}</p>
//                             )}
//                         </div>
//                         <div>
//                             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                                 Password
//                             </label>
//                             <input
//                                 id="password"
//                                 name="pwd"
//                                 type="password"
//                                 autoComplete="current-password"
//                                 required
//                                 value={values.password}
//                                 onChange={doUpdate}
//                                 className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'
//                                     } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
//                                 placeholder="Enter your password"
//                             />
//                             {errors.password && (
//                                 <p className="mt-2 text-sm text-red-600">{errors.password}</p>
//                             )}
//                         </div>
//                     </div>

                   

//                     <div>
//                         <button
//                             type="submit"
//                             disabled={isLoading}
//                             className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white 
//                                 ${isLoading
//                                     ? 'bg-blue-400 cursor-not-allowed'
//                                     : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
//                                 }`}
//                         >
//                             {isLoading ? (
//                                 <span className="flex items-center">
//                                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                     </svg>
//                                     Logging in...
//                                 </span>
//                             ) : (
//                                 'Sign in'
//                             )}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;