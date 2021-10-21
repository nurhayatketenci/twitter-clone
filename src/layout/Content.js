import React, { useEffect, useState } from "react";
import { PopulerIcon } from "../icons/Icon";
import TweetBox from "../components/TweetBox";
import Divider from "../components/Divider";
import db from "../Firebase";
import FeedList from "../components/FeedList";
const Content = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    db.collection("feed")
      .orderBy("timestap", "desc")
      .onSnapshot((snapshot) => {
        setTweets(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <main className="flex-1 bg-white flex flex-col border-r border-l border-gray-extraLight">
      <header className=" sticky top-0 z-10 bg-white flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex px-4 py-3 space-x-4">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQF8cMLLE4PCXw/profile-displayphoto-shrink_800_800/0/1628420211513?e=1639008000&v=beta&t=V0UJxHoeEjLg8gc19mgOKa2UyIoEJlx9EJMkjixgxgQ"
          alt="Profile/"
          className="w-11 h-11 rounded-full transition-colors duration-200"
        />
        <TweetBox />
      </div>
      <Divider />
      <FeedList tweets={tweets} />
    </main>
  );
};

export default Content;
