import Image from "next/image";

const origin = { x: 520, y: 176 };

const originToPopRoutes = [
  { d: "M520 176 C420 130 280 130 170 190", duration: "3.8s", delay: "0s" },
  { d: "M520 176 C660 120 790 145 890 215", duration: "4.2s", delay: "-1.4s" },
  { d: "M520 176 C650 235 760 300 850 352", duration: "4.6s", delay: "-2.8s" },
  { d: "M520 176 C425 225 365 300 320 355", duration: "4.1s", delay: "-2s" },
];

const pops = [
  { x: 170, y: 190 },
  { x: 225, y: 170 },
  { x: 890, y: 215 },
  { x: 835, y: 205 },
  { x: 850, y: 352 },
  { x: 895, y: 370 },
  { x: 320, y: 355 },
  { x: 285, y: 340 },
];

const popSyncRoutes = [
  { d: "M170 190 C188 181 207 174 225 170", reverseD: "M225 170 C207 174 188 181 170 190", duration: "1.8s", delay: "-.3s" },
  { d: "M890 215 C872 209 853 206 835 205", reverseD: "M835 205 C853 206 872 209 890 215", duration: "1.7s", delay: "-1s" },
  { d: "M850 352 C865 357 880 364 895 370", reverseD: "M895 370 C880 364 865 357 850 352", duration: "1.9s", delay: "-.7s" },
  { d: "M320 355 C308 349 297 344 285 340", reverseD: "M285 340 C297 344 308 349 320 355", duration: "1.8s", delay: "-1.2s" },
];

const popToClientRoutes = [
  { d: "M170 190 C152 174 138 163 124 156", x: 124, y: 156, duration: "1.35s", delay: "-.25s" },
  { d: "M225 170 C220 183 214 196 208 208", x: 208, y: 208, duration: "1.2s", delay: "-.8s" },
  { d: "M835 205 C836 199 837 193 838 187", x: 838, y: 187, duration: "1.4s", delay: "-.65s" },
  { d: "M890 215 C910 207 928 200 946 192", x: 946, y: 192, duration: "1.3s", delay: "-.15s" },
  { d: "M850 352 C838 361 826 369 814 376", x: 814, y: 376, duration: "1.25s", delay: "-.45s" },
  { d: "M895 370 C897 377 899 384 900 390", x: 900, y: 390, duration: "1.45s", delay: "-1s" },
  { d: "M285 340 C290 333 295 326 299 319", x: 299, y: 319, duration: "1.25s", delay: "-.7s" },
  { d: "M320 355 C327 372 334 387 340 401", x: 340, y: 401, duration: "1.5s", delay: "-.2s" },
];

export function NetworkMap() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#080a0f]" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_67%_48%,rgba(92,211,199,.09),transparent_30%),radial-gradient(circle_at_50%_50%,rgba(111,130,175,.12),transparent_58%)]" />
      <div className="absolute top-1/2 left-1/2 aspect-[2.1/1] w-[1000px] -translate-x-[44%] -translate-y-1/2 sm:w-[1200px] lg:w-[min(105vw,1500px)] lg:-translate-x-[38%]">
        <Image src="/assets/images/world-map.svg" alt="" fill loading="eager" sizes="100vw" className="object-contain opacity-75" />
        <svg className="pointer-events-none absolute inset-0 size-full overflow-visible" viewBox="0 0 1050 500" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="backbone-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#64d8cb" stopOpacity="0.08" />
              <stop offset="0.5" stopColor="#64d8cb" stopOpacity="0.62" />
              <stop offset="1" stopColor="#64d8cb" stopOpacity="0.16" />
            </linearGradient>
            <linearGradient id="client-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#9aaeff" stopOpacity="0.42" />
              <stop offset="1" stopColor="#9aaeff" stopOpacity="0.1" />
            </linearGradient>
            <filter id="network-glow" x="-300%" y="-300%" width="700%" height="700%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {originToPopRoutes.map((route) => (
            <g key={route.d}>
              <path d={route.d} fill="none" stroke="url(#backbone-line)" strokeWidth="1.4" />
              <circle r="3.5" fill="#8be8df" filter="url(#network-glow)" className="motion-reduce:hidden">
                <animateMotion path={route.d} dur={route.duration} begin={route.delay} repeatCount="indefinite" />
              </circle>
            </g>
          ))}

          {popSyncRoutes.map((route) => (
            <g key={route.d}>
              <path d={route.d} fill="none" stroke="#e8bd72" strokeOpacity=".55" strokeWidth="1.2" strokeDasharray="3 4" />
              <circle r="2.4" fill="#ffe0a3" filter="url(#network-glow)" className="motion-reduce:hidden">
                <animateMotion path={route.d} dur={route.duration} begin={route.delay} repeatCount="indefinite" />
              </circle>
              <circle r="2.4" fill="#ffe0a3" filter="url(#network-glow)" className="motion-reduce:hidden">
                <animateMotion path={route.reverseD} dur={route.duration} begin={route.delay} repeatCount="indefinite" />
              </circle>
            </g>
          ))}

          {popToClientRoutes.map((route) => (
            <g key={route.d}>
              <path d={route.d} fill="none" stroke="url(#client-line)" strokeWidth="1.15" strokeDasharray="2 6" />
              <circle r="2.6" fill="#b8c3ff" filter="url(#network-glow)" className="motion-reduce:hidden">
                <animateMotion path={route.d} dur={route.duration} begin={route.delay} repeatCount="indefinite" />
              </circle>
              <circle cx={route.x} cy={route.y} r="2.7" fill="#9aaeff" />
              <circle cx={route.x} cy={route.y} r="7" fill="none" stroke="#9aaeff" strokeOpacity=".24" strokeWidth="1" />
            </g>
          ))}

          <g>
            <circle cx={origin.x} cy={origin.y} r="8" fill="#ff6f67" fillOpacity=".14" className="motion-reduce:hidden">
              <animate attributeName="r" values="7;17;7" dur="2.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".8;0;.8" dur="2.6s" repeatCount="indefinite" />
            </circle>
            <rect x={origin.x - 5} y={origin.y - 5} width="10" height="10" rx="2.5" fill="#ff6f67" filter="url(#network-glow)" />
            <text x={origin.x + 12} y={origin.y - 8} fill="#ff928c" fontSize="8" fontWeight="600" letterSpacing="1.2">ORIGIN</text>
          </g>

          {pops.map((pop, index) => (
            <g key={`${pop.x}-${pop.y}`}>
              <circle cx={pop.x} cy={pop.y} r="13" fill="#64d8cb" opacity=".1" className="motion-reduce:hidden">
                <animate attributeName="r" values="8;16;8" dur={`${2.5 + index * 0.2}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values=".25;0;.25" dur={`${2.5 + index * 0.2}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={pop.x} cy={pop.y} r="4.5" fill="#64d8cb" filter="url(#network-glow)" />
              {index % 2 === 0 && <text x={pop.x + 9} y={pop.y - 7} fill="#8be8df" fontSize="7" fontWeight="600" letterSpacing="1">POP</text>}
            </g>
          ))}
        </svg>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#080a0f_0%,rgba(8,10,15,.91)_23%,rgba(8,10,15,.2)_58%,rgba(8,10,15,.06)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#080a0f] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080a0f] to-transparent" />
    </div>
  );
}
