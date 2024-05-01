import {
  ArrowUpIcon,
  CheckCircledIcon,
  ReaderIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const statuses = [
  {
    value: "ditugaskan",
    label: "Ditugaskan",
    icon: ArrowUpIcon,
  },
  {
    value: "dikerjakan",
    label: "Dikerjakan",
    icon: StopwatchIcon,
  },
  {
    value: "diperiksa",
    label: "Diperiksa",
    icon: ReaderIcon,
  },
  {
    value: "selesai",
    label: "Selesai",
    icon: CheckCircledIcon,
  },
];
export const priorities = [
  {
    value: "high",
    label: "Tinggi",
    icon: "red",
  },
  {
    value: "normal",
    label: "Normal",
    icon: "amber",
  },
  {
    value: "low",
    label: "Rendah",
    icon: "blue",
  },
];

export const pics = [
  { name: "Bagas Kuncoro", image: "https://github.com/shadcn.png" },
  { name: "Victor Valdes", image: "https://github.com/shadcn.png" },
  { name: "Mark Grayson", image: "https://github.com/shadcn.png" },
  { name: "Mike Wazowski", image: "https://github.com/shadcn.png" },
];
