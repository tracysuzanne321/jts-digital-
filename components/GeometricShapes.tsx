export default function GeometricShapes() {
  return (
    <>
      {/* Teal Circle */}
      <div className="geometric-shape geometric-circle bg-teal w-64 h-64 -top-32 -right-32 md:w-96 md:h-96 md:-top-48 md:-right-48" />
      
      {/* Hot Pink Square */}
      <div className="geometric-shape geometric-square bg-hot-pink w-48 h-48 top-1/4 -left-24 md:w-72 md:h-72 md:-left-36" />
      
      {/* Golden Yellow Triangle */}
      <div className="geometric-shape bg-golden-yellow w-0 h-0 border-l-[60px] border-r-[60px] border-b-[100px] border-b-golden-yellow bottom-1/4 right-1/4 md:border-l-[90px] md:border-r-[90px] md:border-b-[150px]" />
      
      {/* Bright Red Circle */}
      <div className="geometric-shape geometric-circle bg-bright-red w-32 h-32 bottom-0 left-1/4 md:w-48 md:h-48" />
    </>
  )
}

