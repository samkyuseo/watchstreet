import { getAuth } from "firebase/auth";
import { ReactNode } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

interface IProps {
  children: ReactNode;
}
/**
 * @desc a template that only renders if the user is authenticated
 * @param children child ccomponents from parent
 * @returns children if authenticated
 */
const AuthenticatedTemplate = ({ children }: IProps) => {
  const [user] = useAuthState(getAuth());

  if (user) {
    return <>{children}</>;
  }

  return <></>;
};

export { AuthenticatedTemplate };
