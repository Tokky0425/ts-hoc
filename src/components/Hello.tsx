import React from 'react'
import { withLang, LangProps } from '../lang'
import { withNightMode, NightModeProps } from '../nightMode'

type HelloProps = LangProps & NightModeProps

const HelloComponent: React.FC<HelloProps> = ({ lang, nightMode }): React.ReactElement => {
  const background = nightMode
    ? 'linear-gradient(45deg, #485563, #29323c)'
    : 'linear-gradient(45deg, #fe8c00, #f83600)'

  const text = lang === 'ja' ? 'こんにちは、世界。' : 'Hello, world.'

  return (
    <div style={{ background }}>
      <h1>{text}</h1>
    </div>
  )
}

export const Hello = withNightMode(withLang(HelloComponent))
