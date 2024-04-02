import { useData } from "@/useStore/useData";
import Checkbox from '@mui/material/Checkbox';

import React, { useState } from "react";


import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const companies = [
  {
    label: "Virtusa",
    value: "Virtusa",
    checked: false,
  },
  {
    label: "Tech Mahindra",
    value: "Tech Mahindra",
    checked: false,
  },
  {
    label: "Wipro",
    value: "Wipro",
    checked: false,
  },
  {
    label: "Accenture",
    value: "Accenture",
    checked: false,
  },
  {
    label: "Capgemini",
    value: "Capgemini",
    checked: false,
  },
  {
    label: "Juspay",
    value: "Juspay",
    checked: false,
  },
  {
    label: "Cisco",
    value: "Cisco",
    checked: false,
  },
  {
    label: "Amazon",
    value: "Amazon",
    checked: false,
  },
  {
    label: "Infosys",
    value: "Infosys",
    checked: false,
  },
  {
    label: "TCS",
    value: "Tata Consultancy Services",
    checked: false,
  },
  {
    label: "Byju's",
    value: "Byju's",
    checked: false,
  },
  {
    label: "Akrivia",
    value: "Akrivia",
    checked: false,
  },
  {
    label: "Zensar",
    value: "Zensar",
    checked: false,
  },
  {
    label: "DXC",
    value: "dxc",
    checked: false,
  },
  {
    label: "PEGA",
    value: "pega",
    checked: false,
  },
];

const CompanyFilter = () => {
  const [showCompany, setShowCompany] = useState(false);
  const [present, setPresent] = useState(0);

  const [allCompanies, setAllCompanies] = useState(companies);

  const [profiles, updateProfiles, allProfiles] = useData((store) => [
    store.profiles,
    store.updateProfiles,
    store.allProfiles,
  ]);

  const filterSkill = (value) => {
    let updatedList = allProfiles;
    const companyList = allCompanies;
    const companyChecked = companyList.map((item) =>
      item.value === value ? { ...item, checked: !item.checked } : item
    );
    setAllCompanies(companyChecked);
    // console.log("skillsss", companyChecked);

    const companiesChecked = companyChecked
      .filter((item) => item.checked)
      .map((item) => item.value.toLowerCase());


    if (companiesChecked.length >= 1) {
      const list = updatedList.filter((item) => {
        let z = [];

        z = z.concat(item.companyName);

  

        const l = z.some((s) => {
          let k = companiesChecked.includes(s.toLowerCase());
          // console.log('sss',s,item.username,k);

          return k;
        });
        // console.log("sss", l);

        return l;

        // const n = l.includes(true) ? true : false;
        // console.log("n", n);

        // return n
      });
      console.log("list,list", list);
      // console.log("update", list);

      updateProfiles(list);
    } else {
      updateProfiles(allProfiles);
    }
    
  };

  return (
    <div
      className={`flex border-y ${
        showCompany ? "pb-4" : "pb-0"
      } bg-white overflow-hidden transition-transform duration-500 flex-col space-y-2 `}
    >
      <div
        className="flex z-30 py-2  items-center bg-white  justify-between cursor-pointer "
        onClick={() => {
          setShowCompany(!showCompany);
        }}
      >
        <p className="font-semibold text-lg text-blue-400">Company</p>
        <MdOutlineKeyboardArrowDown
          size={30}
          className={`transition-transform duration-300 text-blue-400  ${
            showCompany ? "rotate-180" : "rotate-0"
          } `}
        />
      </div>

      <div
        className={`flex transition-transform  duration-500 flex-col ${
          showCompany ? "" : "-translate-y-[100%] h-0 py-0"
        } space-y-3 `}
      >
        <div
          className={` 
            font-medium
           ease-in-out text-base pl-6 cursor-pointer hover:underline underline-offset-4 hover:text-blue-400 decoration-blue-400 text-gray-700 `}
          // onClick={() => {
          //   setPresent(index);
          //   filterSkill(item.value.toLowerCase());
          // }}
          onClick={() => {
            updateProfiles(allProfiles);
            const f = allCompanies.map((item) =>
              item.checked ? { ...item, checked: !item.checked } : item
            );
            setAllCompanies(f);
            // console.log("f", f);
          }}
        >
          clear filters
        </div>

      <div className="flex flex-col -space-y-2">
      {allCompanies.map((item, index) => {
          return (
            <div
              className="flex items-center space-x-2"
              onClick={() => {
                // const h = allCompanies.map((d)=>{
                //    item.value == d.value ? {...d,checked: !d.checked} : d
                // })
                // setAllCompanies(h)
                filterSkill(item.value);
              }}
            >
              <Checkbox checked={item.checked} />
              <div
                className={` ${
                  item.checked ? "font-bold text-blue-400" : "font-medium"
                } ease-in-out text-base cursor-pointer hover:underline underline-offset-4 hover:text-blue-400 decoration-blue-400 text-gray-700 `}
                // onClick={() => {
                //   setPresent(index);
                //   filterSkill(item.value.toLowerCase());
                // }}
              >
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default CompanyFilter;
