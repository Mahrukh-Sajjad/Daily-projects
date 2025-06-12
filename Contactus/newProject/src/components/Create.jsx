import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import "./Create.css";

const Create = (props) => {
  const message = props.message;
  const setmessage = props.setmessage;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    data.id = nanoid();

    const copy = [...message];
    copy.push(data);
    setmessage(copy);
    toast.success("Message sent");
    reset();
  };

  console.log(errors);
  return (
    <div className="Wrapper">
      <div className="image">
        <img
          src="https://plus.unsplash.com/premium_photo-1682309572625-791e25352998?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          type="text"
          {...register("name", { required: "title can't be empty" })}
          placeholder="Name"
        />
        <small> {errors?.name?.message}</small>
        <br />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Email"
          {...register("email", { required: "plz enter your email" })}
        />
        <small> {errors?.email?.message}</small>
        <br />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter message"
          {...register("message", { required: "Plz enter message" })}
        />
        <small>{errors?.message?.message}</small>
        <br />
        <br />
        <br />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Create;
