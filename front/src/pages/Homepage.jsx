const Homepage = () => {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <img src="/logo.png" className="w-[300px] h-auto" alt="Logo" />
          <h1 className="text-3xl font-bold text-red-500 mt-5">
            The Website is under construction
          </h1>

          <h1 className="text-[50px] font-bold font-bangla">
            এই ওয়েবসাইটি তৈরী চলমান আছে।
          </h1>
        </div>
      </div>
    </>
  );
};

export default Homepage;
