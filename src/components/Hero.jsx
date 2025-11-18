import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline immersive background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cosmic glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_35%,black,transparent)]">
        <div className="absolute -inset-20 blur-3xl opacity-40" style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, rgba(168,85,247,0.5), rgba(59,130,246,0.5), rgba(16,185,129,0.5), rgba(251,191,36,0.5), rgba(168,85,247,0.5))'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-emerald-200 to-amber-200 drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]"
          >
            Celestia: The Living Tapestry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg md:text-2xl text-emerald-100/90 max-w-3xl mx-auto"
          >
            Commune with a sentient, ever‑evolving realm where every action weaves starlight into a shared myth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#bazaar" className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-black font-semibold">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-400 via-emerald-300 to-amber-300 blur-md opacity-70 group-hover:opacity-100 transition" />
              <span className="relative rounded-full bg-white/90 px-6 py-3">Enter the Realm</span>
            </a>
            <a href="#lore" className="inline-flex items-center rounded-full border border-emerald-300/40 px-6 py-3 text-emerald-100/90 hover:bg-white/5 transition">
              Learn the Lore
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
