import { Sparkles, BookOpen, Hammer, Network } from 'lucide-react'
import { motion } from 'framer-motion'

const hubs = [
  {
    id: 'bazaar',
    title: 'The Astral Bazaar',
    icon: Sparkles,
    desc: 'Trade enchanted artifacts, skins and spells born of stardust.',
    accent: 'from-fuchsia-500/30 to-amber-400/30'
  },
  {
    id: 'library',
    title: 'The Whispering Library',
    icon: BookOpen,
    desc: 'An AI-curated vault where books flutter like moths in moonlight.',
    accent: 'from-emerald-500/30 to-cyan-400/30'
  },
  {
    id: 'forge',
    title: 'The Forge of Echoes',
    icon: Hammer,
    desc: 'Collaborative creation studio for art, music and living stories.',
    accent: 'from-violet-500/30 to-fuchsia-400/30'
  },
  {
    id: 'nexus',
    title: 'The Root Nexus',
    icon: Network,
    desc: 'A social hub of floating mood‑orbs reflecting community sentiment.',
    accent: 'from-indigo-500/30 to-rose-400/30'
  },
]

export default function Locations() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[110%] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.25),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-emerald-50 tracking-tight">Key Locations</h2>
        <p id="lore" className="mt-3 text-center text-emerald-100/80">Navigate through living hubs that respond to your presence.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub, i) => (
            <motion.a
              key={hub.id}
              href={`#${hub.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/[0.08] transition"
            >
              <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 blur-2xl transition bg-gradient-to-r ${hub.accent}`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white/10 p-3">
                    <hub.icon className="h-6 w-6 text-emerald-100" />
                  </div>
                  <h3 className="text-emerald-50 font-semibold tracking-tight">{hub.title}</h3>
                </div>
                <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">{hub.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
