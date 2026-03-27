import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, animate } from 'framer-motion'

export default function CursorEffect() {
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  // Inner dot — very fast
  const dotX = useSpring(mouseX, { damping: 35, stiffness: 400, mass: 0.3 })
  const dotY = useSpring(mouseY, { damping: 35, stiffness: 400, mass: 0.3 })

  // Outer ring — slower, more lag
  const ringX = useSpring(mouseX, { damping: 22, stiffness: 130, mass: 0.9 })
  const ringY = useSpring(mouseY, { damping: 22, stiffness: 130, mass: 0.9 })

  // Spring-animated scale for hover states
  const ringScale = useMotionValue(1)
  const dotScale = useMotionValue(1)
  const glowOpacity = useMotionValue(0.15)

  useEffect(() => {
    animate(ringScale, isHovering ? 2.4 : isClicking ? 0.7 : 1, {
      type: 'spring', damping: 22, stiffness: 300,
    })
    animate(dotScale, isHovering ? 0.3 : isClicking ? 1.6 : 1, {
      type: 'spring', damping: 22, stiffness: 300,
    })
    animate(glowOpacity, isHovering ? 0.55 : 0.15, {
      type: 'spring', damping: 25, stiffness: 200,
    })
  }, [isHovering, isClicking, ringScale, dotScale, glowOpacity])

  useEffect(() => {
    const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, [data-cursor]'

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) setIsHovering(true)
      else setIsHovering(false)
    }

    const onDown = () => setIsClicking(true)
    const onUp = () => setIsClicking(false)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Glow halo — behind ring */}
      <motion.div
        style={{ x: ringX, y: ringY, scale: ringScale, opacity: glowOpacity }}
        className="fixed top-0 left-0 z-[9996] pointer-events-none -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FF6B00]"
        css-note="blur applied via filter below"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full bg-[#FF6B00]/60" style={{ filter: 'blur(12px)' }} />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        style={{ x: ringX, y: ringY, scale: ringScale }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div
          className="w-8 h-8 rounded-full border transition-colors duration-150"
          style={{
            borderColor: isHovering ? 'rgba(255,107,0,0.9)' : 'rgba(255,128,0,0.45)',
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        style={{ x: dotX, y: dotY, scale: dotScale }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="w-2 h-2 rounded-full bg-[#FF8000]" />
      </motion.div>
    </>
  )
}
