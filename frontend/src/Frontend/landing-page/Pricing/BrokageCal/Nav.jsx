import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="container pricing pt-[5.6rem]">
      <div className="flex mx-2 pb-2 border-b border-zinc-300">
        <div className="">
          <NavLink className={({isActive}) => isActive?"navActive":undefined} to="equity">Equity</NavLink>
        </div>
        <div className="">
          <NavLink className={({isActive}) => isActive?"navActive":undefined} to="currency">Currency</NavLink>
        </div>
        <div className="">
          <NavLink className={({isActive}) => isActive?"navActive":undefined} to="commodity">Commodity</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
