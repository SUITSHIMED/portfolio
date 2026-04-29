function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      
      <div className="max-w-3xl text-center">
        
        {/* Small intro */}
        <p className="text-gray-400 mb-4">
          Frontend Developer
        </p>

        {/* Main title */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          I build apps that actually work — not just look good.
        </h1>

        {/* Short description */}
        <p className="text-gray-400 mb-8">
          React & React Native developer focused on building fast, clean and useful products.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition">
            View Projects
          </button>

          <button className="border border-gray-600 px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition">
            Contact Me
          </button>
        </div>

      </div>

    </div>
  )
}

export default App