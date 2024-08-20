import Image from "next/image";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-16 bg-lime-500">
      <div className="absolute left-[0.7vw] w-3/4 inline-flex justify-center top-[7vh]">
        <h2 className="text-[9vh] text-white font-bold">Vítejte na stránkách<br />Hronovského jablíčka</h2>
      </div>
      <div className="flex flex-col  container mx-auto">
        <div className="">
          <Image
            src="/jablicko-logo.png"
            alt="jablicko-logo"
            className="dark:invert"
            width={150}
            height={40}
            priority
          />
        </div>
        <div className="flex justify-between ">
          <ul className="">
            <a className="" href="#"><li className="bg-red-600 rounded-r-full text-center text-sm mx-0 my-2 p-2  w-10/12 hover:w-full">PROPOZICE</li></a>
            <li className="bg-red-600 rounded-r-full text-center text-sm mx-0 my-2 p-2  w-10/12 hover:w-full">PŘIHLÁŠENÍ</li>
            <li className="bg-red-600 rounded-r-full text-center text-sm mx-0 my-2 p-2  w-10/12 hover:w-full">HARMONOGRAM</li>
            <li className="bg-red-600 rounded-r-full text-center text-sm mx-0 my-2 p-2  w-10/12 hover:w-full">POROTA</li>
            <li className="bg-red-600 rounded-r-full text-center text-sm mx-0 my-2 p-2  w-10/12 hover:w-full">VÝSLEDKY</li>
            <li className="bg-red-600 rounded-r-full text-center text-sm mx-0 my-2 p-2  w-10/12 hover:w-full">FOTOGALERIE</li>
            <li className="bg-red-600 rounded-r-full text-center text-sm mx-0 my-2 p-2  w-10/12 hover:w-full">HISTORIE</li>
            <li className="bg-red-600 rounded-r-full text-center text-sm mx-0 my-2 p-2  w-10/12 hover:w-full">KE STAŽENÍ</li>
            <li className="bg-red-600 rounded-r-full text-center text-sm mx-0 my-2 p-2  w-10/12 hover:w-full">KONTAKTY</li>
            <li className="bg-red-600 rounded-r-full text-center text-sm mx-0 my-2 p-2  w-10/12 hover:w-full">IMPORT HARMONOGRAMU</li>
          </ul>
        </div>
      </div>
      <div className="text-white mt-[30vh]">
        <a href="#">
          <h3 className="m text-[4vh] ml-5 mt-6 mb-20"><u>Novinky na rok 2024</u></h3>
        </a>
        <h4>September 16-18, 2025<br />Paragon One Plaza and Sky Garden
        </h4>

        <h3 className="mb-5 mt-20">Odkaz na záznam soutěže:</h3>
        <div className="mt-5 mr-10 rounded-full bg-yellow-500">
          <a className="items-center" href="#">
            <h3 className="text-black text-center  rounded pr-4 pt-4 pb-4 ">
              <u>HTTPS://WWW.YOUTUBE.COM/LIVE/UMRJOZRBHGW</u>
            </h3>
          </a>

        </div>
      </div>
      <div className="">
        <img className="h-full object-cover" src="img/main-page-foto.jpg" alt="children are dancing" />
      </div>

    </main>
  );
}
