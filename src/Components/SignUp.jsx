import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { FormikInput } from "./Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const initialState = {
    fullName: "",
    email: "",
    password: "",
  };

  const schema = Yup.object().shape({
    fullName: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6),
  });

  const handleSignUp = async (values, bag) => {
    try {
      console.log(bag);
      const newUser = await axios.post(
        "https://myeasyKart.codeyogi.io/signup",
        {
          fullName: values.fullName,
          email: values.email,
          password: values.password,
        }
      );

      console.log(newUser);
      navigate("/login");
    } catch (error) {
      setError("inValid credentials");
    }
    // console.log(values);
  };
  return (
    <div className="flex justify-center items-center">
      <Formik
        initialValues={initialState}
        validationSchema={schema}
        validateOnMount={true}
        onSubmit={handleSignUp}
      >
        <Form className="flex gap-y-2 flex-col justify-center">
          <FormikInput
            name="fullName"
            placeholder="full name"
            type="text"
            id="full name"
          />
          <FormikInput
            name="email"
            placeholder="email"
            type="email"
            id="email"
          />
          <FormikInput
            name="password"
            placeholder="password"
            type="password"
            id="password"
          />
          {error && <div className=" text-primary-dark ">{error}</div>}
          <button
            className="text-white bg-primary-dark px-2 py-1 rounded-md font-formal"
            type="submit"
          >
            Sign up
          </button>
        </Form>
        {/* <button>Sign Up</button> */}
      </Formik>
    </div>
  );
};

export default SignUp;
