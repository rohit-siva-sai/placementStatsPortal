import MainPhoto from "@/components/newsEvents/mainPhoto";
import PastEvent from "@/components/newsEvents/pastEvent";
import UpcomingEvent from "@/components/newsEvents/upcomingEvent";
import { useData } from "@/useStore/useData";
import { createClient } from "@sanity/client";
import React, { useEffect } from "react";

const client = createClient({
  projectId: "okpn4ty3",
  dataset: "production",
  useCdn: false,
});
const NewsandEvents = ({ news }) => {
  const [events, updateEvents, updatUpcomingEvents, updatePastEvents] = useData(
    (store) => [
      store.events,
      store.updateEvents,
      store.updatUpcomingEvents,
      store.updatePastEvents,
    ]
  );

  const filterEvents = () => {
    const currentDate = new Date();

    const upEvents = news.filter((item) => {
      const date = new Date(item.evnetDate);
      // console.log("assa", date.getTime(), currentDate.getTime());
      return date.getTime() >= currentDate.getTime();
    });

    const sortedUpEvents = upEvents.sort(
      (a, b) =>
        a.evnetDate &&
        b.evnetDate &&
        Number(new Date(a.evnetDate).getTime()) - Number(new Date(b.evnetDate).getTime())
    );
    console.log("ssdsd", Number(new Date(upEvents[0].evnetDate).getTime()) );

    updatUpcomingEvents(sortedUpEvents);

    const pastEvents = news.filter((item) => {
      const date = new Date(item.evnetDate);
      // console.log("assa", date.getTime(), currentDate.getTime());
      return date.getTime() <= currentDate.getTime();
    });


    const sortedPastEvents = pastEvents.sort(
      (a, b) =>
        a.evnetDate &&
        b.evnetDate &&
        Number(new Date(b.evnetDate).getTime()) - Number(new Date(a.evnetDate).getTime())
    );
    console.log("ssdsd", Number(new Date(upEvents[0].evnetDate).getTime()) );

   
    updatePastEvents(sortedPastEvents);
  };

  //   const data = new Date(news[0].evnetDate)
  //   console.log('assasa',data.getTime());

  useEffect(() => {
    updateEvents(news);
    // console.log('assasa',news);
    filterEvents();
  }, []);
  return (
    <div>
      <MainPhoto />
      <UpcomingEvent />
      <PastEvent />
    </div>
  );
};

export default NewsandEvents;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  // console.error('sssss',slug);

  const query2 = `*[_type == "events"] `;

  const news = await client.fetch(query2);

  return {
    props: {
      news,
    },
  };
};
