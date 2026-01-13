import React from 'react'

const Bouncer = () => {
  return (
    <div className="bg-gradient-to-r from-slate-950 to-sky-700 h-screen w-full text-center flex flex-col justify-center items-center">
      <div className="inline-block">
        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full shadow-lg animate-bounce"></div>{" "}
      </div>
      <p className="mt-4 text-white text-xl">Searching...</p>
    </div>
  )
}

export default Bouncer