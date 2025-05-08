'use client'; 

function MobileWarning() {
  return (
    <div className="landscape:hidden fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 text-center">
    <div className="bg-gray-900 p-4 rounded-lg border-2 border-red-500 max-w-xs">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-red-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
        <h2 className="text-white text-xl font-bold mb-2">Please Note</h2>
        <p className="text-gray-300 mb-3">For the best experience with the Globe on mobile please zoom into pin in order to view its content</p>
      <button 
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
        onClick={() => {
          const element = document.querySelector('.landscape\\:hidden');
          if (element) {
            element.classList.add('hidden');
          }
        }}
      >
        Continue Anyway
      </button>
    </div>
  </div>
  )
}

export default MobileWarning