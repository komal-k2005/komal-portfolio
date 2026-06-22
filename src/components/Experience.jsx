import { Briefcase } from "lucide-react";
import { experience } from "../data/portfolio";
import SectionTitle from "./SectionTitle";
import { FadeIn } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Experience"
          title="Work History"
          subtitle="Professional experience building real-world web applications."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/30 to-transparent hidden sm:block" />

          {experience.map((job, i) => (
            <FadeIn key={job.company} delay={i * 0.1}>
              <div className="relative pl-0 sm:pl-16 pb-10 last:pb-0">
                <div className="hidden sm:flex absolute left-4 top-1 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 items-center justify-center ring-4 ring-surface">
                  <Briefcase size={10} className="text-white" />
                </div>

                <div className="glass glass-hover rounded-2xl p-6 md:p-8 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <p className="text-purple-400 font-medium">{job.company}</p>
                      <p className="text-sm text-slate-500">{job.location}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2 text-slate-400 text-sm leading-relaxed">
                        <span className="text-purple-400 mt-1.5 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
