import React from 'react'

const App = () => {
  return (
    <div>
       <nav className="bg-white shadow-lg">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between h-16">
             <div className="flex">
               <div className="flex-shrink-0 flex items-center">
                 <svg className="h-8 w-auto text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
                 <span className="ml-2 text-xl font-bold text-gray-900">Goyal Garage</span>
               </div>
               <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                 <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                   Home
                 </a>
                 <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                   About
                 </a>
                 <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                   Services
                 </a>
                 <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                   Contact
                 </a>
               </div>
             </div>
             <div className="hidden sm:ml-6 sm:flex sm:items-center">
               <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                 Sign In
               </button>
             </div>
           </div>
         </div>
       </nav>

       

       <div className="relative bg-gray-900">
         <div className="absolute inset-0">
           <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" alt="Luxury car"/>
           <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
         </div>
         <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
           <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
             Experience Luxury & Performance
           </h1>
           <p className="mt-6 text-xl text-gray-300 max-w-3xl">
             Discover our exclusive collection of premium vehicles. From elegant sedans to powerful sports cars, find your perfect match with unparalleled style and engineering excellence.
           </p>
           <div className="mt-10">
             <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
               Explore Our Collection
             </a>
           </div>
         </div>
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 gap-8 md:grid-cols-3 pb-12">
             <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6">
               <h3 className="text-lg font-semibold text-white">Premium Selection</h3>
               <p className="mt-2 text-gray-300">Curated collection of luxury vehicles from top manufacturers worldwide.</p>
             </div>
             <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6">
               <h3 className="text-lg font-semibold text-white">Expert Consultation</h3>
               <p className="mt-2 text-gray-300">Professional guidance to help you find your perfect automotive match.</p>
             </div>
             <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6">
               <h3 className="text-lg font-semibold text-white">Exclusive Service</h3>
               <p className="mt-2 text-gray-300">Personalized attention and premium care for every client.</p>
             </div>
           </div>
         </div>
       </div>

       <div className="bg-white py-16">
         <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Luxury Collection</h2>
             <p className="mt-4 text-lg text-gray-500">Experience unparalleled automotive excellence</p>
           </div>
           
           <div className="mt-12 relative">
             <div className="overflow-hidden">
               <div className="flex transition-transform duration-500 ease-in-out transform translate-x-0">
                 {/* Luxury Car 1 */}
                 <div className="w-full flex-shrink-0">
                   <div className="relative h-96">
                     <img 
                       src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                       alt="Luxury Car 1"
                       className="w-full h-full object-cover rounded-lg"
                     />
                     <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                       <h3 className="text-2xl font-bold text-white">Rolls-Royce Phantom</h3>
                       <p className="text-gray-200">The pinnacle of luxury motoring</p>
                     </div>
                   </div>
                 </div>

                 {/* Luxury Car 2 */}
                 <div className="w-full flex-shrink-0">
                   <div className="relative h-96">
                     <img 
                       src="https://images.unsplash.com/photo-1563720223185-c6c8a58b4708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                       alt="Luxury Car 2"
                       className="w-full h-full object-cover rounded-lg"
                     />
                     <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                       <h3 className="text-2xl font-bold text-white">Bentley Continental GT</h3>
                       <p className="text-gray-200">Grand touring at its finest</p>
                     </div>
                   </div>
                 </div>

                 {/* Luxury Car 3 */}
                 <div className="w-full flex-shrink-0">
                   <div className="relative h-96">
                     <img 
                       src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                       alt="Luxury Car 3"
                       className="w-full h-full object-cover rounded-lg"
                     />
                     <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                       <h3 className="text-2xl font-bold text-white">Lamborghini Aventador</h3>
                       <p className="text-gray-200">Pure automotive excellence</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

             {/* Navigation Buttons */}
             <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
               <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
               </svg>
             </button>
             <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
               <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </button>

             {/* Dots Indicator */}
             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
               <button className="h-2 w-2 rounded-full bg-white opacity-75 hover:opacity-100"></button>
               <button className="h-2 w-2 rounded-full bg-white opacity-75 hover:opacity-100"></button>
               <button className="h-2 w-2 rounded-full bg-white opacity-75 hover:opacity-100"></button>
             </div>
           </div>
         </div>
       </div>

       
       <div className="py-20 bg-gray-100 min-h-[50vh]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <h2 className="text-3xl font-bold text-gray-900">What luxury car owners say</h2>
             <p className="mt-4 text-lg text-gray-600">Trusted by elite car enthusiasts worldwide</p>
           </div>
           <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             <div className="bg-white rounded-lg shadow-lg p-8">
               <div className="flex items-center">
                 <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                 <div className="ml-4">
                   <div className="text-lg font-medium text-gray-900">Robert Sterling</div>
                   <div className="text-gray-600">CEO, Fortune 500 Company</div>
                 </div>
               </div>
               <p className="mt-4 text-gray-600">"Goyal Garage's attention to detail with my Rolls-Royce Phantom is impeccable. Their service level matches the luxury standards I expect. Simply outstanding."</p>
             </div>
             <div className="bg-white rounded-lg shadow-lg p-8">
               <div className="flex items-center">
                 <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                 <div className="ml-4">
                   <div className="text-lg font-medium text-gray-900">Michael Chang</div>
                   <div className="text-gray-600">Professional Sports Icon</div>
                 </div>
               </div>
               <p className="mt-4 text-gray-600">"My Ferrari collection has never been in better hands. Their expertise in handling high-performance vehicles is unmatched. They treat each car like a masterpiece."</p>
             </div>
             <div className="bg-white rounded-lg shadow-lg p-8">
               <div className="flex items-center">
                 <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                 <div className="ml-4">
                   <div className="text-lg font-medium text-gray-900">Alexander Wright</div>
                   <div className="text-gray-600">Real Estate Magnate</div>
                 </div>
               </div>
               <p className="mt-4 text-gray-600">"From my Bentley to my Lamborghini, every vehicle receives exceptional care. Their knowledge of luxury automobiles and dedication to perfection is remarkable."</p>
             </div>
           </div>
         </div>
       </div>
       <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <svg className="h-8 w-auto text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ml-2 text-xl font-bold">Goyal Garage</span>
            </div>
            <p className="mt-4 text-gray-400">Premium automotive services for discerning clients. Experience luxury and performance.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Luxury Car Sales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Premium Maintenance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Custom Modifications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Detailing Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Luxury Lane</li>
              <li>Mumbai, India</li>
              <li>Phone: +91 123 456 7890</li>
              <li>Email: info@goyalgarage.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Goyal Garage. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.1,3.3,9.1,5.47V7.46H5.27v4.37h3.83V21.5h5.4V11.83h4.2l.55-4.37Z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.43,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.95,4.57a10,10,0,0,1-2.82.77,4.96,4.96,0,0,0,2.16-2.72,9.9,9.9,0,0,1-3.12,1.19A4.92,4.92,0,0,0,11.8,7.3,14,14,0,0,1,1.64,2.9,4.92,4.92,0,0,0,3.2,9.72,4.86,4.86,0,0,1,1,9.1v.06a4.93,4.93,0,0,0,3.95,4.83,4.86,4.86,0,0,1-2.22.08,4.93,4.93,0,0,0,4.6,3.42A9.87,9.87,0,0,1,0,19.54a13.94,13.94,0,0,0,7.55,2.21A13.9,13.9,0,0,0,21.63,7.72c0-.21,0-.42,0-.63A10,10,0,0,0,24,4.59Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
       
    </div>
   
  )
}

export default App
