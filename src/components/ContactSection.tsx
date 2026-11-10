"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  Clock,
  MapPin,
  Radio,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";
import { sound } from "@/utils/sound";

export function ContactSection() {
  const { profile } = portfolioData;

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "ai-internship",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const copyEmail = () => {
    sound.playConfirm();
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sound.playPowerUp();
    setFormStatus("submitting");

    // Open mailto fallback with pre-filled parameters so the message is sent directly
    const subject = encodeURIComponent(
      `[GUILD QUEST DISPATCH - ${formData.topic.toUpperCase()}] From ${formData.name}`
    );
    const body = encodeURIComponent(
      `Guild Quest Giver: ${formData.name}\nCoordinates: ${formData.email}\nMission Type: ${formData.topic}\n\nDispatch Log:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setFormStatus("success");
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto w-full border-t border-stroke">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Big Serif CTA & Direct Links */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted">
              <span className="text-copper font-medium">{"// 04"}</span>
              <span>GUILD DISPATCH TERMINAL</span>
              <span className="text-white/20">•</span>
              <span className="text-emerald-400">FREQUENCY: OPEN</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.05] text-charcoal">
              Let&apos;s build something together.
            </h2>

            <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
              Always excited to connect with fellow student developers, participate in collegiate hackathons,
              explore open-source projects, or discuss AI and computer science. Transmit a message below!
            </p>
          </div>

          {/* Quick Email Copy Box */}
          <div className="p-5 rounded-2xl bg-surface border border-copper/30 shadow-card space-y-3">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted">
              <span>Direct Comms Channel</span>
              <span className="text-emerald-400">ONLINE</span>
            </div>
            <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-canvas border border-stroke/70">
              <span className="font-mono text-xs sm:text-sm text-charcoal truncate">
                {profile.contact.email}
              </span>
              <button
                onClick={copyEmail}
                className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 bg-surface-elevated hover:bg-white hover:text-black border border-stroke text-charcoal transition-all"
                title="Copy email to clipboard"
                data-cursor="pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-copper" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links List */}
          <div className="space-y-2 pt-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted block">
              Player Coordinates &amp; Guild Links
            </span>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playBlip(600)}
                className="p-3 rounded-xl bg-surface hover:bg-surface-elevated border border-stroke hover:border-copper/40 transition-colors flex items-center justify-between text-xs font-mono text-charcoal group"
                data-cursor="pointer"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-copper" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-copper transition-colors" />
              </a>

              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playBlip(600)}
                className="p-3 rounded-xl bg-surface hover:bg-surface-elevated border border-stroke hover:border-copper/40 transition-colors flex items-center justify-between text-xs font-mono text-charcoal group"
                data-cursor="pointer"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-copper" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-copper transition-colors" />
              </a>

              <a
                href={profile.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playBlip(600)}
                className="p-3 rounded-xl bg-surface hover:bg-surface-elevated border border-stroke hover:border-copper/40 transition-colors flex items-center justify-between text-xs font-mono text-charcoal group"
                data-cursor="pointer"
              >
                <div className="flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4 text-copper" />
                  <span>Instagram</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-copper transition-colors" />
              </a>

              <a
                href={`mailto:${profile.contact.email}`}
                onMouseEnter={() => sound.playBlip(600)}
                className="p-3 rounded-xl bg-surface hover:bg-surface-elevated border border-stroke hover:border-copper/40 transition-colors flex items-center justify-between text-xs font-mono text-charcoal group"
                data-cursor="pointer"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-copper" />
                  <span>Email App</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-copper transition-colors" />
              </a>
            </div>
          </div>

          {/* Location & Timezone Note */}
          <div className="pt-2 flex items-center gap-6 text-xs font-mono text-muted">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-copper" />
              <span>Thrissur Grid, Kerala</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-copper" />
              <span>IST (UTC+5:30)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Working Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-7 sm:p-9 rounded-2xl bg-surface border border-copper/30 shadow-card relative">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl text-charcoal font-normal flex items-center gap-2">
                  <span>Send Quest Contract</span>
                  <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                </h3>
                <p className="text-xs text-muted font-light mt-1">
                  Fill the mission parameters below to establish link.
                </p>
              </div>
              <span className="px-2 py-0.5 rounded bg-surface-elevated border border-stroke text-[9px] font-mono text-copper">
                ENCRYPTION: 256-BIT
              </span>
            </div>

            {formStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl text-charcoal">
                  Transmission Dispatched
                </h4>
                <p className="text-xs font-mono text-muted max-w-sm mx-auto">
                  Your mail client has been opened with your inquiry. If it did not launch automatically, feel free to write directly to{" "}
                  <span className="text-copper">{profile.contact.email}</span>.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-4 px-5 py-2 rounded-full text-xs font-mono uppercase bg-surface-elevated hover:bg-canvas border border-stroke text-charcoal transition-colors"
                >
                  Send Another Transmission
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="font-mono text-[11px] uppercase tracking-wider text-muted block"
                    >
                      Quest Giver / Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Commander Shepard"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-stroke text-charcoal placeholder:text-muted/40 focus:border-copper/70 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="font-mono text-[11px] uppercase tracking-wider text-muted block"
                    >
                      Return Frequency / Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. shepard@normandy.alliance"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-stroke text-charcoal placeholder:text-muted/40 focus:border-copper/70 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject / Topic selector */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="topic"
                    className="font-mono text-[11px] uppercase tracking-wider text-muted block"
                  >
                    Mission Type
                  </label>
                  <select
                    id="topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-stroke text-charcoal focus:border-copper/70 focus:outline-none transition-colors font-mono text-xs"
                  >
                    <option value="hackathon-collab">Student Hackathon Collaboration</option>
                    <option value="open-source-project">Open Source / Coding Project</option>
                    <option value="study-discussion">AI &amp; CS Study Discussion</option>
                    <option value="general-inquiry">General Hello &amp; Mentorship</option>
                  </select>
                </div>

                {/* Message Box */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="font-mono text-[11px] uppercase tracking-wider text-muted block"
                  >
                    Mission Briefing / Dispatch *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="State your quest parameters, deliverables, stack requirements, and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-canvas border border-stroke text-charcoal placeholder:text-muted/40 focus:border-copper/70 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-black bg-charcoal hover:bg-white transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  data-cursor="pointer"
                >
                  <span>
                    {formStatus === "submitting" ? "Transmitting..." : "Send Mission Contract"}
                  </span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
