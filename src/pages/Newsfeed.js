import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Post from "../components/Post";
import posts from "../data/posts";

export default function Newsfeed() {
  //navigate hook - React Router
  const navigate = useNavigate();

  //State hooks
  const [comment, setComment] = useState("");
  const [selectedImage, setSelectedImage] = useState(); //Not in use - images can't be directly stored in localStorage
  const [thread, setThread] = useState(posts.samplePosts); //Need to handle edge case on server startup

  //Side effect hooks

  //Get thread from localStorage
  useEffect(() => {
    const newThread = JSON.parse(localStorage.getItem("thread"));
    if (thread) {
      setThread(newThread);
      // getCurrentTime();
    }
  }, []);

  //Save thread to localStorage whenever array is updated
  useEffect(() => {
    localStorage.setItem("thread", JSON.stringify(thread)); //Converts JS object to JSON string
    setComment("");
  }, [thread]);

  //Helper Functions

  //Display user inputted text
  const updateComment = (event) => {
    setComment(event.target.value);
  };

  //Handle image upload change - Not in use
  const imageUploadHandler = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  //Get timestamp for post
  const getCurrentTime = () => {
    const postTime = new Date();
    const currentYear = postTime.getFullYear();
    const currentMonth = postTime.getMonth() + 1; //January listed as 0
    const currentDay = postTime.getDate();
    const currentHour = postTime.getHours();
    const currentMinute = postTime.getMinutes();
    const currentSeconds = postTime.getSeconds();
    const currentTime = `${currentMonth} / ${currentDay} / ${currentYear} ${currentHour}:${currentMinute}:${currentSeconds}`;

    return currentTime;
  };

  //Submit text to array
  const addPost = (event) => {
    event.preventDefault(); //Prevents full page refresh
    setThread((prevThread) => [
      ...prevThread,
      {
        name: JSON.parse(localStorage.getItem("storedUsername")), //converts JSON string to JS object
        content: comment,
        image: "image placeholder",
        timestamp: getCurrentTime(),
        postNumber: prevThread.length, //Starts at 0
        topicNumber: "1", //Only 1 topic used as newsfeed
      },
    ]);
  };

  //localStorage Testing Only - Clears localStorage
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  //Imported array
  const commentThread = posts.samplePosts;

  //Display posts from array data
  const postArr = thread.map((post) => (
    <Post
      name={post.name}
      content={post.content}
      image={post.image}
      timestamp={post.timestamp}
      postNumber={post.postNumber}
    />
  ));

  return (
    <div className="modal__content">
      {[postArr]}
      <form style={{ width: "100%" }}>
        <textarea
          style={{ width: "90%" }}
          rows={1}
          onChange={updateComment}
          onClick={() => {
            console.log("Clicked!");
          }}
          placeholder="What's on your mind?"
          value={comment}
        />
        <br></br>
        <input type="submit" value="Submit post" onClick={addPost} />
{/* 
        <br></br>
        <input 
          type="file"
          name="file"
          onChange={imageUploadHandler} //Not in use - localStorage only takes in strings
        /> */}
      </form>

      <button
        className="access-button login__field"
        onClick={() => {
          navigate("/"); //Navigates back to login page
        }}
      >
        Exit plz
      </button>
     
    </div>
  );
}
