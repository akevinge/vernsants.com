import { FC } from "react";
import Link from "next/link";

export const ShopFooter: FC = () => {
  return (
    <footer className="w-1/2 mx-auto flex flex-col sm:flex-row gap-20 items-center justify-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-secondary font-medium text-2xl">
          Contact <span className="text-highlight">Vern</span>
        </h1>
        <ul className="list-none flex flex-col gap-8">
          <li>
            <Link href="mailto:Vern4130@icloud.com?subject=Interested in Buying&body=Hey Vern,%0D">
              <a className="flex items-center gap-6" rel="noopener noreferrer">
                <img className="w-10" src="/icons/mail.svg" alt="" />
                <h1 className="text-highlight text-sm font-bold whitespace-normal xl:whitespace-nowrap">
                  Vern4130@icloud.com
                </h1>
              </a>
            </Link>
          </li>
          <li className="flex items-center gap-6">
            <img className="w-10" src="/icons/discord.svg" alt="" />
            <h1 className="text-highlight text-sm font-bold whitespace-normal xl:whitespace-nowrap">
              VERN530#5621
            </h1>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-secondary font-medium text-2xl whitespace-nowrap">
          Check <span className="text-highlight">Vern&apos;s</span> Socials
        </h1>
        <ul className="list-none flex flex-col gap-8">
          <li>
            <Link href="https://www.instagram.com/myrmidonnationants">
              <a className="flex items-center gap-6" target="_blank">
                <img className="w-10" src="/icons/instagram.svg" alt="" />
                <h1 className="text-highlight text-sm font-bold whitespace-normal xl:whitespace-nowrap">
                  myrmidonnationants
                </h1>
              </a>
            </Link>
          </li>
          <li className="flex items-center gap-6">
            <Link href="https://www.youtube.com/channel/UCVJAjp5K0_lPi4LZXGJFKPQ">
              <a className="flex items-center gap-6" target="_blank">
                <img className="w-10" src="/icons/youtube.svg" alt="" />

                <h1 className="text-highlight text-sm font-bold whitespace-normal xl:whitespace-nowrap">
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
