import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    review:
      "Working with this developer was an absolute pleasure. They delivered our web application ahead of schedule with exceptional attention to detail. The code quality was outstanding, and they were always available to explain technical concepts in simple terms.",
    image: AVTR1
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, StartupHub",
    review:
      "The UI/UX designs transformed our platform completely. The intuitive interface led to a 40% increase in user engagement. Their ability to understand user needs and translate them into beautiful designs is truly remarkable.",
    image: AVTR2
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager, DesignFlow",
    review:
      "As a product manager, I've worked with many developers, but this experience was exceptional. They went above and beyond to ensure our project's success, offering valuable insights and suggestions that improved the final product.",
    image: AVTR3
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO, InnovateX",
    review:
      "The technical expertise and problem-solving skills demonstrated were impressive. They handled complex backend challenges with ease and delivered a scalable solution that has grown with our business needs. Highly recommended!",
    image: AVTR4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
        autoplay={{
          delay: 5000, // 5 seconds delay between slides
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        loop={true} // Enable continuous loop
        speed={800} // Animation speed in ms
      >
        {data.map(({ id, name, role, review, image }) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="client__avatar">
              <img src={image} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__role">{role}</small>
            <small className="client__review">
              {review}
            </small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
