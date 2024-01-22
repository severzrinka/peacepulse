import maybe from "/public/maybe.png";

function Header() {
  return (
    <div
      className="boja-200 text-black h-32 flex flex-col items-center w-screen relative border-b-2 border-solid"
      style={{ borderColor: "#72baf7" }}
    >
      <img
        src={maybe}
        className="h-32 w-24 absolute top-0 left-0 hidden sm:block"
      />
      <div className="text-center">
        <h1 className="md:text-5xl mt-12 font-serif text-center black sm:text-2xl">
          Peace Pulse
        </h1>
      </div>
    </div>
  );
}

export default Header;
