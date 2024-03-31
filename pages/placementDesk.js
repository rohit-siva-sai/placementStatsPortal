import Benifits from '@/components/placementCell/benifits'
import DataGraph from '@/components/placementCell/dataGraph'
import Faq from '@/components/placementCell/faq'
import MainPhoto from '@/components/placementCell/mainPhoto'
import Training from '@/components/placementCell/training'
import React from 'react'

const PlacementDesk = () => {
  return (
    <div>
      <MainPhoto/>
      <DataGraph/>
      <Training/>
      <Benifits/>
      <Faq/>
    </div>
  )
}

export default PlacementDesk
