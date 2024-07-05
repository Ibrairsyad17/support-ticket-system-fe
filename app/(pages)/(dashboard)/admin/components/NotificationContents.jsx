"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TimeAgo from "react-timeago";
import indonesiaStrings from "react-timeago/lib/language-strings/id";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import { BASE_URL } from "@/app/utils/constant";

const NotificationContents = ({ notifications }) => {
  return (
    <div className="space-y-6 h-96 overflow-y-scroll">
      {notifications.length === 0 && (
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-sm text-gray-500">Tidak ada notifikasi saat ini</p>
        </div>
      )}
      {notifications.map((notification, index) => (
        <div key={index} className="flex items-center">
          <Avatar>
            <AvatarImage
              src={`${BASE_URL}/${notification.action_by_accounts.photo_profile}`}
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <p className="text-sm leading-none hover:underline mb-1">
              <span className="font-semibold">
                {notification.action_message}
              </span>
            </p>
            <div className="text-sm flex space-x-2">
              <span>
                {new Date(notification.updated_at).toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>&#183;</span>
              <span>
                <TimeAgo
                  date={new Date(notification.updated_at)}
                  formatter={buildFormatter(indonesiaStrings)}
                />
              </span>
            </div>
          </div>
          <div className="ml-auto font-medium text-sm text-green-500">
            <TimeAgo
              date={new Date(notification.updated_at)}
              formatter={buildFormatter(indonesiaStrings)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationContents;
