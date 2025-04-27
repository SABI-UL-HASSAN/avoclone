// import { Link } from 'wouter';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white pt-20 pb-10 relative dark-diagonal-top">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
//           <div className="lg:col-span-2">
//             <Link href="/" className="inline-block mb-6">
//               <span className="text-white font-montserrat text-2xl font-bold">a<span className="text-[#FF0000]">v</span>o</span>
//             </Link>
//             <p className="text-gray-400 mb-6">
//               Far far away, behind the word mountains, far from the countries.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF0000] transition duration-300">
//                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//                 </svg>
//               </a>
//               <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF0000] transition duration-300">
//                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//                 </svg>
//               </a>
//               <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF0000] transition duration-300">
//                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
//                 </svg>
//               </a>
//             </div>
//           </div>
          
//           <div>
//             <h4 className="text-white font-montserrat font-bold mb-6">Community</h4>
//             <ul className="space-y-3">
//               <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 flex items-center"><span className="mr-2">›</span> Projects</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 flex items-center"><span className="mr-2">›</span> Team</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 flex items-center"><span className="mr-2">›</span> Reviews</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 flex items-center"><span className="mr-2">›</span> FAQs</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="text-white font-montserrat font-bold mb-6">About Us</h4>
//             <ul className="space-y-3">
//               <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 flex items-center"><span className="mr-2">›</span> Our Story</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 flex items-center"><span className="mr-2">›</span> Meet the team</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 flex items-center"><span className="mr-2">›</span> Careers</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="text-white font-montserrat font-bold mb-6">Company</h4>
//             <ul className="space-y-3">
//               <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 flex items-center"><span className="mr-2">›</span> About Us</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 flex items-center"><span className="mr-2">›</span> Press</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 flex items-center"><span className="mr-2">›</span> Contact</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 flex items-center"><span className="mr-2">›</span> Careers</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="text-white font-montserrat font-bold mb-6">Have a Questions?</h4>
//             <ul className="space-y-4">
//               <li className="flex">
//                 <svg className="w-5 h-5 text-[#FF0000] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                 </svg>
//                 <span className="text-gray-400">
//                   203 Fake St.<br />
//                   Mountain View,<br />
//                   San Francisco,<br />
//                   California, USA
//                 </span>
//               </li>
//               <li className="flex">
//                 <svg className="w-5 h-5 text-[#FF0000] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
//                 </svg>
//                 <span className="text-gray-400">+2 392 3929 210</span>
//               </li>
//               <li className="flex">
//                 <svg className="w-5 h-5 text-[#FF0000] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
//                 </svg>
//                 <span className="text-gray-400">info@yourdomain.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-800 pt-8">
//           <p className="text-center text-gray-500 text-sm">
//             Copyright ©{new Date().getFullYear()} All rights reserved | This template is made with ♥ by <a href="#" className="text-[#FF0000]">Colorlib</a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { FaTwitter, FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 w-full">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Logo and About */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-6">avo</h2>
          <p className="mb-6 leading-relaxed">
            Far far away, behind <br />the word mountains, <br />far from the countries.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-[#222222] hover:bg-gray-700 p-3 rounded-full">
              <FaTwitter className="text-white" />
            </a>
            <a href="#" className="bg-[#222222] hover:bg-gray-700 p-3 rounded-full">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="bg-[#222222] hover:bg-gray-700 p-3 rounded-full">
              <FaInstagram className="text-white" />
            </a>
          </div>
        </div>

        {/* Community Links */}
        <div>
          <h3 className="text-white font-semibold mb-6">Community</h3>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white">› Projects</a></li>
            <li><a href="#" className="hover:text-white">› Team</a></li>
            <li><a href="#" className="hover:text-white">› Reviews</a></li>
            <li><a href="#" className="hover:text-white">› FAQs</a></li>
          </ul>
        </div>

        {/* About Us Links */}
        <div>
          <h3 className="text-white font-semibold mb-6">About Us</h3>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white">› Our Story</a></li>
            <li><a href="#" className="hover:text-white">› Meet the team</a></li>
            <li><a href="#" className="hover:text-white">› Careers</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-6">Company</h3>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white">› About Us</a></li>
            <li><a href="#" className="hover:text-white">› Press</a></li>
            <li><a href="#" className="hover:text-white">› Contact</a></li>
            <li><a href="#" className="hover:text-white">› Careers</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-6">Have a Questions?</h3>
          <ul className="space-y-5">
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="mt-1" />
              <span>203 Fake St. <br />Mountain View, <br />San Francisco, <br />California, USA</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt />
              <span>+2 392 3929 210</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope />
              <span>info@yourdomain.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700">
        <p className="text-center text-gray-500 py-6 text-sm">
          Copyright ©2025 All rights reserved | This template is made with 
          <span className="text-white mx-1">🤍</span> by 
          <span className="text-pink-600 ml-1">Colorlib</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
