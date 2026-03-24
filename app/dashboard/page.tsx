import { getSession } from "../lib/actions/auth-actions";
import DashboardLayout from "../ui/dashboard";
import Navbar from "../ui/navbar";

export default async function DashboardPage() {
  const session = getSession();
  const user = (await session).user;
  return (
    <main className="h-screen text-white">
      <Navbar showAuth={false} />
      <DashboardLayout user={user} />
    </main>
  );
}
