import { Link } from "react-router-dom";
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Fragment, useEffect, useState } from "react";
import { convertConcurrency } from "@/lib/utils";
import { deleteProduct } from "@/api/productAdminApi";
import ProductForm from "./ProductForm";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Product = ({ product, ...props }) => {
  const { name, price, quantity, imgLink, id: productId } = product;
  let accessToken =
    "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJob2FidWkxMjM0NSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzIwNTgyMzc1LCJleHAiOjE3MjA2Njg3NzV9.Ifm_uYbbAQtHMTWTCDLz32RN4tK72iDuRX-9sf94-bMPZTMSRbeFxDyP_ew-zWY8";

  const handleDeleteProduct = async (productId) => {
    const mockTestProductId = "e5020a4c-6707-4354-b930-b9e9ae98111b";
    debugger;
    const result = await deleteProduct({ accessToken, mockTestProductId });
  };

  return (
    <Fragment>
      <TableRow className="cursor-pointer">
        <TableCell className="hidden sm:table-cell">
          <img src={imgLink} className="object-cover w-full h-full"></img>
        </TableCell>
        <TableCell className="font-medium truncate">{name}</TableCell>
        <TableCell>
          <Badge variant="outline">Draft</Badge>
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
          <Button
            className="ml-1"
            onClick={() => handleDeleteProduct(productId)}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default Product;
