import { range } from "lodash";
import React from "react";

import FeatureLayout from "@/components/templates/feature-layout/feature.layout";
import { NextPageWithLayout } from "@/pages/_app";

const DashboardIndex: NextPageWithLayout = () => {
  return (
    <>
      Dashboard Index
      {range(0, 100).map((v) => (
        <div
          key={v}
          className="bg-amber-300"
        >
          Dashboard Index
        </div>
      ))}
    </>
  );
};

DashboardIndex.getLayout = (page) => {
  return <FeatureLayout>{page}</FeatureLayout>;
};

export default DashboardIndex;
