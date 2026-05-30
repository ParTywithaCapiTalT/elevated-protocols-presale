import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ?
      "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20" :
      "bg-background/90 backdrop-blur-md border-b border-border/20"}`
      }>
      
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(var(--primary),0.3)] hidden">
            <span className="text-primary-foreground font-bold text-sm tracking-tighter hidden">EF</span>
          </div>
          <span className="font-bold text-foreground tracking-tight text-xl">Elevate Protocols</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6">
          <Link
            to="/Indices"
            className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
            isActive("/Indices") ? "text-primary" : "text-muted-foreground"}`
            }>
            
            Indices
          </Link>
          <Link
            to="/About"
            className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
            isActive("/About") ? "text-primary" : "text-muted-foreground"}`
            }>
            
            About
          </Link>
          <Button
            className="ml-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-5 h-auto text-sm font-semibold shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
            asChild>
            
            <a href="#">Launch App</a>
          </Button>
        </nav>

        {/* Mobile nav */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="sm:hidden">
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted/50 rounded-full">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-l border-border/50 w-[300px] p-6">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex items-center gap-3 mb-10 mt-2">
              <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                <span className="text-primary-foreground font-bold text-sm tracking-tighter">EF</span>
              </div>
              <span className="font-bold text-xl text-foreground">ElevateFi</span>
            </div>
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive("/") ?
                "text-primary bg-primary/10" :
                "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`
                }>
                
                Home
              </Link>
              <Link
                to="/Indices"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive("/Indices") ?
                "text-primary bg-primary/10" :
                "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`
                }>
                
                Indices
              </Link>
              <Link
                to="/About"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive("/About") ?
                "text-primary bg-primary/10" :
                "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`
                }>
                
                About
              </Link>
              <div className="pt-6 mt-4 border-t border-border/40">
                <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 h-auto text-base font-semibold shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                  Launch App
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>);

}