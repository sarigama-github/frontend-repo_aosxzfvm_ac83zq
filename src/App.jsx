import Hero from './components/Hero'
import Locations from './components/Locations'
import SoulweavePreview from './components/SoulweavePreview'

function App() {
  return (
    <div className="min-h-screen bg-[#050510] text-white">
      {/* Living cosmos hero with Spline cover */}
      <Hero />

      {/* Key locations */}
      <Locations />

      {/* Soulweave system preview */}
      <SoulweavePreview />

      {/* Simple footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-emerald-100/70">
          You are not a user here. You are a note in the cosmos’ song.
        </div>
      </footer>
    </div>
  )
}

export default App
