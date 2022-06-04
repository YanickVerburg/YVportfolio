export default function Card() {
  return (
    <div className="min-w-full bg-gradient-to-t from-[#E5D8F6] to-[#E6E4F9] py-16">
      <div className="flex flex-row justify-center  gap-28 flex-[50%]">
        <div className="bg-glass-light rounded-2xl drop-shadow-md hover:drop-shadow-lg w-max justify-center group hover:-translate-y-2 transition ease-in-out duration-[250ms]">
          <img
            src="https://picsum.photos/350/220"
            alt=""
            className="rounded-t-2xl"
          />
          <h1 className="py-5 text-center group-hover:text-purple ease-in-out duration-[600ms]">
            Project 1
          </h1>
        </div>
        <div className="bg-glass-light rounded-2xl drop-shadow-md hover:drop-shadow-lg w-max justify-center group hover:-translate-y-2 transition ease-in-out duration-[250ms]">
          <img
            src="https://picsum.photos/350/220"
            alt=""
            className="rounded-t-2xl"
          />
          <h1 className="py-5 text-center group-hover:text-purple ease-in-out duration-[600ms]">
            Project 2
          </h1>
        </div>
        <div className="bg-glass-light rounded-2xl drop-shadow-md hover:drop-shadow-lg w-max justify-center group hover:-translate-y-2 transition ease-in-out duration-[250ms]">
          <img
            src="https://picsum.photos/350/220"
            alt=""
            className="rounded-t-2xl"
          />
          <h1 className="py-5 text-center group-hover:text-purple ease-in-out duration-[600ms]">
            Project 3
          </h1>
        </div>
      </div>
    </div>
  );
}
