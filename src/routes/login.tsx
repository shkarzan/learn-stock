import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Brand } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProfile, useSession } from "@/lib/mock-storage";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [
    { title: "Login — StockSignal AI" }, { name: "description", content: "Log in to the StockSignal AI academic project dashboard." },
    { property: "og:title", content: "Login — StockSignal AI" }, { property: "og:description", content: "Access the educational stock signal dashboard." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: LoginPage,
});

function LoginPage() {
  const [profile] = useProfile();
  const [, setSession] = useSession();
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!email.includes("@") || password.length < 4) return setError("Enter a valid email and a password with at least 4 characters.");
    setSession(true); navigate({ to: "/dashboard" });
  };
  return <AuthFrame><Card className="w-full max-w-md shadow-sm"><CardHeader><CardTitle className="text-2xl">Welcome back</CardTitle><CardDescription>Log in to view your stock signal dashboard.</CardDescription></CardHeader><CardContent><form onSubmit={submit} className="space-y-4"><div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div><div className="space-y-2"><Label htmlFor="password">Password</Label><Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></div>{error && <p className="text-sm text-destructive">{error}</p>}<Button className="w-full" type="submit">Login</Button><p className="text-center text-sm text-muted-foreground">New to StockSignal AI? <Link to="/register" className="font-medium text-primary hover:underline">Register</Link></p></form></CardContent></Card></AuthFrame>;
}

export function AuthFrame({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-muted/30"><header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"><Brand /><Button variant="ghost" size="sm" asChild><Link to="/"><ArrowLeft /> Home</Link></Button></header><main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-5 py-10">{children}</main></div>;
}