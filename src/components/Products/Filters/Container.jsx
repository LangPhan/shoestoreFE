import { Separator } from "@/components/ui/separator";

const FilterContainer = ({
  children,
  name,
}) => {
  return (
    <div className="py-4">
      <h3 className="text-mc font-bold leading-10">
        {name}
        <Separator />
        {children}
      </h3>
    </div>
  );
};

export default FilterContainer;
