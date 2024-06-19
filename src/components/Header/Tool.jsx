import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

const Tool = () => {
  return (
    <div className="flex gap-5">
      <Button
        variant="outline"
        size="icon"
      >
        <ShoppingCart />
      </Button>
      <ModeToggle />
    </div>
  );
};

export default Tool;
