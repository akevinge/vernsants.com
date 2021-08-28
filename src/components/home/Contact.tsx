import Link from "next/link";
import { FC } from "react";

export const Contact: FC = () => {
  return (
    <footer className="w-screen bg-primary pb-32 flex flex-col gap-40">
      <div className="w-3/4 mx-auto flex flex-col md:grid md:grid-cols-2 gap-28">
        <h1 className="text-secondary font-medium text-5xl">
          Contact <span className="text-highlight">Vern</span>
        </h1>
        <ul className="list-none flex flex-col gap-20">
          <li>
            <Link href="mailto:Vern4130@icloud.com?subject=Interested in Buying&body=Hey Vern,%0D">
              <a className="flex items-center gap-6" rel="noopener noreferrer">
                <img className="w-10" src="/icons/mail.svg" alt="" />
                <h1 className="text-highlight text-xl font-bold whitespace-normal xl:whitespace-nowrap">
                  Vern4130@icloud.com
                </h1>
              </a>
            </Link>
          </li>
          <li className="flex items-center gap-6">
            <img className="w-10" src="/icons/discord.svg" alt="" />
            <h1 className="text-highlight text-xl font-bold whitespace-normal xl:whitespace-nowrap">
              VERN530#5621
            </h1>
          </li>
        </ul>
      </div>
      <div className="w-3/4 mx-auto flex flex-col md:grid md:grid-cols-2 gap-28">
        <h1 className="text-secondary font-medium text-5xl">
          Follow <span className="text-highlight">Vern&apos;s</span> Socials
        </h1>
        <ul className="list-none flex flex-col gap-20">
          <li>
            <Link href="https://www.instagram.com/myrmidonnationants">
              <a className="flex items-center gap-6" target="_blank">
                <img className="w-10" src="/icons/instagram.svg" alt="" />

                <h1 className="text-highlight text-xl font-bold whitespace-normal xl:whitespace-nowrap">
                  myrmidonnationants
                </h1>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/channel/UCVJAjp5K0_lPi4LZXGJFKPQ">
              <a className="flex items-center gap-6" target="_blank">
                <img className="w-10" src="/icons/youtube.svg" alt="" />

                <h1 className="text-highlight text-xl font-bold whitespace-normal xl:whitespace-nowrap">
                  Myrmidon Nation
                </h1>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
