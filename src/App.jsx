import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<LoginPage />} />
    //     <Route path="/register" element={<RegisterPage />} />
    //     <Route path="/homepage" element={<HomeLayouts />} />
    //     <Route path="/daftarsaya" element={<DaftarSaya />} />
    //   </Routes>
    // </Router>

    <RouterProvider router={router} />
  );
}

export default App;
