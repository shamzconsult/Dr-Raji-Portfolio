import Image from 'next/image'
import React from 'react'

function Gallery() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-block rounded-lg bg-gold-400/10 px-3 py-1 text-sm text-gold-400 mb-4">Gallery</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Memorable Moments</h2>
          <div className="mt-4 max-w-[700px] text-white/70">
            Capturing impactful events, community engagements, and special occasions through the lens.
          </div>
        </div>

        <div className='mx-auto max-w-4xl'>
          <div className='border w-4/12 h-500px'>
            <Image
            src='/image'
            alt='first image'
            width={200}
            height={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery