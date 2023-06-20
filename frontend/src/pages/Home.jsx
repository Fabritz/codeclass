import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home">
    
      <ul>
        <li>
          <Link to="/inicio">Inicio</Link>
        </li>
        <li>
          <Link to="/desktoptwo">DesktopTwo</Link>
        </li>
        <li>
          <Link to="/desktopthree">DesktopThree</Link>
        </li>
        <li>
          <Link to="/calendario">Calendario</Link>
        </li>
        <li>
          <Link to="/crearcuentaone">CrearCuentaOne</Link>
        </li>
        <li>
          <Link to="/desktopfour">DesktopFour</Link>
        </li>
        <li>
          <Link to="/desktopfive">DesktopFive</Link>
        </li>
        <li>
          <Link to="/desktopsix">DesktopSix</Link>
        </li>
        <li>
          <Link to="/agrupos">AGrupos</Link>
        </li>
        <li>
          <Link to="/crearcuenta">CrearCuenta</Link>
        </li>
        <li>
          <Link to="/uprofesorone">UProfesorOne</Link>
        </li>
        <li>
          <Link to="/uprofesortwo">UProfesorTwo</Link>
        </li>
        <li>
          <Link to="/pcreargrupo">PCrearGrupo</Link>
        </li>
        <li>
          <Link to="/pgrupos">PGrupos</Link>
        </li>
        <li>
          <Link to="/contrasea">Contrasea</Link>
        </li>
        <li>
          <Link to="/ualumno">UAlumno</Link>
        </li>
        <li>
          <Link to="/uprofesor">UProfesor</Link>
        </li>
        <li>
          <Link to="/aunirsegrupo">AUnirseGrupo</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
