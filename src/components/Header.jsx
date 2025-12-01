import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "./BackButton";

function Header({ title = "", showSelectInstitution = false }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isOnFrontPage = ["/", "/meny"].includes(location.pathname);

  return (
    <header className="mb-6 sm:mb-10 w-screen ml-[calc(50%-50vw)] pl-6 sm:pl-10 text-left bg-[#FFE8C2] grid grid-cols-3 grid-rows-5 gap-0">
      <div className="col-span-0 row-span-4">
        {/* Venstre innhold – SmartMaking + select + tilbake */}
        <h1
          onClick={() => navigate("/meny")}
          className="text-4xl sm:text-1xl font-extrabold tracking-tight text-[#E69138] mt-8 cursor-pointer"
        >
          SmartMaking
        </h1>

        <select
          className="mt-3 inline-flex items-center gap-2 text-lg rounded-md px-1  
               hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-orange-400 
               font-semibold text-black bg-gray-100 p-1"
          defaultValue="Høgskolen i Østfold"
          disabled={!showSelectInstitution}
        >
          <option>Høgskolen i Østfold</option>
          <option>OsloMet</option>
        </select>

        {/* // Find out how to show selected institution here, based on prop or CONTEXT */}

        {!isOnFrontPage && (
          <div className="mt-2 flex justify-center sm:justify-start">
            <BackButton />
          </div>
        )}
      </div>
      <div className="col-span-1 row-span-4 flex items-end justify-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-center">
          {title}
        </h2>
      </div>
    </header>
  );
}

// <div className="min-h-screen text-black flex flex-col bg-[#FFFCF8]">
//   {/* HEADER */}
//   <div className="bg-[#FFE8C2]">
//     <div className="px-4 sm:px-10 pt-3 pb-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//       {/*logo + tilbakeknapp */}
//       <div className="text-center sm:text-left">
//         <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#E69138] mt-2">
//           SmartMaking
//         </h1>
//         <div className="text-base sm:text-lg text-black font-semibold">
//           Høgskolen i Østfold: Halden
//         </div>
//         <div className="mt-2 flex justify-center sm:justify-start">
//           <Tilbake />
//         </div>
//       </div>
//     </div>
//      {/*overskriften */}
//       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center pb-10">
//         TEKNOLOGIER
//       </h2>
//   </div>

export default Header;
