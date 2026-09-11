import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, BrainCircuit, Search } from "lucide-react";
import { Brand } from "@/components/app-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "StockSignal AI — ML Stock Signal Prediction" },
    { name: "description", content: "An academic machine-learning interface for exploring stock BUY, HOLD, and SELL signals." },
    { property: "og:title", content: "StockSignal AI — ML Stock Signal Prediction" },
    { property: "og:description", content: "Explore educational stock signals generated from mock technical indicator data." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Brand />
          <nav className="flex items-center gap-2 sm:gap-5" aria-label="Main navigation">
            <Link to="/" className="hidden text-sm font-medium text-primary sm:block">Home</Link>
            <a href="#about" className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:block">About</a>
            <Button variant="ghost" size="sm" asChild><Link to="/login">Login</Link></Button>
            <Button size="sm" asChild><Link to="/register">Register</Link></Button>
          </nav>
        </div>
      </header>
      <main>
        <section className="mx-auto flex min-h-[64vh] max-w-5xl flex-col items-center justify-center px-5 py-16 text-center">
          <div className="mb-6 flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary"><BarChart3 className="size-7" /></div>
          <p className="mb-3 text-sm font-semibold text-primary">MSc Computer Science Project</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">AI-Based Stock Buy/Hold/Sell Signal Prediction</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Analyze stock market data and generate machine-learning based BUY, HOLD and SELL signals.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild><Link to="/register">Get Started <ArrowRight /></Link></Button>
            <Button size="lg" variant="outline" asChild><Link to="/login">Login</Link></Button>
          </div>
        </section>
        <section id="about" className="border-y bg-muted/40 py-14">
          <div className="mx-auto max-w-5xl px-5">
            <h2 className="text-center text-2xl font-bold">How it works</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { icon: Search, number: "01", title: "Select Stock", text: "Choose from 20 sample NSE stocks." },
                { icon: BarChart3, number: "02", title: "Analyze Market Data", text: "Review simple technical indicators." },
                { icon: BrainCircuit, number: "03", title: "Get BUY / HOLD / SELL Signal", text: "View the mock ML prediction and confidence." },
              ].map((step) => <div key={step.title} className="rounded-lg border bg-card p-6"><div className="flex items-center justify-between"><step.icon className="size-5 text-primary" /><span className="text-xs font-bold text-muted-foreground">{step.number}</span></div><h3 className="mt-5 font-semibold">{step.title}</h3><p className="mt-2 text-sm text-muted-foreground">{step.text}</p></div>)}
            </div>
          </div>
        </section>
      </main>
      <footer className="px-5 py-8 text-center text-sm text-muted-foreground"><p className="font-medium text-foreground">StockSignal AI — Academic Project</p><p className="mx-auto mt-2 max-w-3xl">Disclaimer: This application is developed for educational and research purposes only and does not provide financial advice.</p></footer>
    </div>
  );
}
