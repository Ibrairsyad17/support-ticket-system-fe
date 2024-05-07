import {
  ArrowUpCircleIcon,
  CheckCircleIcon,
  ClockIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";

export const listStats = [
  {
    id: 1,
    title: "Jumlah keyword",
    value: 13,
    icon: KeyIcon,
    backgroundColor: "bg-gradient-to-br from-red-100 to-red-200",
    textColor: "text-red-500",
    shadowColor: "shadow-red-300",
  },
  {
    id: 2,
    title: "Keluhan dibalas",
    value: 6783,
    icon: ArrowUpCircleIcon,
    backgroundColor: "bg-gradient-to-br from-violet-100 to-violet-200",
    textColor: "text-violet-500",
    shadowColor: "shadow-violet-300",
  },
  {
    id: 3,
    title: "Keluhan menunggu",
    value: 4570,
    icon: ClockIcon,
    backgroundColor: "bg-gradient-to-br from-yellow-100 to-yellow-200",
    textColor: "text-amber-500",
    shadowColor: "shadow-amber-300",
  },
  {
    id: 4,
    title: "Keluhan diselesaikan",
    value: 12330,
    icon: CheckCircleIcon,
    backgroundColor: "bg-gradient-to-br from-green-100 to-green-200",
    textColor: "text-green-500",
    shadowColor: "shadow-green-300",
  },
];
