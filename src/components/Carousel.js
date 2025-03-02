import React from "react";
import alter from "../pages/real.png"
const Carousel = () => {
  return (
    <div id="default-carousel" class="relative w-full" data-carousel="slide" style={{width : "550px" , height : "400px"}}>
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">

      <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={alter}
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={alter}
          />
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={alter}
          />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={alter}
          />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={alter}
          />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://media.istockphoto.com/id/1447708518/photo/modern-villa-exterior-in-summer.webp?b=1&s=170667a&w=0&k=20&c=zh6wcDIxJk2ORk0Kg3hjVxQYWQsoLZ9TwAeCmxeYB-A="
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={alter}
          />
        </div>

        
      </div>

      

      
    </div>
  );
};

export default Carousel;
