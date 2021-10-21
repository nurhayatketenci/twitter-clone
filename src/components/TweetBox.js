import React, { useState } from "react";
import {
  ImageIcon,
  ScheduleIcon,
  GIFIcon,
  PollIcon,
  EmojiIcon,
} from "../icons/Icon";
import db from "../Firebase";

const TweetBox = () => {
  const [content, setContent] = useState("");
  const sendTweet = () => {
    if (content != "") {
      db.collection("feed").add({
        displayName: "Nurhayat ketenci",
        userName: "@nurktnci",
        content,
        timestap: new Date().toISOString(),
        image:
          "https://media-exp1.licdn.com/dms/image/C5603AQF8cMLLE4PCXw/profile-displayphoto-shrink_800_800/0/1628420211513?e=1639008000&v=beta&t=V0UJxHoeEjLg8gc19mgOKa2UyIoEJlx9EJMkjixgxgQ",
        avatar:
          "https://media-exp1.licdn.com/dms/image/C5603AQF8cMLLE4PCXw/profile-displayphoto-shrink_800_800/0/1628420211513?e=1639008000&v=beta&t=V0UJxHoeEjLg8gc19mgOKa2UyIoEJlx9EJMkjixgxgQ",
      });
      setContent("");
    }
  };
  return (
    <div className="flex flex-col flex-1 mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent "
        placeholder="What's happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div className="flex items-center justify-between">
        <div className="flex -ml-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ImageIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <GIFIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <PollIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>
        </div>
        <button
          className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
