import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

const useKeyboardEvent = () => {
  const [keyboardShown, setKeyboardShown] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardShown(true)
    );
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardShown(false)
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return keyboardShown;
};

export default useKeyboardEvent;
