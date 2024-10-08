import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { date: '2024-03-01', breached: 5 },
  { date: '2024-03-02', breached: 8 },
  { date: '2024-03-03', breached: 12 },
  { date: '2024-03-04', breached: 10 },
  { date: '2024-03-05', breached: 7 },
  { date: '2024-03-06', breached: 15 },
  { date: '2024-03-07', breached: 9 },
]

const BreachedTicketsChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Breached Tickets</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="breached" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BreachedTicketsChart