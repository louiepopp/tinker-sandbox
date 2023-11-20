import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();


export const useNavigate = () => (name: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};
