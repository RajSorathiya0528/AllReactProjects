import React from 'react'
import './App.css'
import NaveBar from './componetes/NaveBar'
import Hero from './componetes/Hero'
import About from './componetes/About'
import Technologies from './componetes/Technologies'
import Project from './componetes/Project'
import Content from './componetes/Content'

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
    <div className='fixed top-0 left-0 -z-10 h-full w-full'>
      <div className="absolute top-0 left-0 z-0 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
    <div className='container mx-auto px-8 w-full'>
      <NaveBar />
      <Hero />
      <About />
      <Technologies />
      <Project />
      <Content />
    </div>
</div>
  )
}

export default App
