
function Mountains() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-4/5">
    {/* Far Mountain Range */}
    <div className="absolute inset-0">
      <div className="absolute bottom-0 left-0 right-0 h-full bg-blue-700" style={{
        clipPath: 'polygon(0% 100%, 15% 20%, 30% 45%, 45% 15%, 60% 40%, 75% 10%, 90% 30%, 100% 5%, 100% 100%)'
      }}></div>
      
      {/* Mid Mountain Range */}
      <div className="absolute bottom-0 left-0 right-0 h-4/5 bg-blue-800" style={{
        clipPath: 'polygon(0% 100%, 10% 20%, 20% 35%, 30% 15%, 40% 30%, 60% 10%, 75% 25%, 90% 15%, 100% 30%, 100% 100%)'
      }}></div>
      
      {/* Front Mountain Range */}
      <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-blue-900" style={{
        clipPath: 'polygon(0% 100%, 5% 20%, 15% 30%, 25% 10%, 35% 25%, 45% 5%, 60% 25%, 75% 10%, 85% 25%, 95% 5%, 100% 15%, 100% 100%)'
      }}></div>
    </div>
  </div>
  )
}

export default Mountains