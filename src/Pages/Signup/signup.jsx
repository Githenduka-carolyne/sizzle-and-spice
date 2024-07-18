import React from 'react';
import { useFormik } from "formik";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './signup.css';

const Signup = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
  const handleSubmit = async (formValues) => {
    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();
      console.log(data);

      if (data.success === true) {
        setError("User created successfully");
        navigate("/Login");
      } else {
        console.log("Error from server:", data.message);
        setError(data.message);
      }
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
  };
   const formik = useFormik({
     initialValues: {
       firstName: "",
       lastName: "",
       emailAddress: "",
       phoneNumber: "",
       password: "",
     },
     // validate,
     onSubmit: handleSubmit,
   });
  return (
    // <section className="signup">
    //   <p className="signup-title">signup</p>
    // </section>
    <section className="signup-section">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-container">
          <div className="form1-side">
            <div className="signin-heading">
              <h2>Sign Up</h2>
            </div>
            <div className="forms-holder">
              <div className="form-details">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {/* {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null} */}
              </div>

              <div className="form-details">
                <label htmlFor="lastName">Last Name</label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />

                {/* {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null} */}
              </div>

              <div className="form-details">
                <label htmlFor="emailAddress">Email Address</label>

                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="emailAddress"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emailAddress}
                />

                {/* {formik.touched.emailAddress && formik.errors.emailAddress ? (
                <div>{formik.errors.emailAddress}</div>
              ) : null} */}
              </div>

              <div className="form-details">
                <label htmlFor="phoneNumber">Phone Number</label>

                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                />

                {/* {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div>{formik.errors.phoneNumber}</div>
              ) : null} */}
              </div>

              <div className="form-details">
                <label htmlFor="password">Password</label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />

                {/* {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null} */}
              </div>
              <button type="submit" className="submit">
                Log In
              </button>
              <div className="account">
                Have an account? <Link to="/Login">Log in</Link>
              </div>
              <p>{error}</p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Signup;