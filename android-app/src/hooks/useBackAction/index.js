import { useEffect, useRef } from "react";
import { Alert, BackHandler } from "react-native";
import { useLocation, useNavigate } from "react-router-native";
import { getPreviousRoute, canAddToHistory, message } from "./helper";

const useBackAction = (initialPath) => {
  const initializedHistory = useRef(["/"]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pathRef = useRef();
  const before = useRef();

  const backAction = (actualPath) => {
    if (actualPath === "/*") Alert.alert(...message);
    else navigate(initialPath + initializedHistory.current[before.current]);
    if (initializedHistory.current.length > 1) initializedHistory.current.pop();
    return true;
  };

  //init listener once
  useEffect(() => {
    const caller = () => backAction(pathRef.current);
    BackHandler.addEventListener("hardwareBackPress", caller);
    return () => BackHandler.removeEventListener("hardwareBackPress", caller);
  }, []);

  //listen to navigation
  useEffect(() => {
    pathRef.current = pathname.substring(initialPath.length);
    canAddToHistory(pathRef.current, initializedHistory.current);
    before.current = getPreviousRoute(
      initializedHistory.current,
      pathRef.current
    );
  }, [pathname]);
};
export default useBackAction;
