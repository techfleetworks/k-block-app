import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { YoutubeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SocialChannels() {
  return (
    <div className="bg-neutral-n-0 p-5 rounded-xl drop-shadow-md flex justify-between">
      <div className="flex">
        <p className="text-sm leading-5 font-medium">Website</p>
        <Link
          href="#"
          className="text-primary-b-500 text-sm font-medium leading-5 ml-2"
        >
          kaddex.kdx
        </Link>
      </div>
      <div className="flex">
        <p className="text-sm leading-5 font-medium mr-2">Social Channels</p>
        <DiscordLogoIcon width={24} height={24} className=" mx-1" />
        <GitHubLogoIcon width={24} height={24} className=" mx-1" />
        <TwitterLogoIcon width={24} height={24} className=" mx-1" />
        <InstagramLogoIcon width={24} height={24} className=" mx-1" />
        <YoutubeIcon width={24} height={24} className="ml-1" />
      </div>
    </div>
  );
}
