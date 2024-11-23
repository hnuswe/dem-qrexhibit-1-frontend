import Admin from "./components/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Visitor from "./components/Visitor";
import LandingPage from "./components/LandingPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route index path="/" element={<LandingPage />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/visitor" element={<Visitor />} />
			</Routes>
		</Router>
	);
}

export default App;
