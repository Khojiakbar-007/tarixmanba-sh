import React from "react";

interface IMainBtn {
     title: string;
}
const MainButton: React.FC<IMainBtn> = ({ title }) => {
     return (
          <button
               style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "17px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    padding: "18px 28px",
                    background: "#A20025",
                    border: "none",
                    outline: "none",
                    color: "#fff",
                    textTransform: "uppercase",
               }}
          >
               {title}
          </button>
     );
};

export default MainButton;
