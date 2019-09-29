import React from 'react'

export interface NightModeProps {
  nightMode?: boolean
}

const defaultNightMode = {
  nightMode: false,
}

const setMode = (nightMode: NightModeProps = {}): NightModeProps => ({
  ...defaultNightMode,
  ...nightMode,
})

export const NightModeContext = React.createContext<NightModeProps>(setMode())

export const NightModeProvider: React.FC<NightModeProps> = ({ children, ...props }) => {
  return (
    <NightModeContext.Provider value={setMode({ ...props } || {})}>
      {children}
    </NightModeContext.Provider>
  )
}
