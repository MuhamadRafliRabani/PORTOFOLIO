const Background = () => {
  return (
    <div className="fixed inset-x-3 inset-y-2 right-1 -z-10 overflow-hidden rounded-xl md:inset-4">
      <svg
        width="2567"
        height="1028"
        viewBox="0 0 2567 1028"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="theme-night" clipPath="url(#clip0_1_2)">
          <rect width="2567" height="1028" fill="var(--bg-background)" />
          <g id="Ellipse 1" filter="url(#filter0_f_1_2)">
            <path
              d="M1739.31 513.489C1808.16 503.379 2091.11 324.668 2126.06 342.676C2161 360.684 2471.55 245.777 2465.98 288.5C2460.41 331.223 2098.32 636.922 2413.34 524.063C2374.88 668.356 2114.14 491.251 2235.05 589.292C1868.32 727.016 1716.65 830.587 1624.08 888.542C1531.52 946.496 1466.08 1073.56 1374.42 1113.74C1282.76 1153.91 1197.19 1182.41 1123.77 1197.21C1050.35 1212.01 1336.39 968.913 1295.08 955.542L1528.22 767.08L1446.25 612.024L1739.31 513.489Z"
              fill="url(#paint0_radial_1_2)"
            />
          </g>
          <path
            id="black-hole"
            d="M1855.47 411.455C1801.75 278.503 1532.54 258.732 1254.1 371.227C975.666 483.723 756.406 682.885 810.122 815.836C863.838 948.788 1161.36 971.032 1439.8 858.536C1718.23 746.041 1909.19 544.406 1855.47 411.455Z"
            fill="url(#paint1_radial_1_2)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_2"
            x="400.055"
            y="-432.691"
            width="2777.6"
            height="2342.15"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="355.8"
              result="effect1_foregroundBlur_1_2"
            />
          </filter>
          <radialGradient
            id="paint0_radial_1_2"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(2239.52 468.768) rotate(58) scale(234.36 744.6)"
          >
            <stop
              offset="0.0240385"
              stopColor="var(--gradient-stop-1)"
              stopOpacity="0.5"
            />
            <stop
              offset="0.552885"
              stopColor="var(--gradient-stop-2)"
              stopOpacity="0.6875"
            />
            <stop offset="0.932692" stopColor="var(--gradient-stop-3)" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_1_2"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1333.85 617.5) rotate(69.229) scale(266.793 545.012)"
          >
            <stop offset="0.899038" stopColor="var(--gradient-black-hole-1)" />
            <stop offset="0.971154" stopColor="var(--gradient-black-hole-2)" />
          </radialGradient>
          <clipPath id="clip0_1_2">
            <rect width="2567" height="1028" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Background;
