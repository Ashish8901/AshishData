import React ,{ useState } from "react";
import { NavLink} from "react-router-dom";

const Signup = () => {
  // const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password } = user;

    const res = await fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, password }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Email Already Exists");
    } else if(res.status===421){
      window.alert(" Fill the Fields");

      // history.push("/login");
    }else{
      window.alert(" Registration SUccessful");
    }
   
  };

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
                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">
                      Please Fill your Details
                    </p>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="name"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      name="name"
                      value={user.name}
                      onChange={handleInputs}
                      placeholder="Enter your full name"
                    />
                    <label className="form-label" for="form3Example3"></label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="number"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      name="phone"
                      value={user.number}
                      onChange={handleInputs}
                      placeholder="Enter a phone number"
                    />
                    <label className="form-label" for="form3Example3"></label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      name="email"
                      value={user.email}
                      onChange={handleInputs}
                      placeholder="Enter a valid email address"
                    />
                    <label className="form-label" for="form3Example3"></label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      name="password"
                      value={user.password}
                      onChange={handleInputs}
                      placeholder="Enter password"
                    />
                    <label className="form-label" for="form3Example4"></label>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label className="form-check-label" for="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={PostData}
                    >
                      register
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Already have an account?{" "}
                      <NavLink to="/Login" className="link-danger">
                        login
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
};

export default Signup;
