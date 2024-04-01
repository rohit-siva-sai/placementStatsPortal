import Alumni from '@/components/companies/alumni';
import ComMain from '@/components/companies/comMain';
import LineTotal from '@/components/companies/lineTotal';
import PlacementData from '@/components/companies/placementData';
import RecruitProcess from '@/components/companies/recruitProcess';
import SkillsRequired from '@/components/companies/skillsRequired';
import { useData } from '@/useStore/useData'
import { createClient } from '@sanity/client';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
const client = createClient({
    projectId: "okpn4ty3",
    dataset: "production",
    useCdn: false,
  });

const Slug = ({data}) => {

  const [company,setCompany] = useState(data[0])
    const [companies] = useData((store) => [store.companies])

//  console.log('data',data);
 
    const router = useRouter()

//     useEffect(()=>{
//    setCompany(data)
//    console.log('ssd',company);
//     },[router])
  

    
  return (
    <div className='md:mx-16 mx-4 md:my-16 mb-8 mt-2' >
      <ComMain company={company} />
      <PlacementData  placementData={company?.placementData}  />
      <LineTotal  totalRecruitments={company?.totalRecruitmenst}  />
      <SkillsRequired skills={company?.skills}/>
      <RecruitProcess recruitProcess={company?.recruitProcess} />
      <Alumni alumni={company?.alumniSelected} />
    </div>
  )
}

export default Slug


export const getServerSideProps = async (context) => {
    const { slug } = context.query;
    // console.error('sssss',slug);
    
    const query2 = `*[_type == "company" && slug == '${slug}']  {...,alumniSelected[]->}  `;
    
    const data = await client.fetch(query2);
    // console.log('data',data);
    
    return {
      props: {
        data
      },
    };
  };
  
