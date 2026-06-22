import { Heart } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p className="flex items-center gap-1">
          Made with <Heart size={14} className="text-pink-500 fill-pink-500" /> by{" "}
          <span className="text-slate-300 font-medium">{profile.name}</span>
        </p>
        <p className="font-mono text-xs text-slate-600 italic">
          Learning Today. Innovating Tomorrow.
        </p>
        <p>&copy; {year} All rights reserved.</p>
      </div>
    </footer>
  );
}
