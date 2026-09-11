import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FormEvent, useEffect, useState } from "react";
import { LogOut, Save } from "lucide-react";
import { AppShell, PageHeading } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { usePreferences, useProfile, useSession } from "@/lib/mock-storage";

export const Route = createFileRoute("/settings")({ head: () => ({ meta: [
  { title: "Settings — StockSignal AI" }, { name: "description", content: "Manage mock profile and display preferences for StockSignal AI." },
  { property: "og:title", content: "Settings — StockSignal AI" }, { property: "og:description", content: "Manage your local StockSignal AI preferences." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: SettingsPage });
function SettingsPage() {
  const [profile, setProfile] = useProfile(); const [prefs, setPrefs] = usePreferences(); const [, setSession] = useSession(); const navigate = useNavigate(); const [form, setForm] = useState(profile); const [saved, setSaved] = useState(false);
  useEffect(() => setForm(profile), [profile]); useEffect(() => { document.documentElement.classList.toggle("dark", prefs.theme === "dark"); }, [prefs.theme]);
  const save = (event: FormEvent) => { event.preventDefault(); setProfile(form); setSaved(true); window.setTimeout(() => setSaved(false), 1800); };
  const logout = () => { setSession(false); navigate({ to: "/login" }); };
  return <AppShell><PageHeading title="Settings" subtitle="Manage your local demo profile and preferences" /><div className="grid max-w-4xl gap-5"><Card className="shadow-sm"><CardHeader><CardTitle>Profile</CardTitle></CardHeader><CardContent><form onSubmit={save} className="grid gap-4 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" value={form.name} onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))} /></div><div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" value={form.email} onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))} /></div><div className="sm:col-span-2"><Button type="submit"><Save /> {saved ? "Saved" : "Save Profile"}</Button></div></form></CardContent></Card><Card className="shadow-sm"><CardHeader><CardTitle>Preferences</CardTitle></CardHeader><CardContent className="divide-y"><div className="flex items-center justify-between py-4 first:pt-0"><div><p className="font-medium">Default Market</p><p className="text-sm text-muted-foreground">Market used throughout the demo</p></div><Select value={prefs.market} onValueChange={() => setPrefs({ ...prefs, market: "NSE" })}><SelectTrigger className="w-28"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="NSE">NSE</SelectItem></SelectContent></Select></div><div className="flex items-center justify-between py-4"><div><p className="font-medium">Theme</p><p className="text-sm text-muted-foreground">Choose light or dark appearance</p></div><Select value={prefs.theme} onValueChange={(theme: "light" | "dark") => setPrefs({ ...prefs, theme })}><SelectTrigger className="w-28"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="light">Light</SelectItem><SelectItem value="dark">Dark</SelectItem></SelectContent></Select></div><div className="flex items-center justify-between py-4 last:pb-0"><div><p className="font-medium">Notifications</p><p className="text-sm text-muted-foreground">Mock signal notifications</p></div><Switch checked={prefs.notifications} onCheckedChange={(notifications) => setPrefs({ ...prefs, notifications })} aria-label="Toggle notifications" /></div></CardContent></Card><Card className="shadow-sm"><CardHeader><CardTitle>Account</CardTitle></CardHeader><CardContent className="flex flex-wrap gap-3"><Button variant="outline" onClick={() => window.alert("Password change is a mock action in this frontend demo.")}>Change Password</Button><Button variant="destructive" onClick={logout}><LogOut /> Logout</Button></CardContent></Card></div></AppShell>;
}