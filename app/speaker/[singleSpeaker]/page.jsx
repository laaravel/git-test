'use client'

import { useEffect, useState } from "react";


const Speaker = ({ params }) => {
  const [post, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch(`/api/speaker/${params.singleSpeaker}`);
    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(post)

  return (
    <div>
      <h1 className="text-center m-2">{post.schedule}</h1>
      <div className="flex h-[180px] m-5 p-5 border border-solid border-silver bg-white">
        <div className="w-[150px] h-[140px] bg-darkgray rounded-full text-center">
          <span className="flex justify-center items-center mt-12">{post.profile}</span>
        </div>
        <div className="flex items-center flex-wrap w-10/12 p-5">
          <h4 className="userName">{post.name}</h4>
          <div className="lectureDetails">
            {post.lecture}
          </div>
          <div className="userTime">
            this lecture will started at {post.startTime} till {post.endTime}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Speaker;
