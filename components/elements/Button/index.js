export default function Button({placeholder}) {
  return (
    <button className=" rounded-lg bg-primary-brown border border-black px-6 py-2 w-fit">
      <p className=" text-black font-nunito text-sm lg:text-base">{placeholder}</p>
    </button>
  );
}
