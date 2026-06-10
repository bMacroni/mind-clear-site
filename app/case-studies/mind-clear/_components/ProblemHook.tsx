// app/case-studies/mind-clear/_components/ProblemHook.tsx
export default function ProblemHook() {
  return (
    <section aria-labelledby="problem-heading" className="py-24 px-6" style={{ backgroundColor: "#E8E8E2" }}>
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-xs tracking-[0.06em] uppercase mb-8"
          id="problem-heading"
          style={{ color: "#888888", fontWeight: 300 }}
        >
          The Problem
        </h2>
        <blockquote
          className="text-3xl md:text-4xl mb-8"
          style={{ color: "#111111", fontWeight: 300, lineHeight: 1.3 }}
        >
          "You know what you need to do.
          <br />
          You just can't start."
        </blockquote>
        <p
          className="text-base leading-relaxed"
          style={{ color: "#444444", fontWeight: 300 }}
        >
          For ADHD brains, the gap between knowing and doing isn't laziness —
          it's cognitive load. Standard task apps make it worse. They add more
          to manage.
        </p>
      </div>
    </section>
  );
}
