import React from "react";

const SideLink = ({ name, Icon, active, handleMenuItemClick }) => {
  const isActive = active === name;
  return (
    <li className="group" onClick={() => handleMenuItemClick(name)}>
      <a
        href={name.toLowerCase()}
        className="cursor-pointer block  text-xl`pointer-events-none"
      >
        <div className="inline-block">
          <div
            className={`flex items-center hover:bg-primary-light hover:text-primary-base rounded-full pl-3 pr-8 py-3 
          
          ${isActive ? "text-primary-base" : ""}
          `}
          >
            <Icon />
            <span className="ml-4 font-bold">{name}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SideLink;
