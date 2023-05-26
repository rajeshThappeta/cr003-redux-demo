import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();

  let { register, handleSubmit, formState: { errors } } = useForm({
                                                                      defaultValues: {
                                                                        username: "",
                                                                        password: "",
                                                                        email: "",
                                                                        address: {
                                                                          city: "",
                                                                          street: "",
                                                                          pincode: "",
                                                                        },
                                                                    },
                                                                  });

  async function createUser(userObj) {
    try {
      //save in local API
      let res = await axios.post("http://localhost:4000/users", userObj);
      if (res.status === 201) {
        //navigate to login
        navigate("/login");
      }
    } catch (err) {
      console.log("err in user registration", err);
    }
  }

  return (
    <div>
      {/* user registration form */}
      <form onSubmit={handleSubmit(createUser)}>
        {/* username */}
        <input
          type="text"
          {...register("username")}
          className="form-control mb-3"
          placeholder="Username"
        />
        {/* password */}
        <input
          type="password"
          {...register("password")}
          className="form-control mb-3"
          placeholder="Password"
        />
        {/* email */}
        <input
          type="email"
          {...register("email")}
          className="form-control mb-3"
          placeholder="Email"
        />
        <span className="text-secondary fw-bold">Address</span>
        {/* city */}
        <input
          type="text"
          {...register("address.city")}
          className="form-control mb-3"
          placeholder="City"
        />
        {/* street */}
        <input
          type="text"
          {...register("address.street")}
          className="form-control mb-3"
          placeholder="Sreet"
        />
        {/* pincode */}
        <input
          type="text"
          {...register("address.pincode")}
          className="form-control mb-3"
          placeholder="pincode"
        />
        {/* submit button */}
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
