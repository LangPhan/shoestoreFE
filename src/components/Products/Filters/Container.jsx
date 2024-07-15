import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FilterContainer = ({
  children,
  name,
}) => {
  return (
    <AccordionItem value={name}>
      <AccordionTrigger>
        <h3 className="text-mc font-bold leading-10 ">
          {name}
        </h3>
      </AccordionTrigger>
      <AccordionContent>
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FilterContainer;
