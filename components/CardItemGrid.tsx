export default function CardItemGrid({ children }: any) {
  return (
    <div className="p-3 grid gap-0 grid-cols-2 lg:grid-cols-5 md:grid-cols-3">
      {children}
    </div>
  );
}
