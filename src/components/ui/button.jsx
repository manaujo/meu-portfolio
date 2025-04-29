export function Button({ children, asChild, variant, ...props }) {
  const Tag = asChild ? 'a' : 'button';
  let style = "px-4 py-2 rounded text-white font-medium ";

  if (variant === "outline") {
    style += "border border-white hover:bg-white hover:text-gray-900";
  } else {
    style += "bg-blue-600 hover:bg-blue-700";
  }

  return (
    <Tag className={style} {...props}>
      {children}
    </Tag>
  );
}
