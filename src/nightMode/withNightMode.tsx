import React from 'react'
import { NightModeContext, NightModeProps } from './nightMode'

// Good
export const withNightMode = <OriginalProps extends {}>(
  WrappedComponent: React.ComponentType<OriginalProps & NightModeProps>
) => {
  return (props: OriginalProps): React.ReactElement => (
    <NightModeContext.Consumer>
      {({ nightMode }: NightModeProps): React.ReactElement => (
        <WrappedComponent nightMode={nightMode} {...props} />
      )}
    </NightModeContext.Consumer>
  )
}

// Bad
// export const withNightMode = (WrappedComponent: React.ComponentType<NightModeProps>) => {
//   return (): React.ReactElement => (
//     <NightModeContext.Consumer>
//       {({ nightMode }: NightModeProps): React.ReactElement => (
//         <WrappedComponent nightMode={nightMode} />
//       )}
//     </NightModeContext.Consumer>
//   )
// }
