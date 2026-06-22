import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon, UpworkIcon } from "./SocialIcons";
import { profile } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "komal-kathwade",
    href: profile.linkedin,
  },
  {
    icon: UpworkIcon,
    label: "Upwork",
    value: "Hire me on Upwork",
    href: profile.upwork,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "komal-k2005",
    href: profile.github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Contact"
          title="Get In Touch"
          subtitle="Open for internships, collaborations, and freelance projects."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-4 p-4 rounded-xl glass glass-hover transition-all duration-300">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-slate-400 text-sm mb-6">
              Click below to open your email client with a pre-filled subject line.
            </p>
            <a
              href={`mailto:${profile.email}?subject=Hello%20Komal%20-%20Portfolio%20Contact&body=Hi%20Komal%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding...`}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:-translate-y-0.5"
            >
              <Send size={18} />
              Email Me
            </a>
            <p className="mt-4 text-center text-xs text-slate-500">
              Usually responds within 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
