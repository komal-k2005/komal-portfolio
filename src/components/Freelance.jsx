import { motion } from "framer-motion";
import { Globe, Layers, Sparkles, Palette, CheckCircle } from "lucide-react";
import { freelanceServices, profile } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

const iconMap = { Globe, Layers, Sparkles, Palette };

const perks = [
  "Responsive & mobile-first design",
  "Clean, maintainable code",
  "On-time delivery",
  "Post-launch support",
];

export default function Freelance() {
  return (
    <section id="freelance" className="section-padding bg-surface-2/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Freelance"
          title="Services I Offer"
          subtitle="Available for web development projects — from business sites to full-stack apps."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {freelanceServices.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass glass-hover rounded-2xl p-6 transition-all duration-300"
              >
                <div className="p-3 w-fit rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-400 mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-10 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Let's Build Something Great
          </h3>
          <p className="text-slate-400 mb-6">
            Need a website, web app, or portfolio? I'd love to hear about your project.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {perks.map((perk) => (
              <span
                key={perk}
                className="flex items-center gap-1.5 text-xs text-slate-400"
              >
                <CheckCircle size={14} className="text-emerald-400" />
                {perk}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}?subject=Freelance%20Project%20Inquiry`}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Start a Project
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full glass glass-hover text-white font-semibold transition-all"
            >
              Connect on LinkedIn
            </a>
            <a
              href={profile.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full glass glass-hover text-emerald-400 font-semibold transition-all hover:text-emerald-300"
            >
              Hire on Upwork
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
