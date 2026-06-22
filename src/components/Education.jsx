import { GraduationCap } from "lucide-react";
import { education, certifications, profile } from "../data/portfolio";
import SectionTitle from "./SectionTitle";
import { FadeIn } from "./ui";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Education"
          title="Academic Background"
          subtitle="Strong academic foundation in computer engineering and technology."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {education.map((edu, i) => (
            <FadeIn key={edu.institution} delay={i * 0.1}>
              <div className="glass glass-hover rounded-2xl p-6 md:p-8 h-full transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                    <GraduationCap size={22} />
                  </div>
                  <span className="text-xs font-mono text-cyan-400">{edu.period}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
                <p className="mt-4 inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border border-purple-500/20">
                  {edu.score}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <SectionTitle
          label="Certifications"
          title="Credentials & Learning"
          subtitle="Certifications synced from LinkedIn and professional learning platforms."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.title} delay={(i % 6) * 0.06}>
              <div className="glass glass-hover rounded-xl p-5 h-full transition-all duration-300">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-sm font-semibold text-white leading-snug">{cert.title}</p>
                  <span className="text-[10px] font-mono text-slate-500 shrink-0">{cert.date}</span>
                </div>
                <p className="text-xs text-purple-400">{cert.issuer}</p>
                {cert.note && (
                  <p className="mt-2 text-xs text-emerald-400 font-medium">{cert.note}</p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-8 text-center">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
          >
            View full profile on LinkedIn →
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
