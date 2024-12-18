import React from "react";

const Footer = ({
  backgroundColorCheck,
  textColorCheck,
}) => {
  return (
    <footer className={`container mx-auto px-4 ${backgroundColorCheck} ${ textColorCheck} py-8 duration-200`}>
      <div className="flex justify-between gap-10 px-1">
        <div className="w-full mb-6">
          <h2 className="text-2xl font-bold">EntertainmentSite</h2>
          <p className="mt-2 ">
            Your one-stop destination for all entertainment needs.
          </p>
        </div>
        <div className="w-full mb-6">
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul>
            <li>
              <a href="#home" className="">
                Home
              </a>
            </li>
            <li>
              <a href="#movies" className="">
                Movies
              </a>
            </li>
            <li>
              <a href="#tvshows" className="">
                TV Shows
              </a>
            </li>
            <li>
              <a href="#music" className="">
                Music
              </a>
            </li>
            <li>
              <a href="#news" className="">
                News
              </a>
            </li>
            <li>
              <a href="#contact" className="">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full mb-6">
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <form>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded focus:outline-none border-2 text-black"
            />
            <button className="mt-2 w-full p-2 rounded bg-blue-600 hover:bg-blue-700 text-white">
              Subscribe
            </button>
          </form>
        </div>
        <div className="w-full mb-6">
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="gap-4">
            <a href="#" className="">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8  text-sm text-center">
        <p>&copy; 2024 EntertainmentSite. All rights reserved.</p>
        <p>
          <a href="#privacy" className="">
            Privacy Policy
          </a>
          |
          <a href="#terms" className="">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
