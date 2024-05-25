import {
  ArrowUpIcon,
  CheckCircledIcon,
  ReaderIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";
import { Instagram, X } from "@mui/icons-material";

export const statuses = [
  {
    value: "ASSIGNED",
    label: "Ditugaskan",
    icon: ArrowUpIcon,
  },
  {
    value: "IN_PROGRESS",
    label: "Dikerjakan",
    icon: StopwatchIcon,
  },
  {
    value: "CHECKED",
    label: "Diperiksa",
    icon: ReaderIcon,
  },
  {
    value: "DONE",
    label: "Selesai",
    icon: CheckCircledIcon,
  },
];
export const socials = [
  {
    value: "INSTAGRAM",
    label: "Instagram",
  },
  {
    value: "TWITTER",
    label: "X (Twitter)",
  },
  {
    value: "WHATSAPP",
    label: "Whatsapp",
  },
];
export const priorities = [
  {
    value: "HIGH",
    label: "Tinggi",
    icon: "red",
  },
  {
    value: "MEDIUM",
    label: "Normal",
    icon: "amber",
  },
  {
    value: "LOW",
    label: "Rendah",
    icon: "green",
  },
];

export const pics = [
  { name: "Bagas Kuncoro", image: "https://github.com/shadcn.png" },
  { name: "Victor Valdes", image: "https://github.com/shadcn.png" },
  { name: "Mark Grayson", image: "https://github.com/shadcn.png" },
  { name: "Mike Wazowski", image: "https://github.com/shadcn.png" },
];
