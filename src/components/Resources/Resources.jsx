import React from 'react';
import './Resources.css'
import profile from '../../assets/profile.jpg'
import { IoIosSettings } from "react-icons/io";
import { FaBookOpen, FaInstagram, FaInstagramSquare, FaLaptopCode, FaPodcast, FaTwitter } from 'react-icons/fa'
import { FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { FaCogs, FaUserTie, FaBullhorn, FaChartLine, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../assets/footer-logo2.jpg'
import { FaX, FaXTwitter } from 'react-icons/fa6';
const Resources = () => {
  return (
    <>
      <div className="position-relative bg-dark banner-resources">
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h6 className="fw-bold banner-heading">Resources</h6>

        </div>
      </div>

      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-6">
            <h2 className="fw-semi fs-2 mb-3 text-start">
              Welcome to Astonish Laws Firm Academy!
            </h2>
            <p className="text-secondary fs-5 mb-2 text-start">
              <strong>Videos, ebooks, guides, templates,</strong> and more to help you grow and manage your law firm.
            </p>
            <p className="text-muted fs-6 text-start">
              Sign up for our academy and you'll receive personalized emails and access to tools, tips, and videos all designed to grow and successfully manage your law firm.
            </p>
            <div className="d-flex align-items-center mt-3">
              <img
                src={profile}
                alt="Academy"
                className="rounded-circle shadow"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <span className="ms-3 text-muted fs-6 text-start">
                This information is shared by legal law expert,<br /><strong >vuyyuri krishna varma</strong>
              </span>
            </div>
          </div>


          {/* Right Column */}
          <div className="col-md-6 ">
            <div className="cta-box rounded d-flex flex-column justify-content p-4">
              <h6 className="text-white mb-3 text-center">
                Start Learning Today <br />
                Implement Drive Revenue.
              </h6>
              <form className="d-flex">
                <input
                  type="email"
                  className="form-control me-2 rounded"
                  placeholder="Enter Your Email Address"
                />
                <button className="btn btn-danger rounded" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>


      <div className="available-resources-section py-5 mt-4">
        <h2 className="fw-semi fs-2 mb-3 text-center">Available Resources</h2>
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="resource-box d-flex mt-2 flex-column align-items-center justify-content-center">
              <IoIosSettings className="resource-icon" />
              <h5 className="resource-title">Law Firm Marketing Assessment Tool</h5>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="resource-box d-flex flex-column align-items-center justify-content-center">
              <FaBookOpen className="resource-icon" />
              <h5 className="resource-title">Guides, Checklists, Templates</h5>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="resource-box d-flex flex-column align-items-center justify-content-center">
              <FaLaptopCode className="resource-icon" />
              <h5 className="resource-title">Academy Materials</h5>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="resource-box d-flex flex-column align-items-center justify-content-center">
              <FaPodcast className="resource-icon" />
              <h5 className="resource-title">Podcast</h5>
            </div>
          </div>
        </div>
      </div>







      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Side: Centered Title */}
          <div className="col-md-6 d-flex justify-content-left">
            <h3 className="fw-semi fs-2 mb-3 text-start p-3">Topics Covered in the Academy</h3>
          </div>

          {/* Right Side: 2x2 Icon Grid */}
          <div className="col-md-6">
            <div className="row text-start g-5">
              <div className="col-6 ">
                <div className="d-flex align-items-center gap-3 ">
                  <FaCogs size={40} className="custom-icon" />
                  <span className="fs-5">Management</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center gap-3">
                  <FaUserTie size={40} className="custom-icon" />
                  <span className="fs-5">HR</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center gap-3">
                  <FaBullhorn size={40} className="custom-icon" />
                  <span className="fs-5">Marketing</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center gap-3">
                  <FaChartLine size={40} className="custom-icon" />
                  <span className="fs-5">Sales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="">
        <p className="text-center why-box text-white py-2 fs-3">
          Why I Created the Academy
        </p>

        <div className="mx-auto w-75 px-3">
          <p className="text-justify text-secondary mt-5" style={{ textAlign: 'justify' }}>
            A computer program can easily produce gibberish — especially if it has been provided with garbage beforehand.
            This program does something a little different. It takes a block of text as input and works out the proportion
            of characters within the text according to a chosen order. For example, an order of 2 means the program looks
            at pairs of letters, an order of 3 means triplets of letters, and so on.
            <p>The software can regurgitate random
              text that is controlled by the proportion of characters. The results can be quite surprising. 0 order produces
              random text based on the proportion of letters within the input text, 2nd order produces gibberish — 6th order
              and above can often be meaninglessly readable.</p>
            <p>
              This program does something a little different. It takes a block of text as input and works out the proportion
              of characters within the text according to a chosen order.
            </p>
            <p>
              This program does something a little different. It takes a block of text as input and works out the proportion
              of characters within the text according to a chosen order.
            </p>
            <p>The software can regurgitate random
              text that is controlled by the proportion of characters. The results can be quite surprising. 0 order produces
              random text based on the proportion of letters within the input text, 2nd order produces gibberish — 6th order
              and above can often be meaninglessly readable.</p>
            <p>
              This program does something a little different. It takes a block of text as input and works out the proportion
              of characters within the text according to a chosen order.
            </p>
            <p>
              This program does something a little different. It takes a block of text as input and works out the proportion
              of characters within the text according to a chosen order.
            </p>






          </p>
          <p className='fs-3 fw-bold text-start mt-4'>Why Astonish Law Firm Academy</p>
          <p className="text-justify text-secondary mt-4" style={{ textAlign: 'justify' }}>
            A computer program can easily produce gibberish — especially if it has been provided with garbage beforehand.
            This program does something a little different. It takes a block of text as input and works out the proportion
            of characters within the text according to a chosen order. For example, an order of 2 means the program looks
            at pairs of letters, an order of 3 means triplets of letters, and so on.
            <p>The software can regurgitate random
              text that is controlled by the proportion of characters. The results can be quite surprising. 0 order produces
              random text based on the proportion of letters within the input text</p> </p>


          <div className='row g-0 mt-4'>
            <div className="col-md-6">
              <div className="cta-box  d-flex flex-column justify-content p-4">
                <h6 className="text-white mb-3 fs-2 fw-bold text-justify">
               
                  Level Up Your Brand
                </h6>
                <p className="text-white mb-3 fs-4 fw-semi text-justify">Find Out how much demand<br/>There is in your geographical<br/>area</p>
                
                  <button className="btn btn-danger rounded" type="submit" >Book a Free Consultation
                   
                  </button>
                
              </div>
            </div>

            <div className="col-md-6 ">
              <div className='last-image'>

              </div>
            </div>
          </div>
        </div>

      </div>






{/* <footer className="footer bg-black text-white pt-5 pb-3 mt-5">

    <div className="row  ">

     
      <div className="col-md-3 mb-4">
  <img
    src={logo}
    alt="Astonish Laws Logo"
    className="img-fluid"
    style={{ maxWidth: '150px' }}
  />
</div>


     
      <div className="col-md-3 mb-4">
        <h6 className="fw-bold mb-3 fs-4">Useful Links</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white text-decoration-none">Home</a></li>
          <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
          <li><a href="#" className="text-white text-decoration-none">Our Blogs</a></li>
        </ul>
      </div>

    
      <div className="col-md-3 mb-4">
        <h6 className="fw-bold mb-3 fs-4">Our Portfolio</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white text-decoration-none">Our Clients</a></li>
          <li><a href="#" className="text-white text-decoration-none">Case Studies</a></li>
          <li><a href="#" className="text-white text-decoration-none">Success</a></li>
        </ul>
      </div>


<div className="col-md-3 mb-4">
  <h6 className="fw-bold mb-3 fs-4">Contact Information</h6>
    <ul className="list-unstyled">
      
  <div className="d-flex align-items-center mb-2">
    <IoLocationSharp className="me-2"/>
    
    <span>121 Street, Vijayawada, AP</span>
  </div>

  <div className="d-flex align-items-center mb-2">
    <FaPhoneAlt className="me-2" />
    <span>+91-69944-9223</span>
  </div>

  <div className="d-flex align-items-center mb-2">
    <FaEnvelope className="me-2" />
    <span>info@astonish.com</span>
  </div>

  <div className="d-flex align-items-center">
    <FaGlobe className="me-2" />
    <span>www.astonishlaw.com</span>
  </div>
  </ul>
</div>
<hr style={{ borderTop: '4px solid white' }} />

    </div>

    

    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mx-5 mt-3">
      <p className="mb-0 text-white">
        © 2025 Powered by <span className="text-purple">DigiSphere</span>
      </p>
      <div className="d-flex gap-3 mt-3 mt-md-0">
        <FaFacebookF className="text-white" />
        <FaLinkedinIn className="text-white" />
        <FaInstagramSquare className="text-white" />
        <FaXTwitter className="text-white" />
      </div>
    </div>

</footer> */}



<footer className="footer bg-black text-white pt-5 pb-3 mt-5">
  <div className="container">
    <div className="row text-center text-md-start align-items-start">

      {/* Logo Column */}
      <div className="col-md-3 mb-4">
        <img
          src={logo}
          alt="Astonish Logo"
          className="img-fluid d-block mx-md-0 mx-auto"
          style={{ maxWidth: '130px' }}
        />
      </div>

      {/* Useful Links */}
      <div className="col-md-3 mb-4">
        <h6 className="fw-bold mb-3">Useful Links</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white text-decoration-none">Home</a></li>
          <li><a href="#" className="text-white text-decoration-none">About</a></li>
          <li><a href="#" className="text-white text-decoration-none">Our Blogs</a></li>
          <li><a href="#" className="text-white text-decoration-none">Events</a></li>
        </ul>
      </div>

      {/* Our Portfolio */}
      <div className="col-md-3 mb-4">
        <h6 className="fw-bold mb-3">Our Portfolio</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white text-decoration-none">Our Cases</a></li>
          <li><a href="#" className="text-white text-decoration-none">Our Videos</a></li>
          <li><a href="#" className="text-white text-decoration-none">Resources</a></li>
          <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="col-md-3 mb-4">
        <h6 className="fw-bold mb-3">Contact Information</h6>
        <div className="contact-icon"><IoLocationSharp className="uniform-icon me-2" /><span>123 Street, Vijayawada, AP</span></div>
        <div className="contact-icon"><FaPhoneAlt className="uniform-icon me-2" /><span>+91-69944-9222</span></div>
        <div className="contact-icon"><FaEnvelope className="uniform-icon me-2" /><span>info@example.com</span></div>
      </div>
    </div>

    {/* Bottom Bar */}
    <hr className="footer-line my-5" />
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
      <p className="mb-0 text-white">© 2025 Powered by <span className="text-purple">DigitSphere</span></p>
      <div className="d-flex gap-3 mt-3 mt-md-0">
        <FaFacebookF className="uniform-icon text-white" />
        <FaInstagramSquare className="uniform-icon text-white" />
        <FaXTwitter className="uniform-icon text-white" />
        <FaLinkedinIn className="uniform-icon text-white" />
      </div>
    </div>
  </div>
</footer>


    </>

  );
}

export default Resources;
