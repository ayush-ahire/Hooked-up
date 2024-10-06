// import type { NextPage } from "next";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { BASE_URL } from "../../utils";
import axios from "axios";
import { Video } from "../../types";
import VideoCard from "../components/VideoCard/VideoCard";
import SideBar from "../components/SideBar/SideBar";
// import NoResults from "./components/NoResults/NoResults";

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  return (
    <div className="xl:w-[1200px] m-auto overflow-hidden h-[100vh] mt-4">
      <Navbar />
      <div className="flex gap-6 md:gap-20 ">
        <div className="h-[92vh] overflow-hidden  ">
          <SideBar />
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
          {videos.map((video: Video) => (
            <VideoCard post={video} isShowingOnHome key={video._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = await axios.get(`${BASE_URL}/api/post`);

  if (topic) {
    console.log(topic);
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  }

  return {
    props: { videos: response.data },
  };
};

export default Home;
