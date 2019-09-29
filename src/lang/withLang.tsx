import React from 'react'
import { LangContext, LangProps } from './lang'

// Good
export const withLang = <OriginalProps extends {}>(
  WrappedComponent: React.ComponentType<OriginalProps & LangProps>
) => {
  return (props: OriginalProps): React.ReactElement => (
    <LangContext.Consumer>
      {({ lang }: LangProps): React.ReactElement => <WrappedComponent lang={lang} {...props} />}
    </LangContext.Consumer>
  )
}

// Bad
// export const withLang = (WrappedComponent: React.ComponentType<LangProps>) => {
//   return (): React.ReactElement => (
//     <LangContext.Consumer>
//       {({ lang }: LangProps): React.ReactElement => <WrappedComponent lang={lang} />}
//     </LangContext.Consumer>
//   )
// }
