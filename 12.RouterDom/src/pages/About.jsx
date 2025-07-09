import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link to="employee"> Calisanlar hakkinda</Link>
      <Link to="company"> Sirketler hakkinda</Link>
      <Outlet />
    </div>
  );
}

export default About;
