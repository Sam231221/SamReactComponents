import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './layouts';
import Loader from './components/3.Loadings/Loader';
const Modal = React.lazy(() => import('./components/Modal'));

import Home from './pages/Home';
const Avatar = React.lazy(() => import('./components/4.Surfaces/Avatar'));

const AutoComplete = React.lazy(() => import('./pages/Inputs/AutoComplete'));
const Switch = React.lazy(() => import('./pages/Inputs/Switch'));
const Range = React.lazy(() => import('./pages/Inputs/Range'));
const DropDown = React.lazy(() => import('./pages/Inputs/DropDown'));
const Select = React.lazy(() => import('./pages/Inputs/Select'));

const Tooltip = React.lazy(() => import('./pages/DataDisplays/Tooltip'));
const Toast = React.lazy(() => import('./pages/DataDisplays/Toast'));
const Tab = React.lazy(() => import('./pages/DataDisplays/Tab'));

const Accordion = React.lazy(() => import('./components/4.Surfaces/Accordion'));

const ImageSlider = React.lazy(() => import('./pages/Sliders/ImageSlider'));
// const ProductSlider = React.lazy(
//   () => import('./pages/Sliders/ImageSlider/ImageSlider2')
// );
const Carousel = React.lazy(() => import('./pages/Sliders/Carousel'));

const ImageLazyLoading = React.lazy(
  () => import('./components/3.Loadings/LazyLoadings')
);
const InfiniteScrolling = React.lazy(
  () => import('./components/3.Loadings/InfiniteScroll')
);

const ImageGallery = React.lazy(
  () => import('./components/4.Surfaces/Gallery/ImageGallery')
);

const VideoPlayer = React.lazy(
  () => import('./components/4.Surfaces/VideoPlayer')
);

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path={'/Avatar'} element={<Avatar />} />

              <Route path={'/AutoComplete'} element={<AutoComplete />} />
              <Route path={'/Tooltip'} element={<Tooltip />} />
              <Route path={'/Tab'} element={<Tab />} />
              <Route path={'/Switch'} element={<Switch />} />
              <Route path={'/Modal'} element={<Modal />} />

              <Route path='/Toast' element={<Toast />} />
              <Route path='/Accordion' element={<Accordion />} />
              <Route path='/ImageSlider' element={<ImageSlider />} />
              <Route path='/ImageGallery' element={<ImageGallery />} />

              <Route path='/ImageLazyLoading' element={<ImageLazyLoading />} />

              {/* <Route path='/ProductSlider' element={<ProductSlider />} /> */}
              <Route path='/Carousel' element={<Carousel />} />

              <Route path='/Select' element={<Select />} />

              <Route
                exact
                path='/InfiniteScrolling'
                element={<InfiniteScrolling />}
              />

              <Route path='/Range' element={<Range />} />

              <Route path='/VideoPlayer' element={<VideoPlayer />} />
              <Route path='/DropDown' element={<DropDown />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </>
  );
}

export default App;
