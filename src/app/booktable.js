import React from 'react';

const BookTable = () => {
  const books = [
    {
      title: "Ending Aging",
      author: "Aubrey de Grey",
      recommendations: "Protein intake; omega-3 fatty acids; fisetin & quercetin; vitamins C & E; coQ10; L-carnitine, ALA; low sugar diet; curcumin & resveratrol; sulforaphane (broccoli); NAD+ precursors; spermidine",
      bookLink: "https://www.amazon.com/Ending-Aging-Rejuvenation-Breakthroughs-Lifetime/dp/0312367074",
      amazonLink: "https://www.amazon.com/hz/wishlist/ls/1Q7YP51YBCNX1?ref_=wl_share" // Placeholder for Amazon link
    },
    {
      title: "Lifespan",
      author: "David Sinclair",
      recommendations: "Resveratrol; blueberries; peanuts; NAD+ precursors; IF; exercise; cold exposure",
      bookLink: "https://www.amazon.com/Lifespan-Why-Age-Dont-Have/dp/0008380325",
      amazonLink: "https://www.amazon.com/hz/wishlist/ls/1481DJXKBJJUY?ref_=wl_share" // Placeholder for Amazon link
    },
    {
        title: "The Longevity Code",
        author: "Kris Verburgh",
        recommendations: "Quercetin (apples, grapes, berries); fisetin (strawberries); resveratrol (grapes, berries)",
        bookLink: "https://www.amazon.com/Longevity-Code-Secrets-Living-Science/dp/1615194975",
        amazonLink: "https://www.amazon.com/hz/wishlist/ls/2ULYRLFXFLY6G?ref_=wl_share"
    },
    {
        title: "Juvenescence",
        author: "Jim Mellon and Al Chalabi",
        recommendations: "Fisetin and quercetin",
        bookLink: "https://www.amazon.com/dp/B075WXX93Q",
        amazonLink: "https://www.amazon.com/hz/wishlist/ls/2ULYRLFXFLY6G?ref_=wl_share"
    },
    {
        title: "Time of Our Lives",
        author: "Tom Kirkwood",
        recommendations: "Selenium; Vit C; Vit E; Omega-3; Resveratrol; coQ10; curcumin",
        bookLink: "https://www.amazon.com/Time-Our-Lives-Science-Human/dp/0195139267",
        amazonLink: "https://www.amazon.com/hz/wishlist/ls/31VV8FW1WT6KY?ref_=wl_shareD"
    },
    {
        title: "The Longevity Diet",
        author: "Valter Longo",
        recommendations: "Low-calorie, low-protein, low-carb, high-fat diet; plant-based diet with fish consumption; Intermittent Fasting and time-restricted feeding",
        bookLink: "https://www.amazon.com/Longevity-Diet-Disease-Optimize-Weight/dp/0525534091",
        amazonLink: ""
    },
    {
        title: "The Youth Pill",
        author: "David Stipp",
        recommendations: "Resveratrol; rapamycin(🫙); metformin(🫙); astragalus",
        bookLink: "https://www.amazon.com/Youth-Pill-Scientists-Anti-Aging-Revolution-ebook/dp/B003UYURY2?",
        amazonLink: "https://www.amazon.com/hz/wishlist/ls/PO6GWISX2JXS?ref_=wl_share"
    },
    {
        title: "A Means to an End",
        author: "William Clark",
        recommendations: "Berries; dark chocolate; nuts; green tea; Vit C; Vit E; coQ10",
        bookLink: "https://www.amazon.com/Means-End-Biological-Basis-Aging/dp/0195153758",
        amazonLink: "https://www.amazon.com/hz/wishlist/ls/1UOWM6I8IRQNJ?ref_=wl_share"
    },
    {
        title: "Blue Zones",
        author: "Dan Buettner",
        recommendations: "Plant-based diet; moderate caloric intake",
        bookLink: "https://www.amazon.com/Blue-Zones-Lessons-Living-Longest/dp/1426207557",
        amazonLink: ""
    },
    {
        title: "Transcend",
        author: "Ray Kurzweil and Terry Grossman",
        recommendations: "Cruciferous vegetables; fruits high in antioxidants; water",
        bookLink: "https://www.amazon.com/Transcend-Nine-Steps-Living-Forever/dp/1605292079",
        amazonLink: ""
    },
    {
        title: "Cracking the Aging Code",
        author: "Josh Mitteldorf and Dorion Sagan",
        recommendations: "Moderate and varied exercise instead of intense; caloric restriction",
        bookLink: "https://www.amazon.com/Cracking-Aging-Code-Science-Growing/dp/1250061717",
        amazonLink: ""
    },
    {
        title: "Age Later",
        author: "Nir Barzilai",
        recommendations: "Moderate alcohol and coffee consumption; caloric restriction; metformin (🫙)",
        bookLink: "https://www.amazon.com/Age-Later-Health-Science-Longevity-ebook/dp/B0818MYCRR?qid=&sr=",
        amazonLink: ""
    },
    // ... add other books here
  ];
    return (
        <>
      <div className="min-h-screen bg-gray-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-cyan-500">
            Infinite Life List 
          </h1>
          <p className="text-sm sm:text-base text-center text-gray-300 mb-8">
            A list of the key items recommended in the most popular longevity books, along with links to amazon lists to buy them.
          </p>
          <p className="text-sm sm:text-base text-center text-gray-300 mb-8">
            This list is <a className='underline' href='https://github.com/AbhisekBasu1/Infinite-Life-List'>100% open source</a> and has NO affiliate links ❤️
          </p>
          <a href='https://www.amazon.com/hz/wishlist/ls/2RG3OSJ31IE8L?ref_=wl_share'>
            <p className="underline text-sm sm:text-base text-cyan-400 text-center mb-12">
              Click here for a full list containing all the items
            </p>
          </a>
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="min-w-full bg-black bg-opacity-80 text-gray-300">
              <thead className="text-sm sm:text-base bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left">Title</th>
                  <th className="px-4 py-3 text-left">Author(s)</th>
                  <th className="px-4 py-3 text-left">Key Recommendations</th>
                  <th className="px-4 py-3 text-left">Amazon List</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={book.title} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}>
                    <td className="px-4 py-3">
                      <a href={book.bookLink || "#"} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                        {book.title}
                      </a>
                    </td>
                    <td className="px-4 py-3">{book.author}</td>
                    <td className="px-4 py-3">{book.recommendations}</td>
                    <td className="px-4 py-3">
                      {book.amazonLink ? (
                        <a href={book.amazonLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">List Link</a>
                      ) : (
                        "Nothing to buy! ✊🏻" 
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm sm:text-base text-center text-gray-300 mt-2 mb-8">
            Items marked with an empty jar icon (🫙) are either not available on Amazon or require a prescription.
          </p>
        </div>
        <footer className="mt-12 bg-gray-800 text-center py-4">
          <p className="text-gray-400 text-sm">
            Made with <span className="text-red-500">❤️</span> by <a className='underline' href='https://www.brightmirror.co/'>Bright Mirror</a>
          </p>
        </footer>
      </div>
    </>
    )
};

export default BookTable;
