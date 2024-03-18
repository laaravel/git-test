import Link from "next/link";

const Header = () => {
  return (
    <nav id="header" className=" text-black bg-white h-[220px] text-3xl text-center">
      <h2>Header</h2>
      <div className="links flex justify-evenly m-5">
        <div className="text-xl">
          <Link className="btnLink" href='/speaker'>Speakers</Link>
        </div>
        <div className="text-xl">
          <Link className="btnLink" href='/schedule'>Schedule</Link>
        </div>
        <div className="text-xl">
          <Link className="btnLink" href='/about'>About Us</Link>
        </div>
        <div className="text-xl">
          <Link className="btnLink" href='/'>Home</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header