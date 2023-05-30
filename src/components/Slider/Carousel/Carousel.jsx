import React, { useRef } from 'react'
import './Carousel.css'
export default function Carousel({ children }) {
    const carouselRef = useRef(null)
    const leftArrorwBtnRef = useRef(null)
    const rightArrowBtnRef = useRef(null)

    let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

    const autoSlide = () => {
        // if there is no image left to scroll then return from here
        if (carouselRef.current.scrollLeft - (carouselRef.current.scrollWidth - carouselRef.current.clientWidth) > -1 
        || carouselRef.current.scrollLeft <= 0) return;

        positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
        let firstImgWidth = carouselRef.current.firstElementChild.clientWidth + 14;
        // getting difference value that needs to add or reduce from carousel left to take middle img center
        let valDifference = firstImgWidth - positionDiff;

        if (carouselRef.current.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
            return carouselRef.current.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }
        // if user is scrolling to the left
        carouselRef.current.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }

    const dragStart = (e) => {
        // updatating global variables value on mouse down event
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carouselRef.current.scrollLeft;
    }

    const dragging = (e) => {
        console.log('fk')
        // scrolling images/carousel to left according to mouse pointer
        if (!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        carouselRef.current.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    }

    const dragStop = () => {
        isDragStart = false;
        carouselRef.current.classList.remove("dragging");

        if (!isDragging) return;
        isDragging = false;
        autoSlide();
    }
    const showHideIcons = () => {
        // showing and hiding prev/next icon according to carousel scroll left value
        let scrollWidth = carouselRef.current.scrollWidth - carouselRef.current.clientWidth; // getting max scrollable width
        console.log(carouselRef.current.scrollLeft)

        leftArrorwBtnRef.current.style.display = carouselRef.current.scrollLeft == 0 ? "none" : "block";
        rightArrowBtnRef.current.style.display = carouselRef.current.scrollLeft == scrollWidth ? "none" : "block";
  
        console.log(carouselRef.current.scrollLeft, scrollWidth)
        
    }
    const handleBtnClick = (e) => {

        console.log(e.target.id)
        console.log(carouselRef.current.firstElementChild)
        // getting first img width & adding 14 margin value
        //change this value if u change margin value in css
        let firstImgWidth = carouselRef.current.firstElementChild.clientWidth + 14; 
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carouselRef.current.scrollLeft += e.target.id == "left" ? -firstImgWidth : firstImgWidth;
        console.log(carouselRef.current.scrollLeft)
        // calling showHideIcons after 60ms
        setTimeout(() => showHideIcons(e), 60); 
    }

    document.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

    return (
        <div className="wrapper">
            <i
            ref={leftArrorwBtnRef}
            id="left"  
            onClick={e=>handleBtnClick(e)}
            className="fa-solid fa-angle-left"></i>
            <div ref={carouselRef}
                onMouseDown={(e) => dragStart(e)}
                onTouchStart={(e) => dragStart(e)}
                onTouchMove={(e) => dragging(e)}
                onTouchEnd={(e) => dragStop(e)}
                className="carousel">
               {children}
            </div>
            <i id="right"
            ref={rightArrowBtnRef}
                onClick={e=>handleBtnClick(e)}
                className="fa-solid fa-angle-right"></i>
        </div>
    )
}
