import React from "react";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:ng-primary-light cursor-pointer rounded-full py-2 px-4">
      <img
        src="https://media-exp1.licdn.com/dms/image/C5603AQF8cMLLE4PCXw/profile-displayphoto-shrink_800_800/0/1628420211513?e=1639008000&v=beta&t=V0UJxHoeEjLg8gc19mgOKa2UyIoEJlx9EJMkjixgxgQ"
        alt="Profile/"
        className="w-11 h-11 rounded-full transition-colors duration-200"
      ></img>
      <div className="flex flex-col">
        <span className="font-bold text-md text-black">Nurhayat Ketenci..</span>
        <span className="text-sm text-gray-dark">@Nurkki</span>
      </div>
      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
      </div>
    </div>
  );
};

export default UserBox;
