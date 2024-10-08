import React from 'react'
import { Phone, Clock, AlertTriangle } from 'lucide-react'
import Header from './components/Header'
import StatCard from './components/StatCard'
import TicketChart from './components/TicketChart'
import BreachedTicketsChart from './components/BreachedTicketsChart'
import WaitTimeChart from './components/WaitTimeChart'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Tickets"
            value="1,234"
            icon={<Phone className="w-8 h-8 text-blue-500" />}
          />
          <StatCard
            title="Avg. Wait Time"
            value="5m 23s"
            icon={<Clock className="w-8 h-8 text-green-500" />}
          />
          <StatCard
            title="Breached Tickets"
            value="78"
            icon={<AlertTriangle className="w-8 h-8 text-red-500" />}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TicketChart />
          <BreachedTicketsChart />
        </div>
        <div className="mt-8">
          <WaitTimeChart />
        </div>
      </main>
    </div>
  )
}

export default App