export default function CardItemGrid({ children, type }: any) {
  return (
    <div
      className={`p-3 grid gap-0 ${
        type === "podcast"
          ? "grid-cols-2 lg:grid-cols-5 md:grid-cols-3"
          : "lg:grid-cols-3 md:grid-cols-2"
      }`}
    >
      {children}
    </div>
  );
}
