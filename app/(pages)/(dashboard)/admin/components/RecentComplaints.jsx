import React from "react";
import Link from "next/link";
import TimeAgo from "react-timeago";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import indonesiaStrings from "react-timeago/lib/language-strings/id";
import { Instagram, WhatsApp, X } from "@mui/icons-material";

const RecentComplaints = ({ data }) => {
  const dataSlice = data.slice(0, 3);
  console.log(dataSlice);
  const formatter = buildFormatter(indonesiaStrings);

  return (
    <div className="space-y-6 lg:h-[16rem] flex flex-col justify-between">
      {dataSlice?.map((item) => {
        const time = new Date(item.assignment_date);
        const formattedTime = time
          .toISOString()
          .replace("T", " ")
          .substring(0, 19);

        const platform =
          item.conversation_messages.conversations.social_media.platform;
        return (
          <div key={item.id} className="flex items-center">
            {platform === "INSTAGRAM" && (
              <div className="bg-rose-500 p-2 rounded-full">
                <Instagram className="w-6 h-6 text-white" />
              </div>
            )}
            {platform === "WHATSAPP" && (
              <div className="bg-green-500 p-2 rounded-full">
                <WhatsApp className="w-6 h-6 text-white" />
              </div>
            )}
            {platform === "TWITTER" && (
              <div className="bg-gray-900 p-2 rounded-full">
                <X className="w-6 h-6 text-white" />
              </div>
            )}

            <div className="ml-4">
              <Link
                href={`/chats/${item.id}`}
                className="text-sm font-medium leading-none hover:underline"
              >
                {item.assignment_name}
              </Link>
              <p className="text-sm text-muted-foreground block overflow-hidden w-48 text-ellipsis truncate">
                {item.assignment_detail}
              </p>
            </div>
            <div className="ml-auto font-medium text-sm text-green-500">
              <TimeAgo date={formattedTime} formatter={formatter} />
            </div>
          </div>
        );
      })}

      <Link
        href="/admin/complaints/list-complaints"
        className="text-sm font-medium text-amber-400 block mt-2 hover:underline"
      >
        Lihat selengkapnya{" "}
        <span aria-hidden="true" className="ml-1">
          &rarr;
        </span>
      </Link>
    </div>
  );
};

export default RecentComplaints;
