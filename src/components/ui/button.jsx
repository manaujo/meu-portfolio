export function Button({ children, asChild, variant = "primary", ...props }) {
  const Tag = asChild ? 'a' : 'button';
  let style = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center ";

  if (variant === "outline") {
    style += "border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white hover:scale-105";
  } else if (variant === "whatsapp") {
    style += "bg-green-600 hover:bg-green-700 text-white hover:scale-105 shadow-lg shadow-green-500/50";
  } else {
    style += "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105 shadow-lg shadow-purple-500/50";
  }

  return (
    <Tag className={style} {...props}>
      {children}
    </Tag>
  );
}
