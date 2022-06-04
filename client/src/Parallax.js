export default function Parallax() {
  return (
    <section
      className="container flex items-center justify-center h-[50vh]  bg-fixed bg-center bg-cover  "
      style={{
        backgroundImage: `url('https://images.immediate.co.uk/production/volatile/sites/4/2021/08/mountains-7ddde89.jpg?quality=90&resize=768,574')`,
      }}
    >
      <div class="p-5 text-2xl text-white bg-purple-dark bg-opacity-50 rounded-xl">
        Parralax inline
      </div>
    </section>
  );
}
