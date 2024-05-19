import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const DataTableSkeleton = () => {
  return (
    <div className="rounded-md border mt-3.5 mb-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[24px]">
              <Skeleton className="w-5 bg-gray-100 h-5 my-3" />
            </TableHead>
            <TableHead>
              <Skeleton className="w-full bg-gray-100 h-5 my-3" />
            </TableHead>
            <TableHead>
              <Skeleton className="w-full bg-gray-100 h-5 my-3" />
            </TableHead>
            <TableHead className="text-right">
              <Skeleton className="w-full bg-gray-100 h-5 my-3" />
            </TableHead>
            <TableHead className="text-right">
              <Skeleton className="w-full bg-gray-100 h-5 my-3" />
            </TableHead>
            <TableHead className="text-right">
              <Skeleton className="w-full bg-gray-100 h-5 my-3" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">
                <Skeleton className="w-5 bg-gray-100 h-5 my-3" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-full bg-gray-100 h-5 my-3" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-full bg-gray-100 h-5 my-3" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-full bg-gray-100 h-5 my-3" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-full bg-gray-100 h-5 my-3" />
              </TableCell>
              <TableCell className="text-right">
                <Skeleton className="w-full bg-gray-100 h-5 my-3" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTableSkeleton;
