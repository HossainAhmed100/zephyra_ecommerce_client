import {Accordion, AccordionItem} from "@nextui-org/react";
import {CheckboxGroup, Checkbox} from "@nextui-org/react";

function According({ariaLabel, title}) {
    const itemClasses = {
       base: "py-2  w-full",
       title: "px-4 py-2 text-gray-700 text-base font-medium",
       trigger: "p-0",
       indicator: "px-2 text-gray-700 text-base font-medium",
       content: "text-small px-4",
    };
  return (
    <Accordion
      className="w-full"
      itemClasses={itemClasses}
    >
      <AccordionItem aria-label={ariaLabel} title={title}>
        <CheckboxGroup>
           <Checkbox value="instock">In Stock</Checkbox>
           <Checkbox value="preOrder">Pre Order</Checkbox>
           <Checkbox value="upcoming">Up Coming</Checkbox>
        </CheckboxGroup>
      </AccordionItem>
    </Accordion>
  )
}

export default According
