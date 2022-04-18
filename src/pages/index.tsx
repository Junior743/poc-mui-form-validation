import React from 'react'

import { Routes, Route, Link } from 'react-router-dom'

import HomePage from './Home'
import SignupPage from './Signup'
import NotFoundPage from './NotFound'

export default function AppPage() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cadastrar" element={<SignupPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
