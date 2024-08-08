import { Button, IconButton, IconButtonProps } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export const Pagination = () => {
  const getItemProps = (index: number) => ({
    variant: 3 === index ? "filled" : ("text" as IconButtonProps["variant"]),
    // color: "text-affiliate-deep-blue",
    onClick: () => console.log("clicked"),
    children: index + 1,
  });

  const next = () => {
    console.log("next");
  };

  const prev = () => {
    console.log("prev");
  };

  return (
    <div className="relative mt-5 rounded-lg flex justify-end w-full">
      <div className="flex items-center lg:px-4 py-2 rounded-md gap-2">
        <Button
          placeholder={"previous"}
          onClick={prev}
          variant="text"
          className="flex items-center gap-3 capitalize text-affiliate-deep-blue text-sm"
        >
          <ChevronLeftIcon strokeWidth={2} className="h-5 w-5" /> Previous
        </Button>
        <div className="flex items-center gap-2">
          {Array.from({ length: 2 }, (_, index) => (
            <IconButton
              placeholder={""}
              key={index}
              className="text-affiliate-deep-blue flex items-center justify-center text-sm font-medium"
              {...getItemProps(index + 1)}
            >
              {index + 1}
            </IconButton>
          ))}
        </div>
        <Button
          placeholder={"next"}
          variant="text"
          className="flex items-center gap-3 capitalize text-affiliate-deep-blue text-sm"
          onClick={next}
        >
          Next <ChevronRightIcon strokeWidth={2} className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
