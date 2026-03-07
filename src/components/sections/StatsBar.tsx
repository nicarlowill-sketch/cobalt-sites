import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 48, suffix: "h", label: "Avg. Delivery Time" },
  { value: 100, suffix: "%", label: "Mobile Optimized" },
  { value: 0, prefix: "$", suffix: "", label: "Upfront Cost" },
  { value: 100, suffix: "%", label: "Satisfaction Guaranteed" },
];

const AnimatedNumber = ({
  target,
  prefix = "",
  suffix = "",
  triggered,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  triggered: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    if (target === 0) { setCount(0); return; }
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [triggered, target]);

  return (
    <span className="font-display text-3xl md:text-4xl font-bold text-accent glow-text">
      {prefix}{count}{suffix}
    </span>
  );
};

export const StatsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="surface-bg border-y border-border relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`relative py-10 text-center ${
                i < stats.length - 1 ? "md:border-r md:border-border" : ""
              } ${i < 2 ? "border-b md:border-b-0 border-border" : ""}`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Top border hover effect */}
              <div
                className="absolute top-0 left-0 h-px bg-accent transition-all duration-500"
                style={{ width: hoveredIdx === i ? "100%" : "0%" }}
              />
              <AnimatedNumber
                target={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                triggered={triggered}
              />
              <p className="font-display text-[10px] tracking-[0.2em] text-muted-foreground mt-2 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
