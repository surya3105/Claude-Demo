export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-6 transition-shadow duration-300 hover:shadow-lg ${className}`}>
      {children}
    </div>
  )
}
