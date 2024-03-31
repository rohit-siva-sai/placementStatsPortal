import React from 'react'
import BranchFilter from './branchFilter'
import CompanyFilter from './companyFilter'

const ApplyFilter = () => {
  return (
    <div className="col-span-3  md:sticky   md:top-24 px-4 py-8 md:px-4 md:py-4">
      <p className="font-semibold text-gray-600 text-lg mb-4">Filter By</p>
      <div className="flex flex-col space-y-2  ">
        <BranchFilter />
        <CompanyFilter />
      </div>
    </div>
  )
}

export default ApplyFilter
