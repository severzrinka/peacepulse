import maybe from "/public/maybe.png";
import iconD from "/public/iconD.png";
import { Link } from "react-router-dom";
import { setpozadina } from "../reduxOperations/actions";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const { boja } = useSelector((state) => state.breath);

  function handleImageClick() {
    dispatch(setpozadina(!boja));
  }

  return (
    <div className="boja-200 zaglavnjeTekst h-32 flex flex-col items-center w-screen relative border-b-2 border-solid">
      {!boja ? (
        <>
          <Link to="/">
            <img
              src={iconD}
              className="h-32 w-24 absolute top-0 left-0 hidden sm:block"
              alt="Logo"
            />
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#cbf5fb"
            className="w-24 h-32 absolute top-0 right-0"
            onClick={handleImageClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </>
      ) : (
        <>
          <Link to="/">
            <img
              src={maybe}
              className="h-32 w-24 absolute top-0 left-0 hidden sm:block"
              alt="Logo"
            />
          </Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#0489b1"
            className="w-24 h-32 absolute top-0 right-0"
            onClick={handleImageClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </>
      )}

      <div className="text-center">
        <h1 className="md:text-5xl mt-12 font-serif text-center sm:text-2xl">
          Peace Pulse
        </h1>
      </div>
    </div>
  );
}

export default Header;
