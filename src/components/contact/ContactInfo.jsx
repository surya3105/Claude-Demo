import { RiMapPinLine, RiMailLine, RiTimeLine, RiInstagramLine } from 'react-icons/ri'

const info = [
  { icon: <RiMapPinLine size={20} />, label: 'Location', value: '46/6 Panchalli Amman Kovil Street\nArumbakkam, Chennai - 600106' },
  { icon: <RiMailLine size={20} />, label: 'Email', value: 'beualasb2000@gmail.com' },
  { icon: <RiInstagramLine size={20} />, label: 'Instagram', value: '@makeover_by_beula', link: 'https://www.instagram.com/makeover_by_beula' },
  { icon: <RiTimeLine size={20} />, label: 'Availability', value: 'By appointment only\nAvailable for outstation bookings' },
]

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {info.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="text-gold mt-1 shrink-0">{item.icon}</div>
          <div>
            <h4 className="font-medium text-charcoal text-sm mb-1">{item.label}</h4>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-rose text-sm hover:text-dusty-rose transition-colors">
                {item.value}
              </a>
            ) : (
              <p className="text-warm-gray text-sm whitespace-pre-line">{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
