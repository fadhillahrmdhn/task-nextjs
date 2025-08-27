export default function DashboardPage({
  children,
  main,
}: {
  children: React.ReactNode;
  main: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>ini layout Dashboard Page</h1>
      {main}
      {children}
    </div>
  );
}
