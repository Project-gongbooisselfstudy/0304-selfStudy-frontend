import React, { useRef } from 'react'
import { useForm } from "react-hook-form";
import './Join.css';


function Join() {

  const { register, handleSubmit, watch, errors } = useForm();
  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log('data', data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>이름</label>
      <input
        name="name"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.name && errors.name.type === "required"
        && <p> This name field is required</p>}
      {errors.name && errors.name.type === "maxLength"
        && <p> Your input exceed maximum length</p>}

      <label>닉네임</label>
      <input
        name="name"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.name && errors.name.type === "required"
        && <p> This name field is required</p>}
      {errors.name && errors.name.type === "maxLength"
        && <p> Your input exceed maximum length</p>}

<label>ID</label>
      <input
        name="id"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.name && errors.name.type === "required"
        && <p> This name field is required</p>}
      {errors.name && errors.name.type === "maxLength"
        && <p> Your input exceed maximum length</p>}

      <label>Password</label>
      <input
        name="password"
        type="password"
        ref={register({ required: true, minLength: 6 })}
      />
      {errors.password && errors.password.type === "required"
        && <p> This name field is required</p>}
      {errors.password && errors.password.type === "minLength"
        && <p> Password must have at least 6 characters</p>}

      <label>Password Confirm</label>
      <input
        type="password"
        name="password_confirm"
        ref={register({
          required: true,
          validate: (value) =>
            value === password.current
        })}
      />
      {errors.password_confirm && errors.password_confirm.type === "required"
        && <p> This password confirm field is required</p>}
      {errors.password_confirm && errors.password_confirm.type === "validate"
        && <p>The passwords do not match</p>}

      <input type="submit"
        style={{ marginTop: '40px' }}
      />

    </form>
  )
}

export default Join