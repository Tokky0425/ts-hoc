import React from 'react'
import { Hello } from './components'
import { NightModeProvider } from './nightMode'
import { LangProvider } from './lang'

const App: React.FC = () => {
  return (
    <LangProvider lang={'ja'}>
      <NightModeProvider nightMode={true}>
        <Hello />
      </NightModeProvider>
    </LangProvider>
  )
}

export default App
