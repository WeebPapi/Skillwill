import React, { useContext } from "react";
import { LangContext } from ".";
import "./App.css";

const LanguageToggle = () => {
  const context = useContext(LangContext);

  return (
    <div
      className="toggle"
      onClick={() => {
        if (context.lang === "en") context.setLang("ka");
        else context.setLang("en");
      }}
    >
      {context.lang === "en" ? (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4pqQjfMWVDUVWX50GXeP4YK1OzQKgFB8FQ&s"
          alt="uk-flag"
        />
      ) : (
        <img
          src="https://cdn-icons-png.flaticon.com/512/9906/9906532.png"
          alt="uk-flag"
        />
      )}
    </div>
  );
};

export default LanguageToggle;
