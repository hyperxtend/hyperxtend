export function TrailBackground() {
  return (
    <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="none">
      <rect width="800" height="400" fill="#87ceeb" />
      <polygon points="0,400 200,200 400,400" fill="#556b2f" />
      <polygon points="400,400 600,150 800,400" fill="#6b8e23" />
    </svg>
  );
}