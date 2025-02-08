import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LoginForm } from "../LoginForm";
import { RegisterForm } from "../RegisterForm";
export default function TabsForm() {
  return (
    <Tabs defaultValue="singin" className=" w-[370px] md:w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="singin">Sign in</TabsTrigger>
        <TabsTrigger value="singup">Sign up</TabsTrigger>
      </TabsList>
      <TabsContent value="singin">
        <Card>
          <CardContent className="space-y-2">
            <LoginForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="singup">
        <Card>
          <CardContent className="space-y-2">
            <RegisterForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
