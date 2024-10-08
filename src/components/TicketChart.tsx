import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { date: '2024-03-01', tickets: 150 },
  { date: '2024-03-02', tickets: 180 },
  { date: '2024-03-03', tickets: 200 },
  { date: '2024-03-04', tickets: 220 },
  { date: '2024-03-05', tickets: 190 },
  { date: '2024-03-06', tickets: 240 },
  { date: '2024-03-07', tickets: 210 },
]

const TicketChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Number of Tickets</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="tickets" stroke="#3b82f6" fill="#93c5fd" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default TicketChart