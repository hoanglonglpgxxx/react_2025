import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CitiesList from "./components/CityList";
import CountriesList from "./components/CountriesList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./context/CitiesContext";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CitiesList />}></Route>
            <Route path="cities/:id" element={<City />}></Route>
            <Route path="countries" element={<CountriesList></CountriesList>}></Route>
            <Route path="form" element={<Form />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
