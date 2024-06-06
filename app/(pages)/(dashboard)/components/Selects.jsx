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
import {
  ArrowUpIcon,
  CheckCircledIcon,
  ReaderIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import {
  updatePriorityTickets,
  updateStatusTickets,
} from "@/app/redux/slices/ticketsSlice";
import { useToast } from "@/components/ui/use-toast";

const Selects = ({ val, items, type = "icon", id }) => {
  const { toast } = useToast();
  const { data: session } = useSession();
  const dispatch = useDispatch();
  return (
    <Select
      className="w-40"
      onValueChange={(value) => {
        if (type === "icon") {
          dispatch(
            updateStatusTickets({
              id: id,
              token: session?.token.data.token,
              status: value,
            }),
          );
          toast({
            title: "Berhasil Mengubah Status",
            variant: "success",
            description: `Berhasil mengubah status tiket menjadi ${value === "ASSIGNED" ? "Ditugaskan" : value === "IN_PROGRESS" ? "Dikerjakan" : value === "CHECKED" ? "Diperiksa" : "Selesai"}`,
          });
        } else {
          dispatch(
            updatePriorityTickets({
              id: id,
              token: session?.token.data.token,
              priority: value,
            }),
          );
          toast({
            title: "Berhasil Mengubah Status",
            variant: "success",
            description: `Berhasil mengubah prioritas tiket menjadi ${value === "HIGH" ? "Tinggi" : value === "LOW" ? "Rendah" : "Normal"}`,
          });
        }
      }}
    >
      <SelectTrigger>
        <SelectValue
          placeholder={
            <div>
              {type === "legend" && (
                <div className="flex space-x-2 items-center">
                  {val === "HIGH" && (
                    <span
                      className={`size-1.5 inline-block bg-red-500 rounded-full me-2`}
                    ></span>
                  )}
                  {val === "LOW" && (
                    <span
                      className={`size-1.5 inline-block bg-green-500 rounded-full me-2`}
                    ></span>
                  )}
                  {val === "MEDIUM" && (
                    <span
                      className={`size-1.5 inline-block bg-amber-500 rounded-full me-2`}
                    ></span>
                  )}

                  {val === "HIGH" && <span className="text-xs">Tinggi</span>}
                  {val === "LOW" && <span className="text-xs">Rendah</span>}
                  {val === "MEDIUM" && <span className="text-xs">Normal</span>}
                </div>
              )}
              {type === "icon" && (
                <div className="flex space-x-2 items-center">
                  {val === "ASSIGNED" && (
                    <ArrowUpIcon className="h-3.5 w-3.5" />
                  )}
                  {val === "ASSIGNED" && (
                    <span className="text-xs">Ditugaskan</span>
                  )}
                  {val === "IN_PROGRESS" && (
                    <StopwatchIcon className="h-3.5 w-3.5" />
                  )}
                  {val === "IN_PROGRESS" && (
                    <span className="text-xs">Dikerjakan</span>
                  )}
                  {val === "CHECKED" && <ReaderIcon className="h-3.5 w-3.5" />}
                  {val === "CHECKED" && (
                    <span className="text-xs">Diperiksa</span>
                  )}
                  {val === "DONE" && (
                    <CheckCircledIcon className="h-3.5 w-3.5" />
                  )}
                  {val === "DONE" && <span className="text-xs">Selesai</span>}
                </div>
              )}
              {type === "avatar" && (
                <div className="flex space-x-2 items-center">
                  <div className="flex space-x-2 items-center">
                    <Avatar className="h-5 w-5">
                      <AvatarFallback>U</AvatarFallback>
                      <AvatarImage src={getPIC.image} alt={getPIC.name} />
                    </Avatar>
                    <span className="text-xs">{val}</span>
                  </div>
                </div>
              )}
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Pilihan</SelectLabel>
          {items.map((item, index) => (
            <SelectItem
              key={index}
              value={type !== "avatar" ? item.value : item.name}
            >
              <div className="flex space-x-2 items-center">
                {type === "legend" && (
                  <div className="flex space-x-2 items-center">
                    <span
                      className={`size-2 inline-block bg-${item.icon}-500 rounded-full me-2`}
                    ></span>
                    <span className="text-xs">{item.label}</span>
                  </div>
                )}
                {type === "icon" && (
                  <div className="flex space-x-2 items-center">
                    <item.icon className="w-3.5 h-3.5" />
                    <span className="text-xs">{item.label}</span>
                  </div>
                )}
                {type === "avatar" && (
                  <div className="flex space-x-2 items-center">
                    <Avatar className="h-5 w-5">
                      <AvatarFallback>U</AvatarFallback>
                      <AvatarImage src={item.image} alt={item.name} />
                    </Avatar>
                    <span className="text-xs">{item.name}</span>
                  </div>
                )}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Selects;
