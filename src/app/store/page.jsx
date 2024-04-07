import Image from "next/image";
import peldanio from "@/assets/shopping/peldanio.webp"

export default function StorePage() {
  return (
    <div className="flex h-screen items-center justify-center bg-indigo-50 px-4">
      <div className="flex flex-col items-center w-160 min-w-120 overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
        <Image
          src={peldanio}
          alt="peldaño"
          height={0}
          width={0}
          style={{ width: "150px", height: "auto" }}
          priority={false}
        />
        <div className="p-5">
          <p className="text-medium mb-5 text-gray-700">
          Peldaño de Acero inoxidable <br />
          Modelo: J619101A000G03 <br />
          Marca: MITSUBISHI
          </p>
          <button className="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
            Cotizar
          </button>
        </div>
      </div>
    </div>
  );
}
