import React, { FC } from "react";
import Link from "next/link";
import { YoutubeIcon } from "icons/YoutubeIcon";
import { InstagramIcon } from "icons/InstagramIcon";
import { DiscordIcon } from "icons/DiscordIcon";
import { MailIcon } from "icons/MailIcon";

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col sm:flex-row gap-20 items-center justify-center pb-20">
      <div className="flex flex-col gap-8">
        <h1 className="text-secondary font-medium text-2xl">
          Contact <span className="text-highlight">Vern</span>
        </h1>
        <ul className="list-none flex flex-col gap-8">
          <li>
            <Link href="mailto:Vern4130@icloud.com?subject=Interested in Buying&body=Hey Vern,%0D">
              <a className="flex items-center gap-6" rel="noopener noreferrer">
                <MailIcon style={{ width: "2.5rem" }} />

                <h1 className="text-highlight text-sm font-bold whitespace-normal xl:whitespace-nowrap">
                  Vern4130@icloud.com
                </h1>
              </a>
            </Link>
          </li>
          <li className="flex items-center gap-6">
            <DiscordIcon style={{ width: "2.5rem" }} />
            <h1 className="text-highlight text-sm font-bold whitespace-normal xl:whitespace-nowrap">
              VERN530#5621
            </h1>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-secondary font-medium text-2xl whitespace-nowrap">
          Follow <span className="text-highlight">Vern&apos;s</span> Socials
        </h1>
        <ul className="list-none flex flex-col gap-8">
          <li>
            <Link href="https://www.instagram.com/myrmidonnationants">
              <a className="flex items-center gap-6" target="_blank">
                <InstagramIcon style={{ width: "2.2rem" }} />

                <h1 className="text-highlight text-sm font-bold whitespace-normal xl:whitespace-nowrap">
                  myrmidonnationants
                </h1>
              </a>
            </Link>
          </li>
          <li className="flex items-center gap-6">
            <Link href="https://www.youtube.com/channel/UCVJAjp5K0_lPi4LZXGJFKPQ">
              <a className="flex items-center gap-6" target="_blank">
                <YoutubeIcon style={{ width: "2.5rem" }} />

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
