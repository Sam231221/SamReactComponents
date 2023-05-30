import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './layouts/index'

import Home from './pages/Home'
const AutoComplete = React.lazy(() => import("./components/AutoComplete"));
const Tooltip = React.lazy(() => import("./components/Tooltip"));
const Modal = React.lazy(() => import("./components/Modal"));
const Toast = React.lazy(() => import("./components/Toasts"));
const Accordion = React.lazy(() => import("./components/Accordion"));
const Tab= React.lazy(() => import("./components/Tabs"));
const Switch= React.lazy(() => import("./components/Switch"));
const ImageSlider= React.lazy(() => import("./components/Slider/ImageSlider"));

const ImageGallery = React.lazy(() => import("./components/ImageGallery"));
const ImageSlider2 = React.lazy(() => import("./components/Slider/ImageSlider2"));
const Carousel = React.lazy(() => import("./components/Slider/Carousel"));

const Range = React.lazy(() => import("./components/Range"));
const VideoPlayer = React.lazy(() => import("./components/VideoPlayer"));
const DropDown = React.lazy(() => import("./components/DropDown"));
function App() {

  return (
    <>
      <Router>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
            <Route path='/' exact element={<Home />} />
              <Route path={"/AutoComplete"} element={<AutoComplete />}/>
              <Route path={"/Tooltip"} element={<Tooltip />}/>
              <Route path={"/Tab"} element={<Tab />} />
              <Route path={"/Switch"} element={<Switch />} />
              <Route path={"/Modal"} element={<Modal />} />


              <Route path='/Toast' element={<Toast />} />
              <Route path='/Accordion' element={<Accordion />} />
              <Route path='/ImageSlider' element={<ImageSlider />} />
              <Route path='/ImageGallery' element={<ImageGallery />} />

              <Route path='/ImageSlider2' element={<ImageSlider2 />} />
              <Route path='/Carousel' element={<Carousel />} />


              <Route path='/Range' element={<Range/>} />

              <Route path='/VideoPlayer' element={<VideoPlayer/>} />
              <Route path='/DropDown' element={<DropDown/>} />
            </Routes>
          </Suspense>

        </Layout>
      </Router>

    </>
  )
}

export default App
