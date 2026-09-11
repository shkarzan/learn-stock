import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProfile, useSession } from "@/lib/mock-storage";
import { AuthFrame } from "./login";

export const Route = createFileRoute("/register")({ head: () => ({ meta: [
  { title: "Register — StockSignal AI" }, { name: "description", content: "Create a mock account for the StockSignal AI academic project." },
  { property: "og:title", content: "Register — StockSignal AI" }, { property: "og:description", content: "Create a demo profile for StockSignal AI." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: RegisterPage });

function RegisterPage() {
  const [, setProfile] = useProfile(); const [, setSession] = useSession(); const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" }); const [error, setError] = useState("");
  const submit = (event: FormEvent) => { event.preventDefault(); if (!form.name.trim() || !form.email.includes("@") || form.password.length < 4) return setError("Complete all fields with a valid email and a password of at least 4 characters."); if (form.password !== form.confirm) return setError("Passwords do not match."); setProfile({ name: form.name.trim(), email: form.email.trim() }); setSession(true); navigate({ to: "/dashboard" }); };
  const field = (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement>) => setForm((current) => ({ ...current, [key]: event.target.value }));
  return <AuthFrame><Card className="w-full max-w-md shadow-sm"><CardHeader><CardTitle className="text-2xl">Create account</CardTitle><CardDescription>Your name and email are saved only in this browser.</CardDescription></CardHeader><CardContent><form onSubmit={submit} className="space-y-4"><div className="space-y-2"><Label htmlFor="name">Full Name</Label><Input id="name" value={form.name} onChange={field("name")} required /></div><div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" value={form.email} onChange={field("email")} required /></div><div className="grid gap-4 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="password">Password</Label><Input id="password" type="password" value={form.password} onChange={field("password")} required /></div><div className="space-y-2"><Label htmlFor="confirm">Confirm Password</Label><Input id="confirm" type="password" value={form.confirm} onChange={field("confirm")} required /></div></div>{error && <p className="text-sm text-destructive">{error}</p>}<Button className="w-full" type="submit">Register</Button><p className="text-center text-sm text-muted-foreground">Already registered? <Link to="/login" className="font-medium text-primary hover:underline">Login</Link></p></form></CardContent></Card></AuthFrame>;
}