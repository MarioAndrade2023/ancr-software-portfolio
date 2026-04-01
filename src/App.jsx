function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

      {/* Nombre de la Marca */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-pokemon-accent">
        ANCR <span className="text-transparent bg-clip-text bg-gradient-to-r from-pokemon-psychic to-pokemon-electric">Software</span>
      </h1>
      
      {/* Tu Nombre */}
      <h2 className="text-xl md:text-2xl font-light text-pokemon-muted mb-8">
        por <strong className="font-semibold text-pokemon-accent">Mario Jesús Andrade Cruz</strong>
      </h2>

      {/* Descripción técnica */}
      <p className="max-w-2xl text-pokemon-muted text-lg md:text-xl leading-relaxed font-light">
        Desarrollador Backend especializado en construir sistemas escalables, bases de datos robustas y arquitecturas eficientes.
      </p>

    </main>
  )
}

export default App