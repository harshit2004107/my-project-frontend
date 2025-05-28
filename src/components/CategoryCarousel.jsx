import React, { useEffect, useRef, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
  "👨‍💻 Frontend Developer",
  "🖥️ Backend Developer",
  "🧑‍💻 FullStack Developer",
  "📊 Data Scientist",
  "🛡️ Cybersecurity Specialist",
  "🎨 Graphic Designer",
  "🧠 UI/UX Designer",
  "⚙️ DevOps Engineer",
  "📱 Mobile App Developer",
  "🎮 Game Developer",
  "☁️ Cloud Engineer",
  "🤖 AI/ML Engineer",
  "🧭 Product Manager",
  "🌐 Web Designer",
  "💻 Software Engineer",
  "🗄️ Database Administrator",
  "⛓️ Blockchain Developer",
  "🧰 IT Support Specialist",
  "🕶️ AR/VR Developer",
  "🔌 Embedded Systems Engineer",
  "🧾 Systems Analyst",
  "🔍 SEO Specialist",
  "📝 Technical Writer"
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);

  const [current1, setCurrent1] = useState(0);
  const [current2, setCurrent2] = useState(category.length - 1);

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  // First carousel (forward) - scrolls every 2 seconds
  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrent1((prev) => (prev + 1) % category.length);
    }, 2000);
    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    const items = carouselRef1.current?.querySelectorAll('.carousel-item');
    if (items && items[current1]) {
      items[current1].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [current1]);

  // Second carousel (backward) - scrolls every 3 seconds
  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrent2((prev) => (prev - 1 + category.length) % category.length);
    }, 3000);
    return () => clearInterval(interval2);
  }, []);

  useEffect(() => {
    const items = carouselRef2.current?.querySelectorAll('.carousel-item');
    if (items && items[current2]) {
      items[current2].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [current2]);

  return (
    <div className="space-y-10">
      {/* First Carousel - Left to Right (2s) */}
      <Carousel
        className="w-full max-w-5xl mx-auto overflow-x-auto scroll-smooth"
        ref={carouselRef1}
      >
        <CarouselContent className="flex whitespace-nowrap">
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="carousel-item inline-block md:basis-1/2 lg:basis-1/3 px-1 py-2"
            >
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full w-full text-sm"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Second Carousel - Right to Left (3s) */}
      <Carousel
        className="w-full max-w-5xl mx-auto overflow-x-auto scroll-smooth"
        ref={carouselRef2}
      >
        <CarouselContent className="flex whitespace-nowrap">
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="carousel-item inline-block md:basis-1/2 lg:basis-1/3 px-1 py-2"
            >
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full w-full text-sm"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
