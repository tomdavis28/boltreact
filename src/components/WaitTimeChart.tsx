import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { date: '2024-03-01', sales: 5, support: 3, billing: 4 },
  { date: '2024-03-02', sales: 6, support: 4, billing: 3 },
  { date: '2024-03-03', sales: 4, support: 5, billing: 5 },
  { date: '2024-03-04', sales: 7, support: 6, billing: 4 },
  { date: '2024-03-05', sales: 5, support: 4, billing: 6 },
  { date: '2024-03-06', sales: 8, support: 7, billing: 5 },
  { date: '2024-03-07', sales: 6, support: 5, billing: 7 },
]

const WaitTimeChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Wait Time per Queue (minutes)</h2>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#3b82f6" />
            <Line type="monotone" dataKey="support" stroke="#10b981" />
            <Line type="monotone" dataKey="billing" stroke="#f59e0b" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default WaitTimeChart