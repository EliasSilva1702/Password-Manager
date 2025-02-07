import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { countPassword } from "@/lib/countPassword";
import { RepeatedPasswordChart } from "./components/RepeatedPasswordChart";
import ViewAnalytics from "./components/ViewAnalyticsChart/ViewAnalytics";
import { TrafficDevice } from "./components/TrafficDevice";

export default async function AnalyticsPage() {
  const session = await getServerSession();
  if (!session || !session.user?.email) {
    redirect("/");
  }

  const user = await db.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      elements: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!user || !user.elements) {
    redirect("/");
  }

  const { unique, repeated } = countPassword(user.elements);
//   console.log(unique, repited);
  return (
    <div className="">
      <div className="grid md:grid-cols-2 gap-5 mb-4">
        <RepeatedPasswordChart unique={unique} repeated={repeated} />
        <ViewAnalytics unique={unique} repeated={repeated} />
      </div>
      <TrafficDevice />
    </div>
  );
}
