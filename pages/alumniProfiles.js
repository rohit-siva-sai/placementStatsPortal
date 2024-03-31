import MainPhoto from "@/components/profiles/mainPhoto";
import ProfileCard from "@/components/profiles/profileCard";
import { useData } from "@/useStore/useData";
import { createClient } from "@sanity/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const client = createClient({
  projectId: "okpn4ty3",
  dataset: "production",
  useCdn: false,
});

const AlumniProfiles = ({ alumni }) => {
  // console.log('asas',data);

  const router = useRouter()

  const [profiles, updateProfiles, updateAllProfiles] = useData((store) => [
    store.profiles,
    store.updateProfiles,
    store.updateAllProfiles,
  ]);

  useEffect(() => {
    updateProfiles(alumni);
    updateAllProfiles(alumni);
  },[alumni]);

  return (
    <div>
      <MainPhoto />
      <ProfileCard />
    </div>
  );
};

export default AlumniProfiles

export const getServerSideProps = async () => {
  // const { slug } = context.query;
  // console.error('sssss',slug);

  const query2 = `*[_type == "Profile"] `;

  const alumni = await client.fetch(query2);
  // console.log('data',data);

  return {
    props: {
      alumni
    },
  };
};
