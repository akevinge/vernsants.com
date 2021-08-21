import { FC } from "react";

export const WhySection: FC = () => {
  return (
    <section
      className="w-screen grid grid-cols-2"
      style={{ minHeight: "500px", height: "75vh" }}
    >
      <div>
        <h1 className="text-secondary font-medium text-4xl">
          Why buy from VERN?
        </h1>
      </div>
    </section>
  );
};
