import React from 'react'
import LogoLoop from './LoopCode'

const logos = [
  {
    src: "https://res.cloudinary.com/dkmzveqce/image/upload/v1763639424/ChatGPT_Image_Nov_20_2025_11_03_16_AM_nu4g9r.png",
    alt: "JAC Motors",
    href: "https://jacmotors.com",
  },
//   {
//     src: "https://res.cloudinary.com/dkmzveqce/image/upload/v1763639422/ChatGPT_Image_Nov_20_2025_11_19_34_AM_dcxskm.png",
//     alt: "Halfway",
//     href: "https://halfway.co.za",
//     className: "w-50"
//   },
  {
    src: "https://res.cloudinary.com/dkmzveqce/image/upload/v1763643107/ChatGPT_Image_Nov_20_2025_02_48_32_PM_mfd2bt.png",
    alt: "BYD",
    href: "https://byd.com",
  },
]

const Loop = () => {
    return (
    <div className="-mt-3 w-full flex flex-col items-center relative">

        {/* ================= BACKGROUND TITLE ================= */}
        {/* <h2 className="absolute text-[20px] md:text-[30px] font-bold text-gray-400/60 select-none pointer-events-none tracking-tighter">
        Trusted By
        </h2> */}

        {/* ================= LOGO LOOP ================= */}
        <div
        className="my-2 w-full"
        style={{ height: '100px', position: 'relative', overflow: 'hidden' }}
        >
        <LogoLoop
            logos={logos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Brand partners"
        />
        </div>
        
    </div>
    )
}

export default Loop
