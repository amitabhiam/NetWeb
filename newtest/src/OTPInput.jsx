import React, { useState, useRef } from 'react';

const OTPInput = () => {
  const length = 6; // Length of OTP

  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (index, event) => {
    const value = event.target.value;

    if (!isNaN(value) && value !== '') {
      const otpCopy = [...otp];
      otpCopy[index] = value;
      setOtp(otpCopy);

      if (index < length - 1 && value !== '') {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace') {
      const otpCopy = [...otp];
      otpCopy[index] = '';
      setOtp(otpCopy);

      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(input) => inputRefs.current[index] = input}
          style={{ width: '40px', marginRight: '5px', textAlign: 'center' }}
        />
      ))}
    </div>
  );
};

export default OTPInput;