import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';






function Otp() {



  const {authenticated, setAuthenticated} = useAuth();

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

  const handleSubmit = (e) => {
      e.preventDefault();
    const enteredOTP = otp.join('');
    console.log('Verifying OTP:', enteredOTP);
      setAuthenticated(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
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
            />
          ))}
        </div>
        <div className="text-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300"
            type="button"
            onClick={handleSubmit}
          >
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Otp;
