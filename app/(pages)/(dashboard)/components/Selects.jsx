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

const Selects = ({ val, items, type = "icon" }) => {
  let ItemIcon = "";
  let getPIC = [];
  if (type === "icon" || type === "legend") {
    const getStatus = items.find((item) => item.label === val);
    ItemIcon = getStatus.icon;
  } else if (type === "avatar") {
    getPIC = items.find((item) => item.name === val);
  }
  return (
    <Select>
      <SelectTrigger>
        <SelectValue
          placeholder={
            <div>
              {type === "legend" && (
                <div className="flex space-x-2 items-center">
                  <span
                    className={`size-1.5 inline-block bg-${ItemIcon}-500 rounded-full me-2`}
                  ></span>
                  <span className="text-xs">{val}</span>
                </div>
              )}
              {type === "icon" && (
                <div className="flex space-x-2 items-center">
                  <ItemIcon className="w-3.5 h-3.5" />{" "}
                  <span className="text-xs">{val}</span>
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
          <SelectLabel>Status</SelectLabel>
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
