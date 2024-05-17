import { useState, useEffect, useContext } from "react";
import { Cartcontext } from "../context/cartContext";
import LayoutIndex from "../Layouts/layoutIndex";
import CardProducto from "../components/cardProducto";

const Pagination = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([{
    id:"1",
    Image:"https://dummyimage.com/720x600",
    ProductName:"Producto",
    Price:"10000",
    Tematica:"One Piece"
  }]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const { filter, updateFilter } = useContext(Cartcontext);
  const [selectedAnime, setSelectedAnime] = useState(""); // Nuevo estado para almacenar el anime seleccionado en el select
  const [searchQuery, setSearchQuery] = useState(""); // Nuevo estado para almacenar la consulta de búsqueda


  const handlefilter = async (value) => {
    setSelectedAnime("");
    updateFilter(value);
  };

  const filteredData = data.filter((item) => {
    // Filtrar por anime seleccionado
    if (selectedAnime !== "" && item.Tematica !== selectedAnime) {
      return false;
    }

    // Filtrar por consulta de búsqueda
    if (
      searchQuery !== "" &&
      !item.ProductName.toLowerCase().includes(
        searchQuery.toLowerCase()
      )
    ) {
      return false;
    }
    return true;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    // Calculamos la cantidad de páginas disponibles basadas en los datos filtrados
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Si la página actual es mayor que la cantidad de páginas disponibles,
    // establecemos la página actual en 1.
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filter, filteredData, currentPage, itemsPerPage]);

  return (
    <>
      {loading ? (
        <div className="w-screen h-screen flex justify-center flex-col gap-2 items-center">
          <img className=" w-36 my-2 mx-auto" src="/Logo.png" alt="logo" />
          <span className="loading loading-bars loading-sm"></span>
        </div>
      ) : (
        <LayoutIndex>
          <div className="md:flex hidden ml-10 text-sm breadcrumbs"></div>
          <div className="bg-base overflow-y-auto w-full antialiased">
            <div className="flex flex-row relative h-full">
              <div className="flex-1 overflow-auto h-full w-4/5">
                <div className="w-full h-18 justify-between md:flex-row flex-col  gap-5 flex px-6  border-b py-5">
                  <div className="flex justify-center  md:justify-start w-full gap-2 items-center">
                    <select
                      onChange={(e) => setSelectedAnime(e.target.value)}
                      className="select border-black md:w-[255px] w-1/2 max-w-xs"
                    >
                      <option disabled selected>
                        Selecciona Tematica
                      </option>
                      <option value="">Todo</option>
                      <option value="Aesthetic">Aesthetic</option>
                      <option value="One Piece">One Piece</option>

                      <option value="Naruto">Naruto</option>
                      <option value="Attack on Titan">Attack on Titan</option>
                      <option value="Bleach">Bleach</option>
                      <option value="Dragon Ball">Dragon Ball</option>
                    </select>
                    <label className="input input-bordered md:w-[355px] w-1/2 border-black flex items-center gap-2">
                      <input
                        type="text"
                        className="grow"
                        placeholder="Buscar"
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </label>
                  </div>
                  <button
    
                    className={`md:btn-wide btn bg-gray-800 rounded-full text-white text-center`}
                  >
                    Quitar filtros | Ver todos
                  </button>
                </div>

                <div className="w-full h-full flex flex-col">
                  {currentItems.length !== 0 ? (
                    <div className="grid md:grid-cols-4 py-5 px-5 grid-cols-2 gap-5 grid-rows-1">
                      {currentItems.map((item) => (
                        <div key={item.id}>
                          <CardProducto
                            id={item.id}
                            Imagen={item.Image}
                            ProductName={item.ProductName}
                            Price={item.Price}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className=" flex ml-5 my-10 items-center gap-2">
                      <p className="text-2xl font-semibold antialiased">
                        Continuara...
                      </p>
                      <img
                        alt="Continuara"
                        src="/logo.png"
                        className="w-10"
                      />
                    </div>
                  )}

                  {/* Botones de paginación */}

                  <div className="join mx-auto">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 1}
                      className="join-item btn"
                    >
                      «
                    </button>
                    <button className="join-item btn">{currentPage}</button>
                    <button
                      onClick={nextPage}
                      disabled={indexOfLastItem >= filteredData.length}
                      className="join-item btn"
                    >
                      »
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutIndex>
      )}
    </>
  );
};

export default Pagination;
