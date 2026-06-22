import { GraduationCap, Briefcase, Award, Code2 } from "lucide-react";
import { summary, highlights, profile } from "../data/portfolio";
import SectionTitle from "./SectionTitle";
import { FadeIn } from "./ui";

const icons = [GraduationCap, Code2, Briefcase, Award];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="About Me"
          title="Who I Am"
          subtitle={profile.headline}
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <FadeIn className="lg:col-span-3">
            <div className="glass rounded-2xl p-6 md:p-8">
              <p className="text-slate-300 leading-relaxed text-lg">{summary}</p>
              <blockquote className="mt-6 pl-4 border-l-2 border-purple-500 text-slate-400 italic">
                "{profile.brandQuote}"
              </blockquote>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Open to Work",
                  "Freelance Ready",
                  "Available on Upwork",
                  profile.location,
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-2 grid grid-cols-2 gap-4">
            {highlights.map((item, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={item.label}
                  className="glass glass-hover rounded-2xl p-5 text-center transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">{item.value}</div>
                  <div className="text-xs text-slate-500 mt-1 uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
