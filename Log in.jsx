import { useState } from "react";
import Form from "../Components/Form/Form";
import { GoogleBtn, FbBtn } from "../Components/Buttons/VerButton";

function Login() {

  // const onSubmitHandler = (form, callback) => {
  //   console.log(form);
  // };


  return (
    <div className="grid grid-cols-2 gap-12 px-52 h-screen justify-center content-start pt-24">
      <div className="flex flex-col gap-6">
        <Form
          title={"Login"}
          formArr={[
            {
              label: "Email",
              name: "email",
              type: "text",
            },
            {
              label: "Password",
              name: "password",
              type: "password",
            },
          ]}
          subitBtn={"Login"}
          onSubmit={onSubmitHandler}
          redirect={{
            label: "Don't have an account?",
            link: {
              label: "Register",
              to: "/signup",
            },
          }}
        />
        <GoogleBtn>Sign Up with Google</GoogleBtn>
        <FbBtn>Sign Up with Facebook</FbBtn>
      </div>
      <div className="">
        <img
          src="https://i.pinimg.com/564x/89/d9/8d/89d98d4048d9700df7dda17fdb4c073a.jpg"
          alt="Event"
          className="rounded-lg"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default Login;
