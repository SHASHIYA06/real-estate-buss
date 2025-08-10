import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Compare(){
  const [banks, setBanks] = useState([])
  useEffect(()=>{ axios.get('/api/banks').then(r=> setBanks(r.data)).catch(()=>{}) },[])
  return (
    <div>
      <h2>Compare Bank Rates</h2>
      <div className="card">
        {banks.map(b=> (
          <div key={b.id} style={{marginBottom:10}}>
            <strong>{b.name}</strong>
            <div className="muted">Home: {b.loan_types?.home ?? '-'}% · Personal: {b.loan_types?.personal ?? '-'}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}
