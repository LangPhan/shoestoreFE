import { Separator } from "@/components/ui/separator";

const FilterContainer = ({
  // eslint-disable-next-line react/prop-types
  children,
}) => {
  return (
    <div className="pb-4">
      <h3 className="text-mc font-bold leading-10">
        Product Categories
        <Separator />
        {children}
      </h3>
    </div>
  );
};

export default FilterContainer;
