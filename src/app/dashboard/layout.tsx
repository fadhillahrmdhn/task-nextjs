export default function DashboardPage({
  children,
  main,
}: {
  children: React.ReactNode;
  main: React.ReactNode;
}) {
  return (
    <div>
      <h1>ini layout Dashboard Page</h1>
      {main}
      {children}
    </div>
  );
}
