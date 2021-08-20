import { NextPage } from "next";
import { FancyChevron } from "../icons/FancyChevron";

const HomePage: NextPage = () => {
  return (
    <div className="page-container bg-primary">
      <FancyChevron />
    </div>
  );
};

export default HomePage;
