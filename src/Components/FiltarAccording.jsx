import { Accordion, AccordionItem, CheckboxGroup, Checkbox, cn } from "@nextui-org/react";

const FiltarAccording = ({ title, items }) => {
  // Define custom styles for the AccordionItem component
  const itemClasses = {
    base: "py-2 w-full",
    title: "px-4 py-2 text-gray-700 text-base font-medium",
    trigger: "p-0",
    indicator: "px-2 text-gray-700 text-base font-medium",
    content: "text-small px-4",
  };

  return (
    <Accordion itemClasses={itemClasses}>
      <AccordionItem aria-label={title} title={title}>
        <CheckboxGroup>
          {items.map((item) => (
            <CustomCheckbox key={item.value} label={item?.label} value={item?.value} />
          ))}
        </CheckboxGroup>
      </AccordionItem>
    </Accordion>
  );
};

// CustomCheckbox component: Renders a styled checkbox.
const CustomCheckbox = ({ label, value }) => {
  return (
    <Checkbox
      classNames={{
        base: cn(
          "inline-flex max-w-md w-full mb-1",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 py-2 border-2 border-transparent",
          "data-[selected=true]:bg-gray-100"
        ),
        label: "w-full text-[14px]",
      }}
      value={value}
    >
      <div className="w-full flex justify-between gap-2">
        {label}
      </div>
    </Checkbox>
  );
};

export default FiltarAccording;
