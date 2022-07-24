import { BackHandler } from "react-native";

const getPreviousRoute = (routes, actualPath) => {
  const lastIndexOfPath = routes.lastIndexOf(actualPath);
  if (!actualPath) return 0;
  if (lastIndexOfPath == "-1" || lastIndexOfPath <= 0) return lastIndexOfPath;
  return lastIndexOfPath - 1;
};

const canAddToHistory = (path, history) => {
  const lastPath = history[history.length - 1];
  if (lastPath === path || !path) return;
  return history.push(path);
};

const message = [
  "estas a punto de salir",
  "estas seguro?",
  [
    { text: "Cancelar", onPress: () => null },
    {
      text: "Si, estoy seguro",
      onPress: () => BackHandler.exitApp(),
    },
  ],
];

export { canAddToHistory, getPreviousRoute, message };
