import { useData } from "@/useStore/useData";
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const skills = [
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
  const [showSkill, setShowSkill] = useState(true);
  const [present, setPresent] = useState(0);

  const [allSkills, setAllSkills] = useState(skills);

  const [profiles, updateProfiles, allProfiles] = useData((store) => [
    store.profiles,
    store.updateProfiles,
    store.allProfiles,
  ]);

  const filterSkill = (value) => {
    let updatedList = allProfiles;
    const skillList = allSkills;
    const skillChecked = skillList.map((item) =>
      item.value === value ? { ...item, checked: !item.checked } : item
    );
    setAllSkills(skillChecked);
    // console.log("skillsss", skillChecked);

    const skillsChecked = skillChecked
      .filter((item) => item.checked)
      .map((item) => item.value.toLowerCase());

    // console.log("skill", skillsChecked);
    // let all = []

    // const data = allProfiles.map((item) => {
    //   item.skills.map((user) =>
    //     all.push({skill: user.skill,name: item.username})
    //   );
    // });

    // console.log('all',all);

    // const list = allProfiles.filter((item) => {

    //   const ss = all.map((user)=>{
    //       const sss = user.skill.map((s)=>{
    //              const name = skillsChecked.includes(s.toLowerCase()) ? user.name : null
    //              return name
    //        })
    //       return sss

    //   })
    //   console.log('zxx',ss);

    //   const y = ss.filter((car)=>{
    //          car.includes(item.username)
    //   })
    // console.log('y',y);

    // item.skills.map((user) =>
    //   all.push({skill: user.skill,name: item.username})
    // );
    // });
    console.log("sddsds", updatedList);

    if (skillsChecked.length >= 1) {
      const list = updatedList.filter((item) => {
        let z = [];

        z = z.concat(item.branch);

        // let y = [];
        // z.map((q) => {
        //   y = y.concat(q);
        // });
        // console.log('z',z);

        const l = z.some((s) => {
          let k = skillsChecked.includes(s.toLowerCase());
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

    // const data = allProfiles.filter((item) =>
    //   {const cool = item.skills.map(
    //     (user) =>
    //      { // user.skill.includes(skillsChecked.map((item)=>{ return item}))
    //      const fire =  user.skill.map((single) => {
    //         return skillsChecked.includes(single.toLowerCase());
    //         // console.log("riohift", single);
    //       })
    //       console.log('fire',fire);

    //       return fire
    //    }
    //   )
    //  console.log('cool',cool);

    //   return cool.includes(true)
    // }
    // );

    // updatedList = updatedList.filter((item) =>
    //   item.skills[0].skill.includes(skillsChecked)
    // );
  };

  return (
    <div
      className={`flex border-y ${
        showSkill ? "pb-4" : "pb-0"
      } bg-white overflow-hidden transition-transform duration-500 flex-col space-y-2 `}
    >
      <div
        className="flex z-30 py-2  items-center  bg-white  justify-between cursor-pointer "
        onClick={() => {
          setShowSkill(!showSkill);
        }}
      >
        <p className="font-semibold text-lg text-blue-400">Branch</p>
        <MdOutlineKeyboardArrowDown
          size={30}
          className={`transition-transform duration-300 text-blue-400  ${
            showSkill ? "rotate-180" : "rotate-0"
          } `}
        />
      </div>

      <div
        className={`flex transition-transform  duration-500 flex-col ${
          showSkill ? "" : "-translate-y-[100%] h-0 py-0"
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
            const f = allSkills.map((item) =>
              item.checked ? { ...item, checked: !item.checked } : item
            );
            setAllSkills(f);
            // console.log("f", f);
          }}
        >
          clear filters
        </div>

     <div className="flex flex-col -space-y-2">
     {allSkills.map((item, index) => {
          return (
            <div
              className="flex items-center space-x-2"
              onClick={() => {
                // const h = allSkills.map((d)=>{
                //    item.value == d.value ? {...d,checked: !d.checked} : d
                // })
                // setAllSkills(h)
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
