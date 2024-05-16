import React, { useState } from "react";
import Spinner from "../components/spinner/Spinner";

const Input = () => {
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    setLoading(true);
  };

  return (
    <>
      {loading && <Spinner />}
      <form className="form-design max-w-[500px]">
        <label htmlFor="">ইমেইল অথবা মোবাইল নং</label>
        <input type="text" />
        <label htmlFor="">পাসওয়ার্ড</label>
        <input type="text" />
      </form>
      <button
        className="button-main font-english font-semibold"
        onClick={() => submit()}
      >
        লগিন
      </button>
    </>
  );
};

export default Input;
