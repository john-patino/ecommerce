import LayoutIndex from "../Layouts/layoutIndex";

const Tallas = () => {
  return (
    <LayoutIndex>
      <div className="w-full h-full flex flex-col items-center gap-5">
        <h1 className="uppercase font-extrabold text-5xl text-center">
          Nuestras tallas
        </h1>
        <div className="divider"></div>
        <img
          src={`https://backend-wolf.vercel.app/imagen/Tallas.webp`}
          alt="Nuestras tallas" 
          className="mx-auto w-4/5 "
        />
      </div>
    </LayoutIndex>
  );
};

export default Tallas;
