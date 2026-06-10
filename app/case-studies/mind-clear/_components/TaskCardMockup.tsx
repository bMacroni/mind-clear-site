// app/case-studies/mind-clear/_components/TaskCardMockup.tsx
interface TaskCardMockupProps {
  title: string;
  meta?: string;
  isFocus?: boolean;
  pill?: string;
  priorityPill?: string;
}

export function TaskCardMockup({
  title,
  meta,
  isFocus = false,
  pill,
  priorityPill,
}: TaskCardMockupProps) {
  return (
    <div
      className="flex items-start gap-3 px-4 py-3 relative"
      style={{
        backgroundColor: isFocus ? "rgba(212,175,55,0.20)" : "#F5F1E1",
        border: isFocus ? "1.5px solid #D4AF37" : "1px solid #DEDCD2",
        borderRadius: "8px",
        borderLeft: "none",
      }}
    >
      {/* Left gold rail */}
      <div
        className="absolute left-0 top-0 bottom-0"
        style={{
          width: "4px",
          backgroundColor: isFocus ? "#D4AF37" : "#E6CF8E",
          borderRadius: "8px 0 0 8px",
        }}
      />
      <div className="flex-1 min-w-0 pl-1">
        <p
          className="text-sm leading-snug"
          style={{ color: "#111111", fontWeight: 300 }}
        >
          {title}
        </p>
        {meta && (
          <p className="text-xs mt-0.5" style={{ color: "#888888" }}>
            {meta}
          </p>
        )}
        {(pill || priorityPill) && (
          <div className="flex gap-2 mt-2 flex-wrap">
            {pill && (
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: "#D4AF37",
                  color: "#111111",
                  fontWeight: 300,
                }}
              >
                {pill}
              </span>
            )}
            {priorityPill && (
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: "#2A2A1A",
                  color: "#E6CF8E",
                  fontWeight: 300,
                }}
              >
                {priorityPill}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
