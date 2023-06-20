import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AUnirseGrupo = React.lazy(() => import("pages/AUnirseGrupo"));
const UProfesor = React.lazy(() => import("pages/UProfesor"));
const UAlumno = React.lazy(() => import("pages/UAlumno"));
const Contrasea = React.lazy(() => import("pages/Contrasea"));
const PGrupos = React.lazy(() => import("pages/PGrupos"));
const PCrearGrupo = React.lazy(() => import("pages/PCrearGrupo"));
const UProfesorTwo = React.lazy(() => import("pages/UProfesorTwo"));
const UProfesorOne = React.lazy(() => import("pages/UProfesorOne"));
const CrearCuenta = React.lazy(() => import("pages/CrearCuenta"));
const AGrupos = React.lazy(() => import("pages/AGrupos"));
const DesktopSix = React.lazy(() => import("pages/DesktopSix"));
const DesktopFive = React.lazy(() => import("pages/DesktopFive"));
const DesktopFour = React.lazy(() => import("pages/DesktopFour"));
const CrearCuentaOne = React.lazy(() => import("pages/CrearCuentaOne"));
const Calendario = React.lazy(() => import("pages/Calendario"));
const DesktopThree = React.lazy(() => import("pages/DesktopThree"));
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const Inicio = React.lazy(() => import("pages/Inicio"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route path="/desktopthree" element={<DesktopThree />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/crearcuentaone" element={<CrearCuentaOne />} />
          <Route path="/desktopfour" element={<DesktopFour />} />
          <Route path="/desktopfive" element={<DesktopFive />} />
          <Route path="/desktopsix" element={<DesktopSix />} />
          <Route path="/agrupos" element={<AGrupos />} />
          <Route path="/crearcuenta" element={<CrearCuenta />} />
          <Route path="/uprofesorone" element={<UProfesorOne />} />
          <Route path="/uprofesortwo" element={<UProfesorTwo />} />
          <Route path="/pcreargrupo" element={<PCrearGrupo />} />
          <Route path="/pgrupos" element={<PGrupos />} />
          <Route path="/contrasea" element={<Contrasea />} />
          <Route path="/ualumno" element={<UAlumno />} />
          <Route path="/uprofesor" element={<UProfesor />} />
          <Route path="/aunirsegrupo" element={<AUnirseGrupo />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
