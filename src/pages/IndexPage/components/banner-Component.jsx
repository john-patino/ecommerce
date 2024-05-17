


const BannerComponent = ({Title,Description,ButtonText , UrlImage}) => {
  return (
    <section className="flex lg:flex-row flex-col w-full items-center justify-center h-96 lg:justify-around bg-gray-100 gap-5">
        <div className="flex flex-col max-w-lg max-h-52 justify-center gap-5">
            <h2 className="text-black font-bold text-3xl capitalize antialiased">{Title}</h2>
            <p className="text-gray-600 body-font text-lg antialiased max-h-32 break-all overflow-y-hidden">{Description}</p>
            <button className="btn btn-wide rounded-md bg-black text-white">{ButtonText}</button>
        </div>
        <div className=" h-full p-4 max-w-md">
            <img alt="BannerImage" src={UrlImage} className="object contain"/ >
        </div>
    </section>
  );
};

export default BannerComponent;
