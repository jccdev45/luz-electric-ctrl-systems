import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-[hsl(229,100%,13%)] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Luz Electric and Control Systems Inc
        </h1>
        <nav>
          <Button variant="ghost" className="text-white" asChild>
            <a href="#services">Services</a>
          </Button>
          <Button variant="ghost" className="text-white" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
