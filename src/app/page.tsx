import Image from "next/image";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-16 ">
      <div className="flex flex-col gap-x-1 container mx-auto">
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
            <a className="" href="#"><li className="bg-red-600 rounded-lg text-center text-sm m-2 p-2  w-8/12 hover:w-9/12">PROPOZICE</li></a>

            <li className="bg-red-600 rounded-lg text-center text-sm   m-2 p-2  w-8/12 hover:w-9/12">PŘIHLÁŠENÍ</li>
            <li className="bg-red-600 rounded-lg text-center text-sm m-2 p-2  w-8/12 hover:w-9/12">HARMONOGRAM</li>
            <li className="bg-red-600 rounded-lg text-center text-sm m-2 p-2  w-8/12 hover:w-9/12">POROTA</li>
            <li className="bg-red-600 rounded-lg text-center text-sm m-2 p-2  w-8/12 hover:w-9/12">VÝSLEDKY</li>
            <li className="bg-red-600 rounded-lg text-center text-sm m-2 p-2  w-8/12 hover:w-9/12">FOTOGALERIE</li>
            <li className="bg-red-600 rounded-lg text-center text-sm m-2 p-2  w-8/12 hover:w-9/12">HISTORIE</li>
            <li className="bg-red-600 rounded-lg text-center text-sm  m-2 p-2  w-8/12 hover:w-9/12">KE STAŽENÍ</li>
            <li className="bg-red-600 rounded-lg text-center text-sm m-2 p-2  w-8/12 hover:w-9/12">KONTAKTY</li>
            <li className="bg-red-600 rounded-lg text-center text-sm m-2 p-2  w-8/12 hover:w-9/12">IMPORT HARMONOGRAMU</li>
          </ul>
        </div>
      </div>
      <div className="h-full text-white ">

        <h2 className="text-[6vh] ml-5 mt-10">Vítejte na stránkách<br />Hronovského jablíčka</h2>


        <a href="#">
          <h3 className="m text-[4vh] ml-5 mt-6 mb-20"><u>Novinky na rok 2024</u></h3>
        </a>
        <h4>September 16-18, 2025<br />Paragon One Plaza and Sky Garden
        </h4>
        <div className="mt-28 ">
          <h3 className="mb-5">Odkaz na záznam soutěže:</h3>
          <a className="" href="#">
            <h3 className="text-black text-center inline-block bg-red-600 rounded pr-4 pt-4 pb-4">
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
