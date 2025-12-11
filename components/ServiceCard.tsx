import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export default function ServiceCard({ title, description, icon, className = '' }: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}