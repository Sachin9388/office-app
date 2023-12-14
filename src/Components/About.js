import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function About() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btntext, setBtnText] = useState("Enable Dark Mode")

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Light Mode")
    }
    else{
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Dark Mode")
    }
  };

  return (
    <>
      <div className="w-[70%] grid mt-12 ml-40 rounded-xl " style={myStyle}>
        <h1 className="text-4xl font-semibold my-4 ">About Us</h1>
        <Accordion className="border-4 border-black">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader style={myStyle} onClick={() => handleOpen(1)}>
              What is Tailwind?
            </AccordionHeader>
            <AccordionBody
              style={myStyle}
              className="text-gray-900 non-italic text-base font-normal"
            >
              Tailwind CSS is a highly popular and modern utility-first CSS
              framework that streamlines the process of building responsive and
              user-friendly web interfaces. Unlike traditional CSS frameworks
              like Bootstrap or Foundation, Tailwind doesn't offer pre-designed
              components. Instead, it provides low-level utility classes that
              allow you to create custom designs directly in your HTML markup.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader style={myStyle} onClick={() => handleOpen(2)}>
              How to use Tailwind?
            </AccordionHeader>
            <AccordionBody
              style={myStyle}
              className="text-gray-900 non-italic text-base font-normal"
            >
              1. Install Tailwind CSS: First, make sure you have Node.js
              installed on your system. You can install Tailwind CSS using npm
              (Node Package Manager) or Yarn (an alternative package manager for
              Node.js). If you are using npm, open your terminal or command
              prompt and run: Copy code npm install tailwindcss
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader style={myStyle} onClick={() => handleOpen(3)}>
              What can I do with Tailwind?
            </AccordionHeader>
            <AccordionBody
              style={myStyle}
              className="text-gray-900 non-italic text-base font-normal "
            >
              With Tailwind CSS, you can create responsive, modern, and highly
              customized user interfaces for websites and web applications. Here
              are some of the key things you can do with Tailwind:
            </AccordionBody>
          </Accordion>
        </Accordion>
        <button
          type="button"
          onClick={toggleStyle}
          className="content-start bg-blue-500 hover:bg-blue-700 text-white font-light ml-3 text-base mt-3 py-1 mb-4 w-44 mr-48 rounded-lg justify-start"
        >
          {btntext}
        </button>
      </div>
    </>
  );
}
