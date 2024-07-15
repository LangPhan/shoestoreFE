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
import ProductForm from "./ProductForm";
import { productAdminApi } from "@/api/productAdminApi";
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

const Product = ({ product, ...props }) => {
  const { name, price, quantity, imgLink, id: productId } = product;
  const accessToken = JSON.parse(localStorage.getItem("token")).accessToken;

  const handleDeleteProduct = async (productId) => {
    await productAdminApi.deleteProduct({
      accessToken,
      productId,
    });
  };

  return (
    <Fragment>
      <TableRow className="cursor-pointer">
        <TableCell className="hidden sm:table-cell">
          <img src={imgLink} className="object-cover w-full h-full"></img>
        </TableCell>
        <TableCell className="font-medium truncate">{name}</TableCell>
        <TableCell>
          <Badge variant="outline">Active</Badge>
        </TableCell>
        <TableCell className="hidden md:table-cell">
          {convertConcurrency(price)}
        </TableCell>
        <TableCell className="hidden md:table-cell">{quantity}</TableCell>
        <TableCell className="hidden md:table-cell">
          2023-07-12 10:42 AM
        </TableCell>
        <TableCell>
          <ProductForm productId={productId}></ProductForm>
          <AlertDialog>
            <AlertDialogTrigger className="ml-2">
              <Button>Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => handleDeleteProduct(productId)}
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

export default Product;
