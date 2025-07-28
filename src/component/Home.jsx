import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-sans px-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">
                <h1 className="font-bold text-4xl mb-4 tracking-wide text-purple-100 drop-shadow">
                    Password Manager
                </h1>
                <p className="text-lg text-purple-200 mb-8">
                    Securely store, manage, and access all your passwords in one place.<br />
                    Your privacy and security are our top priorities.
                </p>
                <NavLink
                    to="/add-passwords"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold text-lg shadow-md hover:from-purple-600 hover:to-purple-800 transition"
                >
                    Get Started
                </NavLink>
            </div>
            <footer className="mt-12 text-purple-200 text-sm">
                &copy; {new Date().getFullYear()} Password Manager. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;