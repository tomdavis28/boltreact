import React, { ReactNode } from 'react'

interface StatCardProps {
  title: string
  value: string
  icon: ReactNode
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-center">
      <div className="mr-4">{icon}</div>
      <div>
        <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  )
}

export default StatCard