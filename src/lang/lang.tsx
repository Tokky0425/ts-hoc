import React from 'react'

export interface LangProps {
  lang?: 'en' | 'ja'
}

const defaultLang: LangProps = {
  lang: 'en',
}

const setLang = (lang: LangProps = {}): LangProps => ({
  ...defaultLang,
  ...lang,
})

export const LangContext = React.createContext<LangProps>(setLang())

export const LangProvider: React.FC<LangProps> = ({ children, ...props }) => {
  return <LangContext.Provider value={setLang({ ...props } || {})}>{children}</LangContext.Provider>
}
