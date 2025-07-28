import React from "react";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setpswd } from "../app/features/paswds/pswds.js";
import { setform } from "../app/features/paswds/form.js";
import { ToastContainer, toast } from "react-toastify";

const Manager = () => {
  const eye = useRef();
  const password = useRef();
  const pswdArray = useSelector((state) => state.counter.value);
  const form = useSelector((state) => state.form.value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setform({ ...form, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    console.log("Updated pswdArray:", pswdArray);
  }, [pswdArray]);

  const handlebutton = () => {
    if (form.username.length > 3 && form.password.length > 3 && form.site.length > 3) {
      console.log(form);
      dispatch(setpswd([...pswdArray, form]));
      localStorage.setItem("data", JSON.stringify([...pswdArray, form]));
      dispatch(setform({ site: "", username: "", password: "" }));
      toast.success("Password Added", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.warn("Invalid Credentials", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const showpswd = () => {
    if (password.current.value !== "") {
      if (eye.current.src.includes("hide.png")) {
        eye.current.src = "eye.png";
      } else {
        eye.current.src = "hide.png";
      }

      if (password.current.type === "password") {
        password.current.type = "text";
      } else {
        password.current.type = "password";
      }
    }
  };
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="w-[80vw] mx-auto mt-30 flex items-center flex-col z-10">
        <div className="logo cursor-default text-xl font-bold text-[#d0c4c4]">
          <span className="text-green-700 ">&lt;</span>Pass
          <span className="text-green-700">OP/</span>
          <span className="text-green-700 ">&gt;</span>
        </div>
        <h2 className="text-[#d0c4c4] cursor-default">Your own Password Manager</h2>
        <div className="flex flex-col gap-4 mt-5 w-full">
          <input
            type="url"
            id="site"
            name="site"
            value={form.site}
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Type Website URL"
            className="text-[#d0c4c4] border border-[#8c31a0] w-full py-2 px-4 rounded-full "
          />
          <div className="flex gap-3 ">
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Type your Username"
              className="text-[#d0c4c4] border border-[#8c31a0] w-full py-2 px-4 rounded-full"
            />
            <div className="w-full relative ">
              <input
                ref={password}
                type="password"
                name="password"
                value={form.password}
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Type your Password"
                className="text-[#d0c4c4] border border-[#8c31a0] w-full py-2 px-4 rounded-full"
              />
              <img
                ref={eye}
                src="hide.png"
                className="absolute right-5 top-3"
                width={20}
                onClick={showpswd}
                alt=""
              />
            </div>
          </div>
          <button
            className=" hover:border-2 cursor-pointer hover:border-[#b9b6b6]  mt-3 text-[#3b3939] bg-[#2aa42a] w-fit mx-auto flex items-center gap-2 rounded-2xl px-4 py-1 font-semibold text-[18px]"
            onClick={handlebutton}
          >
            Add Password
            <lord-icon
              src="https://cdn.lordicon.com/gzqofmcx.json"
              trigger="hover"
            ></lord-icon>
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
