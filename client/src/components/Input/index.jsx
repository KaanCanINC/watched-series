import classNames from "classnames";

const Input = ({
  size = "medium",
  variant = "base",
  className = "",
  warning = "",
  ...props
}) => {
  return (
    <div>
      <input
        {...props}
        className={classNames(
          "outline-none",
          {
            "p-0": size === "none",
            "h-8 px-3.5 text-xs": size === "small",
            "h-10 px-4 text-sm": size === "medium",
            "h-14 px-6 text-lg": size === "large",

            "w-full rounded border bg-transparent p-5 transition focus:border-black":
              variant === "register",
            "rounded-none border-none ": variant === "base",
          },
          className,
        )}
      />
      {warning ? <span className="text-xs text-red-600">{warning}</span> : ""}
    </div>
  );
};

export default Input;
