import Image from 'next/image'
import React from 'react'

function Gallery() {
  const images = [
    { src: '/images/Dr_Raji_5.webp', alt: 'Event 1' },
    { src: '/images/Dr_Raji_1.webp', alt: 'Event 2' },
    { src: '/images/Dr_Raji_2.webp', alt: 'Event 3' },
    { src: '/images/Dr_Raji_3.webp', alt: 'Event 4' },
    { src: '/images/Dr_Raji_4.webp', alt: 'Event 5' }
  ]

  return (
    <section className="py-16 md:py-24 bg-green-900/50">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-block rounded-lg bg-gold-400/10 px-3 py-1 text-sm text-gold-400 mb-4">Gallery</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">Memorable Moments</h2>
          <div className="mt-4 max-w-[700px] text-white/70">
            Capturing impactful events, community engagements, and special occasions through the lens.
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Column - Large Image */}
            <div className="md:col-span-1 h-full">
              <div className="relative h-full min-h-[300px] md:min-h-[500px] rounded-lg overflow-hidden border-2 border-gold-400/20 hover:border-gold-400/50 transition-all duration-300">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Second Column - Two Images */}
            <div className="md:col-span-1 space-y-4">
              <div className="relative h-[300px] md:h-[240px] rounded-lg overflow-hidden border-2 border-gold-400/20 hover:border-gold-400/50 transition-all duration-300">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="relative h-[300px] md:h-[240px] rounded-lg overflow-hidden border-2 border-gold-400/20 hover:border-gold-400/50 transition-all duration-300">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Third Column - Two Images */}
            <div className="md:col-span-1 space-y-4">
              <div className="relative h-[300px] md:h-[240px] rounded-lg overflow-hidden border-2 border-gold-400/20 hover:border-gold-400/50 transition-all duration-300">
                <Image
                  src={images[3].src}
                  alt={images[3].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="relative h-[300px] md:h-[240px] rounded-lg overflow-hidden border-2 border-gold-400/20 hover:border-gold-400/50 transition-all duration-300">
                <Image
                  src={images[4].src}
                  alt={images[4].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery