"use client"
import { useRef, ReactNode } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
const SideScroll = ({ children , showBlur=false}: {children: ReactNode, showBlur?: boolean}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction = 'left') => {
    let sign = direction == 'left' ? -1 : 1;
    if(scrollRef.current)
    scrollRef.current.scrollLeft += sign * 500;
  }


  return (
    <div className="relative w-full">
        <div onClick={() => handleScroll()} className={`absolute ${showBlur ? 'backdrop-blur-lg' : ''} top-0 left-0 h-full w-[70px] flex items-center justify-center z-10`}>
            <div className={`flex items-center justify-center rounded-full h-[40px] w-[40px] bg-white bg-opacity-40 backdrop-blur shadow`}>
                <BsChevronLeft />
            </div>
        </div>
        <div onClick={() => handleScroll('right')} className={`absolute ${showBlur ? 'backdrop-blur-lg' : ''} top-0 right-0 h-full w-[70px] flex items-center justify-center z-10`}>
            <div className={`flex items-center justify-center rounded-full h-[40px] w-[40px] bg-white bg-opacity-40 backdrop-blur shadow`}>
                <BsChevronRight />
            </div>
        </div>
        <div ref={scrollRef} className="overflow-x-scroll overflow-y-visible relative z-0 scrollbar scrollbar-rounded scroll-smooth w-full">
            <div className={`w-max flex  gap-3 ${showBlur ? 'px-[20px]' : 'mx-auto px-[20px]'}`}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default SideScroll