import { useData } from "@/useStore/useData";
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const branches = [
  {
    label: "CSE",
    value: "cse",
    checked: false,
  },
  {
    label: "ECE",
    value: "ece",
    checked: false,
  },
  {
    label: "EEE",
    value: "eee",
    checked: false,
  },
  {
    label: "MECH",
    value: "mech",
    checked: false,
  },
  {
    label: "CIVIL",
    value: "civil",
    checked: false,
  },
];

const BranchFilter = () => {
  const [showBranch, setShowBranch] = useState(true);
  const [present, setPresent] = useState(0);

  const [allBranches, setAllBranches] = useState(branches);

  const [profiles, updateProfiles, allProfiles] = useData((store) => [
    store.profiles,
    store.updateProfiles,
    store.allProfiles,
  ]);

  const filterSkill = (value) => {
    let updatedList = allProfiles;
    const branchList = allBranches;
    const branchChecked = branchList.map((item) =>
      item.value === value ? { ...item, checked: !item.checked } : item
    );
    setAllBranches(branchChecked);
    // console.log("skillsss", branchChecked);

    const branchesChecked = branchChecked
      .filter((item) => item.checked)
      .map((item) => item.value.toLowerCase());


    if (branchesChecked.length >= 1) {
      const list = updatedList.filter((item) => {
        let z = [];

        z = z.concat(item.branch);

       
        const l = z.some((s) => {
          let k = branchesChecked.includes(s.toLowerCase());
          // console.log('sss',s,item.username,k);

          return k;
        });
        // console.log("sss", l);

        return l;



        // return n
      });
      // console.log("list,list", list);
      // console.log("update", list);

      updateProfiles(list);
    } else {
      updateProfiles(allProfiles);
    }

  };

  return (
    <div
      className={`flex border-y ${
        showBranch ? "pb-4" : "pb-0"
      } bg-white overflow-hidden transition-transform duration-500 flex-col space-y-2 `}
    >
      <div
        className="flex z-30 py-2  items-center  bg-white  justify-between cursor-pointer "
        onClick={() => {
          setShowBranch(!showBranch);
        }}
      >
        <p className="font-semibold text-lg text-blue-400">Branch</p>
        <MdOutlineKeyboardArrowDown
          size={30}
          className={`transition-transform duration-300 text-blue-400  ${
            showBranch ? "rotate-180" : "rotate-0"
          } `}
        />
      </div>

      <div
        className={`flex transition-transform  duration-500 flex-col ${
          showBranch ? "" : "-translate-y-[100%] h-0 py-0"
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
            const f = allBranches.map((item) =>
              item.checked ? { ...item, checked: !item.checked } : item
            );
            setAllBranches(f);
            // console.log("f", f);
          }}
        >
          clear filters
        </div>

     <div className="flex flex-col -space-y-2">
     {allBranches.map((item, index) => {
          return (
            <div
              className="flex items-center space-x-2"
              onClick={() => {
                // const h = allBranches.map((d)=>{
                //    item.value == d.value ? {...d,checked: !d.checked} : d
                // })
                // setAllBranches(h)
                filterSkill(item.value);
              }}
            >
              <Checkbox className="w-8 border" checked={item.checked} />
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

export default BranchFilter;
