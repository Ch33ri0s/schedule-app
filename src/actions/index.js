import { FETCH_COURSES } from './types';

function fetchCourses() {
  return {
    type: FETCH_COURSES,
    payload: [
      {
        title: "Up and Running with Redis",
        description: "In this course you'll learn how to work with the efficient Redis database to manage key / value relationships."
      },
      {
        title: "HTML/CSS Bootcamp",
        description: "Learn HTML5 and CSS3 from scratch, starting with the basics and finishing by building five projects from scratch."
      },
      {
          title: "UX for Developers",
          description: "This User Experience (UX) course examines how to develop a system for approaching application development and enhancing the experience for users."
      }
    ]
  }
}