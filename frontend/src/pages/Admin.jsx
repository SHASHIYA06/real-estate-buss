import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Admin(){
  const [apps, setApps] = useState([])
  useEffect(()=>{ axios.get('/api/applications').then(r=> setApps(r.data)).catch(()=>{}) },[])

  const changeStatus = async (id, status) => {
    await axios.patch(`/api/applications/${id}/status`, { status })
    setApps(apps.map(a=> a.id===id?{...a,status}:a))
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div className="card">
        {apps.length===0 && <div>No applications yet</div>}
        {apps.map(a=> (
          <div key={a.id} style={{padding:10,borderBottom:'1px solid rgba(255,255,255,0.03)'}}>
            <div><strong>{a.name}</strong> — {a.phone} — {a.loan_type} — ₹{a.amount}</div>
            <div style={{marginTop:6}}>Status: <select value={a.status} onChange={e=>changeStatus(a.id,e.target.value)}><option>New</option><option>Under Review</option><option>Approved</option><option>Rejected</option></select></div>
          </div>
        ))}
      </div>
    </div>
  )
}
