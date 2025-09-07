import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#13b53f] text-white pb-8 mt-auto">
      {/* Cityscape image */}
        <div className="max-h-full w-full bg-[#fff] flex justify-center">
          <img src="src/assets/jij1.png" alt="Cityscape"  />
        </div>
      <div className="container mx-auto px-4">
        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-left mb-8">
          <div>
            <h3 className="font-bold mb-4">About us</h3>
            <ul className="space-y-2">
              <li>About Jiji</li>
              <li>We are hiring!</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Billing Policy</li>
              <li>Candidate Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Copyright Infringement Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>support@jiji.ng</li>
              <li>Safety tips</li>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="md:col-span-1 flex flex-col items-center">
            <h3 className="font-bold mb-4">Our apps</h3>
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center mb-4"
            >
              <div className="flex items-center justify-center ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
              alt="applestore" />
              </div>
              
            </a>
            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="googleplay" className="w-35"/>
              </div>
            </a>
          </div>
          <div>
            <h3 className="font-bold mb-4">Our resources</h3>
            <ul className="space-y-2">
              <li>Our blog</li>
              <li>Jiji on FB</li>
              <li>Our Instagram</li>
              <li>Our YouTube</li>
              <li>Our Twitter</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Hot links</h3>
            <ul className="space-y-2">
              <li>Jiji Africa</li>
            </ul>
          </div>
        </div>
        {/* Flags */}
         <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
            <img
            src="src/assets/img2.jpeg" 
            alt="Africa"  className="w-10 h-10 rounded-full border border-white"/> 
            <img
            src="src/assets/img3.jpeg" 
            alt="Africa"  className="w-10 h-10 rounded-full border border-white"/> 
            <img
            src="src/assets/img4.jpeg" 
            alt="Africa"  className="w-10 h-10 rounded-full border border-white"/> 
            <img
            src="src/assets/img5.jpeg" 
            alt="Africa"  className="w-10 h-10 rounded-full border border-white"/> 
            <img
            src="src/assets/img6.jpeg" 
            alt="Africa"  className="w-10 h-10 rounded-full border border-white"/> 
            <img
            src="src/assets/img7.jpeg" 
            alt="Africa"  className="w-10 h-10 rounded-full border border-white"/> 
            <img
            src="src/assets/img8.jpeg" 
            alt="Africa"  className="w-10 h-10 rounded-full border border-white"/> 
            <img
            src="src/assets/img9.jpeg" 
            alt="Africa"  className="w-10 h-10 rounded-full border border-white"/> 
            <img
            src="src/assets/img10.jpeg" 
            alt="Africa"  className="w-10 h-10 rounded-full border border-white"/> 
             <img
            src="src/assets/img11.jpeg" 
            alt="Africa"  className="w-10 h-10 rounded-full border border-white"/> 
             <img
            src="src/assets/img12.jpeg" 
            alt="Africa"  className="w-10 h-10 rounded-full border border-white"/> 
             <img
            src="src/assets/img10.jpeg" 
            alt="Africa"  className="w-10 h-10 rounded-full border border-white"/> 
            
            
        </div>

        {/* Copyright */}
        <div className="text-center text-white text-sm mt-4">
          &copy; {new Date().getFullYear()} Jiji.ng
        </div>
      </div>
    </footer>
  );
};

export default Footer;
