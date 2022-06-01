import { HeroProvider } from "./contexts/HeroContext"
import AppRouter from "./routes/AppRouter"

function App() {

  return (
    <div className="App">
      <HeroProvider>
        <AppRouter />
      </HeroProvider>
    </div>
  )
}

export default App
