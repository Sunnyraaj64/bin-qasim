import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import 'swiper/css';

interface SlideType {
  id: number;
  image: string;
  title: string;
  heading: string;
  description: string;
  link: string;
}
const slidesData: SlideType[] = [
  {
    id: 1,
    image: '/img/hero/slider1.jpeg',
    title: 'WELCOME TO BINQASIM TECHNICAL SERVICES',
    heading: 'Premium Glass & Mirror <br /> Solutions for Your <br /> Modern Spaces',
    description: 'BinQasim Technical Services is Dubai\'s trusted provider of high-quality glass and mirror installations, offering expert craftsmanship and innovative solutions for residential and commercial projects.',
    link: '/',
  },
  {
    id: 2,
    image: '/img/hero/slider2.jpeg',
    title: 'WELCOME TO BINQASIM TECHNICAL SERVICES',
    heading: 'Transforming Spaces with <br /> Elegant Glass & Mirror <br /> Installations',
    description: 'With years of experience in Dubai, we specialize in custom glass fabrication, mirror installations, and comprehensive glass solutions that enhance the beauty and functionality of your property.',
    link: '/',
  },
];

const HeroOne = () => {
  return (
    <section className="hero-section hero-1">
      <div className="array-button">
        <button className="array-prev"><i className="fa fa-arrow-left" /></button>
        <button className="array-next"><i className="fa fa-arrow-right" /></button>
      </div>
      <Swiper
        loop={true}
        slidesPerView={1}
        effect="fade"
        speed={3000}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".array-prev",
          prevEl: ".array-next",
        }}
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {(({ isActive }) => <Card slide={slide} isActive={isActive} />)}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

  )
}

export default HeroOne

const Card = ({ slide, isActive }: { slide: SlideType; isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
    >
      <div className="hero-image bg-cover" style={{ backgroundImage: `url(${slide.image})` }} />
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="hero-content">
              <motion.h6
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.3,
                  ease: 'linear',
                }}
              >
                {slide.title}
              </motion.h6>
              <motion.h1
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.5,
                  ease: 'linear',
                }}
                dangerouslySetInnerHTML={{ __html: slide.heading }}></motion.h1>
              <motion.p
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.7,
                  ease: 'linear',
                }}
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.9,
                  ease: 'linear',
                }}
                className="hero-button"
              >
                <a 
                  href="#appointment-section" 
                  className="theme-btn theme-color-2"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('appointment-section');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  <span>Get a Quote <i className="fas fa-chevron-right" /></span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}