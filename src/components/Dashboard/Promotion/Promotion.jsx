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
import { convertConcurrency } from "@/lib/utils";
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
import PromotionForm from "./PromotionForm";

const Promotion = ({ promotion, ...props }) => {
  const {
    name,
    discountPercent,
    expiredDate,
    startedDate,
    active,
    id: promotionId,
  } = promotion;
  const accessToken = JSON.parse(localStorage.getItem("token")).accessToken;

  return (
    <Fragment>
      <TableRow className="cursor-pointer">
        <TableCell className="font-medium truncate max-w-[100px]">
          {name}
        </TableCell>
        <TableCell>
          <Badge
            className={active ? "bg-green-500 text-white" : ""}
            variant={active ? "outline" : "destructive"}
          >
            {active ? "True" : "False"}
          </Badge>
        </TableCell>
        <TableCell className="hidden md:table-cell">
          {discountPercent}
        </TableCell>
        <TableCell className="hidden md:table-cell">
          {`${startedDate[2]}/${startedDate[1]}/${startedDate[0]}`}
        </TableCell>
        <TableCell className="hidden md:table-cell">{`${expiredDate[2]}/${expiredDate[1]}/${expiredDate[0]}`}</TableCell>
        <TableCell>
          <PromotionForm promotionId={promotionId}></PromotionForm>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default Promotion;
