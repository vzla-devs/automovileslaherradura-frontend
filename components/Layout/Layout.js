import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between">
      <header className="w-full h-[80px] bg-[#00378a]"></header>
      <div className="p-4">{children}</div>

      <footer className="w-full h-[150px] bg-[#00378a] opacity-90">
        footer
      </footer>
    </div>
  );
};

export default Layout;
