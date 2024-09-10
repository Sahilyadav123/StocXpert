import React, { useState } from 'react';
import '../../index.css'; // Your CSS file

const SignInSignUp = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div>
      <div className={`custom-container mx-auto my-5 ${isRightPanelActive ? 'right-panel-active' : ''}`} id="custom-container-signup">
        <div className="custom-form-container custom-sign-up-container ">
          <form action="#">
            <h1 className="custom-h1">Sign Up</h1>
            <div className="custom-social-container">
              <a href="#" className="custom-social"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
              <a href="#" className="custom-social"><i class="fa fa-google" aria-hidden="true"></i></a>
              <a href="#" className="custom-social"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
            </div>
            <span className="custom-span">or use your email for registration</span>
            <input type="text" className="custom-input" placeholder="Name" />
            <input type="email" className="custom-input" placeholder="Email" />
            <input type="password" className="custom-input" placeholder="Password" />
            <button className="custom-button">Sign Up</button>
          </form>
        </div>

        <div className="custom-form-container custom-sign-in-container">
          <form action="#">
            <h1 className="custom-h1">Sign In</h1>
            <div className="custom-social-container">
              <a href="#" className="custom-social"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
              <a href="#" className="custom-social"><i class="fa fa-google" aria-hidden="true"></i></a>
              <a href="#" className="custom-social"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
            </div>
            <span className="custom-span">or use your email account</span>
            <input type="email" className="custom-input" placeholder="Email" />
            <input type="password" className="custom-input" placeholder="Password" />
            <a href="#" className="custom-a">Forgot your password?</a>
            <button className="custom-button">Sign In</button>
          </form>
        </div>

        <div className="custom-overlay-container">
          <div className="custom-overlay">
            <div className="custom-overlay-panel custom-overlay-left">
              <h1 className="custom-h1">Welcome Back!</h1>
              <p className="custom-p">To stay connected with us, please login with your personal info</p>
              <button className="custom-button custom-ghost" id="SignIn" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="custom-overlay-panel custom-overlay-right">
              <h1 className="custom-h1">Hello, Friend!</h1>
              <p className="custom-p">Enter your personal details and start your journey with us</p>
              <button className="custom-button custom-ghost" id="SignUp" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
