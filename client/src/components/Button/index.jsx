import classNames from "classnames";

const Button = ({
  children,
  size = "medium",
  variant = "default",
  className = "",
  disable = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(
        "rounded font-semibold",
        {
          "h-8 px-3.5 text-xs": size === "small",
          "h-10 px-4 text-sm": size === "medium",
          "h-14 px-6 text-lg": size === "large",

          "rounded-xl bg-violet-400 text-white transition hover:scale-105 hover:bg-violet-500 active:bg-violet-700 disabled:scale-100 disabled:bg-violet-900":
            variant === "default",
          "rounded-none border-none font-normal": variant === "base",
        },
        className,
      )}
      disabled={disable}
    >
      {children}
    </button>
  );
};

export default Button;
