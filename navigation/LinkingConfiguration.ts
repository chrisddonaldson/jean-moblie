import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    Root: {
      screens: {
        Login: "login",
        Register: "register",
        Dashboard: "dashboard",
        Tabata: "tabata",
        Food: "food",
      },
    },
  },
};
