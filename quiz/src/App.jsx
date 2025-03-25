import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Play from "./Play";
import Quiz from "./Quiz";
import Signup from "./Signup";
import Login from "./Login";
import Streams from "./Stream";
import Events from "./Events";
import Sports from "./Sports";


function App() {
  return (
    <>
      {/* <Layout/> */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
          <Route path='/streams' element={<Streams/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/play' element={<Play/>}/>
          <Route path='/sports' element={<Sports/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
