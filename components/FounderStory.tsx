import React from "react";
import { motion } from "framer-motion";

export default function FounderStory() {
  return (
    <section className="bg-[#121212] py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            Why This Exists
          </div>

          <div className="space-y-6 text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            <p>
              I spent years not knowing why my brain worked the way it did. When I got sober after my daughter was born, I couldn't ignore it anymore.
            </p>
            <p>
              I'd read enough about ADHD to recognize myself in it — the wall of awful, the paralysis, the inability to start anything without the right conditions. I tried every productivity app I could find. None of them stuck. They were all built for brains that work differently than mine.
            </p>
            <p className="text-white">
              So I built one for myself. Now that it's actually helping, I want to share it.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 text-sm font-mono text-gray-600">
            — Brian, Founder
          </div>
        </motion.div>
      </div>
    </section>
  );
}
