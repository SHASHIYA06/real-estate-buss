import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Apply(){
  const [loanTypes, setLoanTypes] = useState([])
  const [banks, setBanks] = useState([])
  const [form, setForm] = useState({ name:'', email:'', phone:'', loan_type:'', amount:'', preferred_bank:'' })

  useEffect(()=>{
    axios.get('/api/loan-types').then(r=> setLoanTypes(r.data)).catch(()=>{})
    axios.get('/api/banks').then(r=> setBanks(r.data)).catch(()=>{})
  },[])

  const submit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/applications', form)
      if (res.data.success) {
        alert('Application submitted. Our team will contact you.')
        setForm({ name:'', email:'', phone:'', loan_type:'', amount:'', preferred_bank:'' })
      }
    } catch (e) { alert('Submission failed') }
  }

  return (
    <div className="card">
      <h2>Loan Enquiry</h2>
      <form onSubmit={submit}>
        <label>Full name</label>
        <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
        <label>Email</label>
        <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
        <label>Phone</label>
        <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required />
        <label>Loan Type</label>
        <select value={form.loan_type} onChange={e=>setForm({...form,loan_type:e.target.value})} required>
          <option value="">Select</option>
          {loanTypes.map(l=> <option key={l.id} value={l.id}>{l.name}</option>)}
        </select>
        <label>Amount (INR)</label>
        <input value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})} required />
        <label>Preferred Bank (optional)</label>
        <select value={form.preferred_bank} onChange={e=>setForm({...form,preferred_bank:e.target.value})}>
          <option value="">Any</option>
          {banks.map(b=> <option key={b.id} value={b.name}>{b.name}</option>)}
        </select>
        <div style={{marginTop:12}}><button className="btn" type="submit">Submit Enquiry</button></div>
      </form>
    </div>
  )
}
