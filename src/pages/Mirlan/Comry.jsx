import React from 'react';

export default function BlogAndArticleSection() {
  const blogPosts = [1, 2, 3, 4];

  const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra faucibus. Phasellus id enim libero.";

  return (
    <div className="w-full bg-white py-12 font-sans antialiased text-gray-950">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Blog</h2>
              <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-colors">
                All articles
              </button>
            </div>
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-gray-50 border border-gray-200 text-gray-600 rounded flex items-center justify-center hover:bg-gray-100 transition-colors">
                ‹
              </button>
              <button className="w-10 h-10 bg-red-600 text-white rounded flex items-center justify-center hover:bg-red-700 transition-colors">
                ›
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((item) => (
              <div key={item} className="flex flex-col group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-3 aspect-[4/3] bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=500&q=80" 
                    alt="Family in a car" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs text-gray-400 font-medium mb-1">
                  October 25
                </span>
                <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-red-600 transition-colors">
                  Test Skoda Karoq Scout - urban dwarf or real scout
                </h3>
              </div>
            ))}
          </div>
        </div>


        <div className="max-w-6xl space-y-8">
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Heading</h2>
            <p className="text-xs leading-relaxed text-gray-400 text-justify">
              {loremText}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Subheading</h3>
            <p className="text-xs leading-relaxed text-gray-400 text-justify">
              {loremText}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Subheading</h3>
            <p className="text-xs leading-relaxed text-gray-400 text-justify">
              {loremText}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}