import React, { useEffect } from 'react'
// import { getAPIKey } from '../services/dashboard.services'
import { DashboardService } from '../services/dashboard.services'

export const Dashboard = ({ header, footer }): JSX.Element => {
  const dashBoardService = new DashboardService()
  useEffect(() => {
    dashBoardService.getAPIKey()
  })
  return (
    <div className="full-page">
      {header}
      <div>This is the dashboard</div>
      {footer}
    </div>
  )
}
