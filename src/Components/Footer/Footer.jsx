import imgFb from "../../assets/fb.svg";
import imgIn from "../../assets/in.svg";
import imgMassege from "../../assets/massege.svg";
import imgTwiter from "../../assets/twiter.svg";
const Footer = () => {
    return (
       <div className=" bg-neutral text-neutral-content ">
         <footer className=" sm:footer-horizontal bg-neutral text-neutral-content  md:grid  md:grid-cols-4  text-center  md:p-10 p-3 mx-auto">
  <nav>
    <h6 className="footer-title text-left mt-7">CS — Ticket System</h6>
   <p className=" text-sm text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </nav>


  <nav className="text-left md:ml-10 my-7 border-b-2 md:border-0">
    <h6 className="footer-title">Company</h6>
    <p className="link link-hover">About us</p>
    <p className="link link-hover">Our Mission</p>
    <p className="link link-hover">Contact Saled</p>
  </nav>


  <nav  className="text-left md:ml-10 my-7  border-b-2 md:border-0">
    <h6 className="footer-title">Services</h6>
    <p className="link link-hover">Products & Services</p>
    <p className="link link-hover">Customer Stories</p>
    <p className="link link-hover">Download Apps</p>
  </nav>


  <nav  className="text-left md:ml-10 my-7  border-b-2 md:border-0">
    <h6 className="footer-title ">Information</h6>
    <p className="link link-hover ">Privacy Policy</p>
    <p className="link link-hover ">Terms & Conditions</p>
    <p className="link link-hover ">Join Us</p>
  </nav>



  <nav  className="text-left md:ml-10  my-7  border-b-2 md:border-0">
    <h6 className="footer-title  space-y-3">Social Links</h6>
    <div className=" flex items-center space-x-2 space-y-3">
        <img src={imgTwiter} alt="" />
        <p className="link link-hover ">@CS — Ticket System</p>
    </div>
    <div className=" flex items-center space-x-2 space-y-3">
        <img src={imgIn} alt="" />
        <p className="link link-hover ">@CS — Ticket System</p>
    </div>
    <div className=" flex items-center space-x-2 space-y-3">
        <img src={imgFb} alt="" />
        <p className="link link-hover ">@CS — Ticket System</p>
    </div>
    <div className=" flex items-center space-x-2 space-y-3">
        <img src={imgMassege} alt="" />
        <p className="link link-hover ">support@cst.com</p>
    </div>
  </nav>
</footer>
<div className="text-center p-5">
  © 2025 CS — Ticket System. All rights reserved.
</div>
       </div>
    );
};

export default Footer;