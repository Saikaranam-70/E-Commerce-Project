import React, { useState } from 'react';
import './SignUp.css'; 
import { link } from '../../roteUrl/Link';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });


  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting1, setIsSubmitting1] = useState(false);
  const [message1, setMessage1] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const requestForReSendingEmailVerivication = async(e)=>{
    e.preventDefault();
    setIsSubmitting1(true)

    const responce = await fetch(`${link}/user/resend-verification-token/${email}`)
    const result = await responce.json();
    setMessage(result.message)
    setIsSubmitting1(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const response = await fetch('http://localhost:8080/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setMessage1(result.message)
    console.log(result);
    console.log(message)

    setIsSubmitting(false);
  };

  return (
    <div className="signup-container">
    
      <form className="signup-form" onSubmit={handleSubmit}>
      
        <h2 className="signup-title">Sign Up</h2>
        {message && <p className='responce-message'>{message}</p>}
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          /> 
        </div>
        <div className="input-group">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span className="password-toggle" onClick={toggleShowPassword}>
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={`submit-btn ${isSubmitting ? 'loading' : ''}`}>
          {isSubmitting ? 'Submitting...' : 'Sign Up'}
        </button>
      </form>
      <form className='signup-form' onSubmit={requestForReSendingEmailVerivication}>
      <h2 className="signup-title">Resend Verification Email</h2>
      {message1 && <p className='responce-message'>{message1}</p>}
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          /> 
          </div>
          <button type="submit" className={`submit-btn ${isSubmitting ? 'loading' : ''}`}>
          {isSubmitting1 ? 'Sending...' : 'Resend Verification Email'}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
