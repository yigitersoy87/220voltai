import React from 'react';

export function Clients() {
  // Logo URL'leri
  const logos = [
    "/images/client1-1-1-min-1.png",          // Johnson & Johnson
    "/images/client2-1-min-1.png",            // Deutsche Bank
    "/images/client3-1-min-1.png",            // P&G
    "/images/client4-1-1-1-1-2 (1).png",      // Verisure
    "/images/client4-1-1-1.png",              // Chivas
    "/images/client9-1-min-1.png",            // ATI Avionics
    "/images/client15-4-min-1.png",           // Astroscale
    "/images/Elementor-Logo-Full-Black-768x154.png", // Elementor
  ];

  // Yorumlar
  const reviews = [
    {
      text: "Yigit delivered the brief in very quick time and was flexible to provide additional versions of the video within the same couple of hours as initially briefing him. The quality of the result was brilliant. He is great to work with and I would recommend him to colleagues and others!",
      author: "Tiffany C.",
      position: "Brand Manager | J&J | USA",
      avatar: "/images/1517339135817.jpeg" // Using the exact image filename
    },
    {
      text: "Very talented guys. They precisely understood the requirement and delivered a very good product. Very time concious too. I would like to work with them on our next project again!",
      author: "Shara F.",
      position: "Vice President | Deutsche Bank | India",
      avatar: "/images/15shara17339135817.jpeg"
    },
    {
      text: "We have been lucky to work with Yigit and his team for over a year now. they are always professional and provide super fast, quality service. it is a pleasure working with them and would recommend for your next project. they are able to understand exactly what you are imagining and can translate that into a perfect product. super talented. A+",
      author: "ZCOMM",
      position: "Ad Agency | USA",
      avatar: "/images/photo-1.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Clients & Reviews</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mb-6"></div>
        </div>

        {/* Logolar - Tek satırda düzenli */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Trusted By Industry Leaders</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center items-center">
            {logos.map((logo, index) => (
              <div 
                key={`logo-${index}`} 
                className="transition-all duration-300 hover:scale-110 p-4 flex items-center justify-center h-32 w-full"
              >
                <img 
                  src={logo} 
                  alt={`Client ${index + 1}`} 
                  className="h-auto max-h-20 w-auto max-w-[160px] object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* İnce ayırıcı çizgi */}
        <div className="w-full h-px bg-gray-200 my-8"></div>
        
        {/* Yorumlar */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-8 text-center">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={`review-${index}`} 
                className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Alıntı işareti */}
                <div className="text-yellow-500 mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.667 12H5.33366C4.22909 12 3.33366 12.8954 3.33366 14V19.3333C3.33366 20.4379 4.22909 21.3333 5.33366 21.3333H8.00033C9.10489 21.3333 10.0003 22.2287 10.0003 23.3333V24.6667C10.0003 25.9553 8.95564 27 7.66699 27H6.66699C6.11471 27 5.66699 26.5523 5.66699 26C5.66699 25.4477 6.11471 25 6.66699 25H7.66699C7.85108 25 8.00033 24.8508 8.00033 24.6667V23.3333C8.00033 23.1492 7.85108 23 7.66699 23H5.33366C3.12452 23 1.33366 21.2091 1.33366 19V14C1.33366 11.7909 3.12452 10 5.33366 10H10.667C12.8761 10 14.667 11.7909 14.667 14V17.3333C14.667 17.8856 14.2193 18.3333 13.667 18.3333C13.1147 18.3333 12.667 17.8856 12.667 17.3333V14C12.667 12.8954 11.7715 12 10.667 12Z" fill="currentColor"/>
                    <path d="M26.667 12H21.3337C20.2291 12 19.3337 12.8954 19.3337 14V19.3333C19.3337 20.4379 20.2291 21.3333 21.3337 21.3333H24.0003C25.1049 21.3333 26.0003 22.2287 26.0003 23.3333V24.6667C26.0003 25.9553 24.9557 27 23.667 27H22.667C22.1147 27 21.667 26.5523 21.667 26C21.667 25.4477 22.1147 25 22.667 25H23.667C23.8511 25 24.0003 24.8508 24.0003 24.6667V23.3333C24.0003 23.1492 23.8511 23 23.667 23H21.3337C19.1245 23 17.3337 21.2091 17.3337 19V14C17.3337 11.7909 19.1245 10 21.3337 10H26.667C28.8761 10 30.667 11.7909 30.667 14V17.3333C30.667 17.8856 30.2193 18.3333 29.667 18.3333C29.1147 18.3333 28.667 17.8856 28.667 17.3333V14C28.667 12.8954 27.7715 12 26.667 12Z" fill="currentColor"/>
                  </svg>
                </div>
                
                {/* Yorum metni */}
                <p className="text-[#454545] font-[Open Sans,sans-serif] text-base font-extralight not-italic no-underline leading-[30px] tracking-[0px] mb-6">{review.text}</p>
                
                {/* Yazar bilgileri */}
                <div className="flex items-center">
                  <img 
                    src={review.avatar} 
                    alt={review.author} 
                    className="w-12 h-12 rounded-full mr-4 border-2 border-yellow-500" 
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{review.author}</p>
                    <p className="text-sm text-gray-500">{review.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-yellow-500 text-gray-800 font-medium rounded-full hover:bg-yellow-600 transition-colors duration-300"
            >
              <span>Become Our Next Success Story</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 