import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <>
      <nav
        className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
      >
        <div className="container-fluid w-full flex flex-wrap justify-between px-6">
          <div>
            <ul className="navbar-nav flex pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <Link className="Link" to="/">Home</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center relative">
          </div>
        </div>
        <div className=" w-full">
                <h2 className="text-3xl font-bold my-5 text-center">{`INS Company`}</h2>
            </div>
      </nav>

    </>
  )
}

export default NavBar;