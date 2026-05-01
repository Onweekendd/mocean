import * as React from "react";

import { cn } from "@/lib/utils";

interface ColorSegment {
  /** 该颜色生效的最大阈值（含），范围 0-100 */
  threshold: number;
  color: string;
}

interface CircularProgressProps {
  value?: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  color?: string;
  trackColor?: string;
  showValue?: boolean;
  label?: string;
  /** 按阈值分段变色，优先级高于 color。段按 threshold 升序排列，value 落入第一个 >= value 的段 */
  segments?: ColorSegment[];
}

const CircularProgress = React.forwardRef<SVGSVGElement, CircularProgressProps>(
  (
    {
      value = 0,
      size = 64,
      strokeWidth = 6,
      className,
      color = "hsl(var(--primary))",
      trackColor = "hsl(var(--primary) / 0.2)",
      showValue = false,
      label,
      segments
    },
    ref
  ) => {
    const clampedValue = Math.min(100, Math.max(0, value));

    const resolvedColor = React.useMemo(() => {
      if (!segments?.length) return color;
      const sorted = [...segments].sort((a, b) => a.threshold - b.threshold);
      const matched =
        sorted.find((s) => clampedValue <= s.threshold) ??
        sorted[sorted.length - 1];
      return matched?.color ?? color;
    }, [segments, clampedValue, color]);
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (clampedValue / 100) * circumference;
    const center = size / 2;

    return (
      <div
        className={cn(
          "relative inline-flex items-center justify-center",
          className
        )}
      >
        <svg
          ref={ref}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
        >
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={trackColor}
            strokeWidth={strokeWidth}
          />
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={resolvedColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${center} ${center})`}
            style={{ transition: "stroke-dashoffset 0.3s ease" }}
          />
        </svg>
        {(showValue || label) && (
          <div className="absolute flex flex-col items-center justify-center">
            {showValue && (
              <span className="text-xs font-medium leading-none">
                {Math.round(clampedValue)}%
              </span>
            )}
            {label && (
              <span className="mt-0.5 text-xs leading-none text-muted-foreground">
                {label}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);
CircularProgress.displayName = "CircularProgress";

export { CircularProgress };
export type { CircularProgressProps };
