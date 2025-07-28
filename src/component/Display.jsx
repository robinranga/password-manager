import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setpswd } from "../app/features/paswds/pswds.js";
import { redirect, useNavigate } from "react-router-dom";
import { setform } from "../app/features/paswds/form.js";
import { ToastContainer, toast } from "react-toastify";

const Display = () => {
  const pswdArray = useSelector((state) => state.counter.value);
  const form = useSelector((state) => state.form.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast("Copied to Clipboard", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleDel = (key) => {
    const updatedArr = [...pswdArray];
    updatedArr.splice(key, 1);
    dispatch(setpswd(updatedArr));
    localStorage.setItem("data", JSON.stringify(updatedArr));
    toast("Password Deleted", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleEdit = (key) => {
    handleDel(key);
    navigate("/add-passwords#site");
    const item = pswdArray[key];
    dispatch(setform(item));
  };

  useEffect(() => {
    let pswds = localStorage.getItem("data");
    if (pswds) {
      pswds = JSON.parse(pswds);
      dispatch(setpswd(pswds));
    } else {
      dispatch(setpswd([]));
    }
  }, []);

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
      <div className=" mt-30 w-[80vw] mx-auto h-95 z-10">
        <div className="text-[#e4dfdf] font-bold text-2xl cursor-auto ">
          Your Passwords
        </div>
        {pswdArray !== undefined && pswdArray.length === 0 ? (
          <div className="text-[#e4dfdf] mt-5 pl-4 cursor-default">
            No Passwords to Show
          </div>
        ) : (
          <>
            <div className="h-80 overflow-y-auto">
              <table className="min-w-full mt-8  cursor-default  bg-purple-950 rounded-lg shadow-lg overflow-y-scroll-scroll">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-purple-200 uppercase bg-purple-800">
                      Site
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-purple-200 uppercase bg-purple-800">
                      Username
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-purple-200 uppercase bg-purple-800">
                      Password
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-bold text-purple-200 uppercase bg-purple-800">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="overflow-y-scroll max-h-10 mt-5">
                  {pswdArray !== undefined &&
                    pswdArray.map((data, key) => {
                      return (
                        <tr
                          key={key}
                          className="hover:bg-purple-900  transition"
                        >
                          <td className="px-6 py-4   whitespace-nowrap text-purple-100">
                            <div className="flex items-center">
                              <span className="cursor-pointer hover:text-blue-400">
                                <a
                                  href={data.site.includes('http') ? data.site : "https://" + data.site}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {data.site}
                                </a>
                              </span>
                              <lord-icon
                                src="https://cdn.lordicon.com/lcvlsnre.json"
                                trigger="hover"
                                stroke="bold"
                                colors="primary:#ffffff,secondary:#ffffff"
                                className="scale-75 ml-3 cursor-pointer"
                                onClick={() => copyText(data.site)}
                              ></lord-icon>
                            </div>
                          </td>
                          <td className="px-6 py-4    whitespace-nowrap text-purple-100">
                            <div className="flex items-center">
                              {data.username}
                              <lord-icon
                                src="https://cdn.lordicon.com/lcvlsnre.json"
                                trigger="hover"
                                stroke="bold"
                                colors="primary:#ffffff,secondary:#ffffff"
                                className="scale-75 ml-3 cursor-pointer"
                                onClick={() => copyText(data.username)}
                              ></lord-icon>
                            </div>
                          </td>
                          <td className="px-6   py-4 whitespace-nowrap text-purple-100">
                            <div className="flex items-center">
                              {data.password}
                              <lord-icon
                                src="https://cdn.lordicon.com/lcvlsnre.json"
                                trigger="hover"
                                stroke="bold"
                                colors="primary:#ffffff,secondary:#ffffff"
                                className="scale-75 ml-3 cursor-pointer"
                                onClick={() => copyText(data.password)}
                              ></lord-icon>
                            </div>
                          </td>
                          <td className="px-6 py-4 flex justify-center gap-2">
                            <lord-icon
                              src="https://cdn.lordicon.com/exymduqj.json"
                              trigger="hover"
                              stroke="bold"
                              className="scale-75 cursor-pointer"
                              state="hover-line"
                              colors="primary:#ffffff,secondary:#ffffff"
                              onClick={() => {
                                handleEdit(key);
                              }}
                            ></lord-icon>
                            <lord-icon
                              src="https://cdn.lordicon.com/jzinekkv.json"
                              trigger="hover"
                              stroke="bold"
                              className="scale-75 cursor-pointer"
                              colors="primary:#ffffff,secondary:#ffffff"
                              onClick={() => {
                                handleDel(key);
                              }}
                            ></lord-icon>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Display;
