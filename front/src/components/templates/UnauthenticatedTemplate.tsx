import { getAuth } from 'firebase/auth'
import { ReactNode } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

interface IProps {
  children: ReactNode
}
/**
 * @desc a template that only renders if the user is unauthenticated
 * @param children child ccomponents from parent
 * @returns children if unauthenticated
 */
const UnauthenticatedTemplate = ({ children }: IProps) => {
  const [user] = useAuthState(getAuth())

  return user === null || user === undefined ? <>{children}</> : <></>
}

export { UnauthenticatedTemplate }
