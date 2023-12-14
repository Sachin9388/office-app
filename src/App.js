import "./App.css";
import React, {useState} from 'react';
import Navbar from "./Components/Navbar";
// import Navs from "./Components/Navs";
import TextArea from "./Components/TextArea";
// import About from "./Components/About";
// import Abt from "./Components/Abt";
import Alert from "./Components/Alert";
// import { BrowserRouter, createBrowserRouter } from "react-router-dom";

function App() {
  // const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  // const app = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Navbar />,
  //     children: [
  //       {
  //         path: "/about",
  //         element: <About/>,
  //       },
  //       {
  //         path: "/navs",
  //         element: <Navs/>,
  //       },
  //       {
  //         path: "/abt",
  //         element: <Abt/>,
  //       },
  //     ],
  //   },
  // ]);


  return (
    <>
    <Navbar  title="DASHBOARD" /*mode={mode}  /*use The props */  />   
    <Alert alert={alert}/>
    {/* <Navs title="DASHBOARD"/> */}
    <div className="container text-center mt-4 text-4xl">
    <TextArea showAlert={showAlert} heading="Enter The Text Below"/>
    </div>
    {/* <About/> */}
    {/* <Abt/> */}
    </>
  );
}

export default App;
