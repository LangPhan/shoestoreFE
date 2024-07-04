import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Check,
  ChevronsUpDown,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
const SelectField = ({
  open,
  setOpen,
  value,
  setValue,
  frameworks,
}) => {
  return (
    <>
      <Popover
        open={open}
        onOpenChange={setOpen}
        modal={true}
      >
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between max-w-full overflow-hidden"
          >
            {value
              ? frameworks?.find(
                  (framework) =>
                    framework.value ===
                    value
                )?.label
              : "Select..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>
                Not found.
              </CommandEmpty>
              <CommandGroup>
                {frameworks?.map(
                  (framework) => (
                    <CommandItem
                      key={
                        framework.value
                      }
                      value={
                        framework.value
                      }
                      onSelect={(
                        currentValue
                      ) => {
                        setValue(
                          currentValue ===
                            value
                            ? ""
                            : currentValue
                        );
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value ===
                            framework.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {framework.label}
                    </CommandItem>
                  )
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SelectField;
