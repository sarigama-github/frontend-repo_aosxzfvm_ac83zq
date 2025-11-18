import { motion } from 'framer-motion'

function Orb({ color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="relative h-28 w-28 rounded-full"
      style={{
        background: `radial-gradient(circle at 30% 30%, ${color}AA, transparent 65%)`,
      }}
    >
      <div className="absolute inset-0 rounded-full bg-white/5" />
      <div className="absolute inset-0 rounded-full blur-2xl opacity-60" style={{ background: color }} />
    </motion.div>
  )
}

export default function SoulweavePreview() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-50 tracking-tight">Soulweave System</h2>
            <p className="mt-4 text-emerald-100/80">
              Hatch a spirit companion that evolves with your rituals. Earn Aether Threads to shape traits,
              unlock hidden realms, and weave a living profile tapestry.
            </p>
            <ul className="mt-6 space-y-3 text-emerald-100/80">
              <li>• Procedural avatars that reflect your path</li>
              <li>• Spend threads to gain titles and boons</li>
              <li>• Unlock portals like the Coral Crypt</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-6 place-items-center">
            <Orb color="#a855f7" delay={0.0} />
            <Orb color="#10b981" delay={0.1} />
            <Orb color="#22d3ee" delay={0.2} />
            <Orb color="#f59e0b" delay={0.3} />
            <Orb color="#e879f9" delay={0.4} />
            <Orb color="#84cc16" delay={0.5} />
          </div>
        </div>
      </div>
    </section>
  )
}
