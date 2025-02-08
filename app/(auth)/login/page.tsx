import { getServerSession } from "next-auth";
import ImageAuth from "./components/ImageAuth/ImageAuth";
import TabsForm from "./components/TabsForms/TabsForm";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
      redirect("/");
  }
  return (
    <div className="grid md:grid-cols-2 h-full min-h-screen overflow-hidden">
      {/* Sección del formulario */}
      <div className="flex justify-center items-center h-full bg-white">
        <div className="text-center max-w-md">
          <h1 className="text-blue-500 text-2xl font-semibold mb-2">
            EliasPassword
          </h1>
          <h2 className="text-4xl font-medium text-black">Welcome back</h2>
          <p className="text-slate-400 text-sm mt-2 mb-6">
            Welcome back, Please enter your details
          </p>
          <TabsForm />  
        </div>
      </div>

      <ImageAuth />
    </div>
  );
}
