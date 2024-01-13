import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        if(likedCourses.includes(course.id))
        {
            setLikedCourses( (prev) => prev.filter( (cid) => (cid !== course.id) ) );
            toast.warning("Like Removed");
        }
        else
        {
            if(likedCourses.length === 0)
            {
                setLikedCourses([course.id]);
            }
            else
            {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully")
        }
    }

    return (
        <div className="w-[300px] bg-gray-700 rounded-md overflow-hidden text-white bg-opacity-80 shadow-[10px_12px_15px_3px_#1a202c]">
            <div className="relative">
                <img src={course.image.url}/>

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-15px] grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                    </button>
                </div>
            </div>

            <div className="p-4">
                <p className=" font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2">
                        {
                            course.description.length > 100 ?
                            (course.description.substr(0,120)) + "..." :
                            (course.description)

                        }
                </p>
            </div>
        </div>
    )
}

export default Card