"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { getUsersPIC } from "@/app/api/repository/usersAndCompanyRepository";
import { useDispatch } from "react-redux";
import { updatePICTickets } from "@/app/redux/slices/ticketsSlice";

const SelectPic = ({ image, name, id, conversation }) => {
  const { data: session } = useSession();
  const [pics, setPics] = React.useState([]);
  const dispatch = useDispatch();

  const fetchPics = async () => {
    const res = await getUsersPIC(session?.token.data.token, "PIC");
    if (res) {
      setPics(res.data.data.accounts);
    }
  };

  React.useEffect(() => {
    if (session?.token.data.token) fetchPics();
  }, [session?.token.data.token]);

  return (
    <Select
      onValueChange={(value) => {
        dispatch(
          updatePICTickets({
            id: id,
            token: session?.token.data.token,
            pic: value,
            cid: conversation,
          }),
        );
      }}
    >
      <SelectTrigger>
        <SelectValue
          placeholder={
            <div className="flex space-x-2 items-center">
              <div className="flex space-x-2 items-center">
                <Avatar className="h-5 w-5">
                  <AvatarFallback>U</AvatarFallback>
                  <AvatarImage src={image} alt={name} />
                </Avatar>
                <span className="text-xs">{name}</span>
              </div>
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Daftar PIC</SelectLabel>
          {pics.map((pic, index) => (
            <SelectItem key={index} value={pic.id}>
              <div className="flex space-x-2 items-center">
                <div className="flex space-x-2 items-center">
                  <Avatar className="h-5 w-5">
                    <AvatarFallback>U</AvatarFallback>
                    <AvatarImage src={pic.photo_profile} alt={pic.name} />
                  </Avatar>
                  <span className="text-xs">{pic.name}</span>
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectPic;
