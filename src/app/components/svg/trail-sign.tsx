export function TrailSign() {
  return (
    <svg viewBox="0 0 80 160" className="w-20 h-40">
      <rect x="35" y="0" width="10" height="160" fill="#8b4513" />
      <polygon points="0,40 40,20 40,60 0,80" fill="#deb887" />
      <polygon points="80,40 40,20 40,60 80,80" fill="#deb887" />
    </svg>
  );
}