import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      className={` rounded-[10px] py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] ${styles} text-primary outline-none`}
      type="button"
    >
      Get Started
    </button>
  );
};

export default Button;
