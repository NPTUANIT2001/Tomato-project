import Hero from "../../assest/img/illustration/Hero Image.svg";
import Brand from "../../assest/img/brand/Testimoni brands.svg";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                className="copy"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="text-label">
                  Changes your bussines is more better
                </div>
                <div className="text-hero-bold">
                  Grow up your mind in the future.
                </div>
                <div className="text-hero-regular">
                  There are so many variations passages of management Your
                  mindset about bussines in your company or agency
                </div>
                <div className="cta">
                  <a href="/#" className="btn1 btn-primary shadow-none">
                    Explore now
                  </a>
                  <a href="/#" className="btn1 btn-secondary shadow-none ms-3">
                    See pricing
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 "
              data-aos="fade-up"
              data-aos-duration={3000}
            >
              <img src={Hero} alt="hero" />
            </div>
          </div>
        </div>
      </section>
      <section className="testimonl-brand">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5 mb-5 text-center">
              <img src={Brand} alt="brand" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
