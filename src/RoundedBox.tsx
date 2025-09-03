const RoundedBox = ({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div
      {...props}
      className={`${className} border-1 border-amber-400 rounded-md p-3`}
    >
      {children}
    </div>
  );
};

export default RoundedBox;
