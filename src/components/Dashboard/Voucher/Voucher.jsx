import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Fragment, useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import VoucherForm from "./VoucherForm";
import { voucherAdminApi } from "@/api";
import { toast } from "react-toastify";

const Voucher = ({ voucher, ...props }) => {
  const {
    name,
    discountPercent,
    expired_date,
    create_date,
    quantity,
    active,
    deleted,
    id: voucherId,
  } = voucher;
  const accessToken = JSON.parse(localStorage.getItem("token")).accessToken;

  const handleDeleteVoucher = async (voucherId) => {
    await voucherAdminApi.deleteVoucherDetail({ accessToken, voucherId });
    toast.success("Delete voucher successfully!");
  };

  return (
    <Fragment>
      <TableRow className="cursor-pointer">
        <TableCell className="font-medium truncate">{name}</TableCell>
        <TableCell>{discountPercent}</TableCell>
        <TableCell className="hidden md:table-cell">
          {`${create_date[2]}/${create_date[1]}/${create_date[0]}`}
        </TableCell>
        <TableCell className="hidden md:table-cell">
          {`${expired_date[2]}/${expired_date[1]}/${expired_date[0]}`}
        </TableCell>
        <TableCell className="hidden md:table-cell">{quantity}</TableCell>
        <TableCell className="hidden md:table-cell">
          <Badge
            className={active ? "bg-green-500 text-white" : ""}
            variant={active ? "outline" : "destructive"}
          >
            {active ? "True" : "False"}
          </Badge>
        </TableCell>
        <TableCell className="hidden md:table-cell">
          <Badge
            className={
              deleted ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }
            variant={deleted ? "destructive" : "outline"}
          >
            {deleted ? "True" : "False"}
          </Badge>
        </TableCell>
        <TableCell>
          <VoucherForm voucherId={voucherId}></VoucherForm>
          <AlertDialog>
            <AlertDialogTrigger className="ml-2">
              <Button>Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your voucher and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => handleDeleteVoucher(voucherId)}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default Voucher;
