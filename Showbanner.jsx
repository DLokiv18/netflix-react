import React, { useState } from "react"

function Showbanner() {
  const [hides, setHides] = useState(false)
  const [imagehides, setImagehides] = useState(true)

  function handlers() {
    setImagehides(false)
    setHides(true)
  }

  function handlers1() {
    setImagehides(true)
    setHides(false)
  }

  return (
    <>
      <div className="Container3">

        {imagehides && (
          <img
            className="wallpaper-kgf"
            src="/images/iron.jpg"
            alt="banner"
          />
        )}

        {hides && (
          <iframe
            className="parent2"
            src="https://www.youtube.com/embed/KCSNFZKbhZE?autoplay=1&mute=1"
            title="Trailer"
            width="100%"
            height="500"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />
        )}

        <div className="Text">
          <h1 className="h1">Iron Man</h1>

          <p className="description">
            A billionaire genius, Tony Stark builds a high-tech armored suit
            to save his life and becomes the legendary hero Iron Man.
          </p>

          <button className="textbutton" onClick={handlers}>
            Play
          </button>

          <button className="textbutton" onClick={handlers1}>
            Pause
          </button>
        </div>

      </div>
    </>
  )
}

export default Showbanner
