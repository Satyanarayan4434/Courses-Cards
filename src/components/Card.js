import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  let courseId = props.course.id;
  let courseImg = props.course.image.url;
  let courseTitle = props.course.title;
  let description = props.course.description;
  let newDescription = `${description.substring(0, 130)}....`;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  const [icon, setIcon] = useState(false);

  let clickHandler = () => {
    if (likedCourses.includes(courseId)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== courseId));
      toast.warning("Unliked Successfully");
      setIcon(false)
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([courseId]);
      } else {
        setLikedCourses((prev) => [...prev, courseId]);
      }
      toast.success("Liked Successfully");
      setIcon(true);
    }
  };

  return (
    <div className="h-[23rem] w-[18rem] relative border bg-slate-300 rounded-md">
      <img
        src={courseImg}
        alt={props.course.image.alt}
        className="mb-3 rounded-md"
      />
      <button
        className="absolute right-4 top-[41%] border p-1 rounded-full bg-white"
        onClick={clickHandler}
      >
      {icon?(<FcLike fontSize="1.75rem" />):(<FcLikePlaceholder fontSize="1.75rem"/>)}        
      </button>
      <h1 className="p-2 font-serif font-bold">{courseTitle}</h1>
      <p className="p-2 font-mono">{newDescription}</p>
    </div>
  );
}

export default Card;
