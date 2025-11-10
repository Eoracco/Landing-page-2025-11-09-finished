import { createFileRoute, } from "@tanstack/react-router";
import { AuthPage } from "@/components/auth-page";




export const Route = createFileRoute('/login')({
    component: RouteComponent,   
});

function RouteComponent() {
    return <AuthPage />;
}
