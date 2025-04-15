import Image from "next/image";


// Tipamos los props
type CardProps = {
    name: string;
    imagePath: string;
  };
  
  // El componente
  export default function Card({ name, imagePath }: CardProps) {
    return (
      <div className="bg-gray-700 rounded-xl relative w-full h-full min-h-48 flex flex-col justify-center items-center">
        <div className=" absolute rounded-xl bg-gray-600 hover:-translate-y-16 transition-transform duration-300 ease-in-out flex w-full h-full justify-center items-center">
        <Image
            aria-hidden
            src="/file.svg" //{imagePath}
            alt="File icon"
            width={16}
            height={16}
          />
            {imagePath}
        </div>
        <div className="flex justify-center items-end  w-full h-full ">{name}</div>

      </div>
    );
  }