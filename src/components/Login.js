import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Login = () => {

  const { authenticated, setAuthenticated } = useAuth();
  const [enteredNumber, setEnteredNumber] = useState(false);
  const navigate = useNavigate();


  const [number, setNumber] = useState('');

  const [otpId, setOtpId] = useState('');


  const sendOTP = (e) => {
    e.preventDefault();
    try {
        //  axios
        // .post('http://13.233.42.101/v1/admin/login', {
        //   mobile: number
        // })
        // .then((response) => {
        //   setOtpId(response.data.data.mobile_otp_id)
        // })
      setEnteredNumber(true)
    } catch (error) {
      console.log(error)
    }

  }
  
  
  // console.log(otpId)


  // for otp form
  
  const [otp, setOTP] = useState(['', '', '', '', '', '']);

  const otpInputRefs = [1, 2, 3, 4, 5, 6].map((ref) => React.createRef());

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOTP(newOtp);

    if (value && index < otpInputRefs.length - 1) {
      otpInputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && index > 0) {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOTP(newOtp);
      otpInputRefs[index - 1].current.focus();
    }
  };


  const VerifyOTP = () => {
    const enteredOTP = otp.join('');
//     try {
//       axios
//      .post('http://13.233.42.101/v1/admin/verify_otp', {
//          mobile_otp_id : otpId,
//          otp : enteredOTP
//      })
//      .then((response) => {
//        console.log('response-------------->', response.data.data.mobile_otp_id)
//        const destructerOtpId = response.data.data.mobile_otp_id
//        setOtpId(destructerOtpId)
//      })

   setEnteredNumber(true)
   setAuthenticated(true);
   navigate('/dashboard')
//  } catch (error) {
//    console.log(error)
//  }
  };


  // useEffect(() => {
  //   otpInputRefs[0].current.focus();
  // }, []);


  return (

   <div className="flex justify-center items-center h-screen">
  {enteredNumber ? (
    <div className="bg-white shadow-md rounded-lg p-4 md:w-1/3">
      <div className="mb-4 text-center">
        <h1 className="text-xl font-semibold">Enter OTP</h1>
        <p className="text-gray-600 text-sm">A 6-digit code has been sent to your mobile number.</p>
      </div>
      <div className="flex justify-center space-x-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            className="w-12 h-12 bg-gray-200 text-2xl font-semibold text-center border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="tel"
            value={digit}
            onChange={(e) => handleOtpChange(e, index)}
            ref={otpInputRefs[index]}
            maxLength={1}
            onKeyDown={(e) => handleBackspace(e, index)}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300"
          type="button"
          onClick={VerifyOTP}
        >
          Verify OTP
        </button>
      </div>
    </div>
  ) : (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={sendOTP}>
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobileNumber"
            className="w-full p-2 border rounded"
            placeholder="Enter Mobile Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            autoComplete="off"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover-bg-blue-600">
          Generate OTP
        </button>
      </form>
    </div>
  )}
</div>



  )
}

export default Login















