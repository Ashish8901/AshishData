import React, { useState ,useEffect} from "react";
import { NavLink, useHistory } from "react-router-dom";





const getLocalItems = () => {
  const list = localStorage.getItem('email');

  if(list){
      return JSON.parse(localStorage.getItem('email'))
  }else{
      return [];
  }
}

const getLocalItemsTwo = () => {
  const list = localStorage.getItem('password');

  if(list){
      return JSON.parse(localStorage.getItem('password'))
  }else{
      return [];
  }
}


const Login = () => {

  const [email,setEmail]=useState(getLocalItems())
  const [password,setPassword]=useState(getLocalItemsTwo())

 let history= useHistory();

 useEffect(() => {
   localStorage.setItem("email",JSON.stringify(email))
 }, [email])

 useEffect(() => {
  localStorage.setItem("password",JSON.stringify(password))
}, [password])



  const loginUser = async (e) => {

    e.preventDefault();


    const res = await fetch('/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("User not Registered");
    } else if (res.status === 420){
      window.alert("Please fill the fields")
    }else
    {
      if(data.token){
        localStorage.setItem("token", data.token);
        window.alert('LOGIN SUCCESSFULL')
        history.push('/Userpost')
    }
  }
   
}

  






return (
  <>
    <section className="vh-100">
      <div>
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-3">
              <img
                src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
                className="img-fluid"
                alt="Sample img"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form method="POST">
                {/* <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                      <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                      <button type="button" className="btn btn-primary btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i> onClick="href"
                      </button>
          
                      <button type="button" className="btn btn-primary btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                      </button>
          
                      <button type="button" className="btn btn-primary btn-floating mx-1">
                        <i className="fab fa-linkedin-in"></i>
                      </button>
                    </div> */}

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">
                    Please Fill your Details
                  </p>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    name="email" value={email} onChange={(e) => setEmail(e.target.value)}

                    placeholder="Enter a valid email address"
                  />
                  <label className="form-label" htmlFor="form3Example3"></label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                  />
                  <label className="form-label" htmlFor="form3Example4"></label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="button" className="btn btn-primary btn-lg" onClick={loginUser}     >
                    Login
                  </button>

                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <NavLink to="/Signup" className="link-danger">
                      Register
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
 </div>
    </section>
  </>
);
                  }

    

export default Login;
