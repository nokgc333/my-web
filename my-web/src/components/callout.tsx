export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center p-6 my-6 border border-l-4 rounded-md">
      <div>{children}</div>
    </div>
  );
}
