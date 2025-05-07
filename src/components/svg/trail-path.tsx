export function TrailPath() {
  return (
    <svg viewBox="0 0 200 800" className="w-full h-full" preserveAspectRatio="none">
      <rect width="200" height="800" fill="#deb887" />
      <path d="M0,100 Q100,150 200,100 T200,300 T0,500 T200,700" stroke="#a0522d" fill="transparent" strokeWidth="10" />
    </svg>
  );
}