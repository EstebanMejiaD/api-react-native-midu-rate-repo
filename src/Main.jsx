import { View } from "react-native";
import ReposList from "./components/ReposList.jsx";
import AppBar from "./components/AppBar";
import { Routes, Route } from "react-router-native";
import LoginPage from "./pages/LoginPage.jsx";
const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<ReposList />} />
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
    </View>
  );
};

export default Main;
