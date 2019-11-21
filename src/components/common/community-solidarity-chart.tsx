import React from "react";
import styled from "styled-components";
import GaugeChart from "react-gauge-chart";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const SectionWrapper = styled.section`
  background: ${({ theme }) => theme.colors.secondary9};
  padding: 80px 10px;
  min-height: 600px;
`;

const ChartWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const InfoMotionWrapper = styled(motion.div)`
  color: white;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: Alice;

  h3 {
    font-size: 50px;
    padding: 0px;
    margin: 0px;
    line-height: 50px;
    color: ${({ theme }) => theme.colors.secondary3};
  }

  span.lbs {
    font-size: 60px;
  }
  p {
    font-size: 20px;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.secondary3};
  }
`;

type CommunitySolidarityChartProps = {
  lbs: number;
};

const CommunitySolidarityChart: React.FC<CommunitySolidarityChartProps> = ({
  lbs,
}) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  if (!inView) {
    return <SectionWrapper ref={ref} />;
  }

  return (
    <SectionWrapper ref={ref}>
      <ChartWrapper>
        <GaugeChart
          id="pounds"
          nrOfLevels={18}
          percent={0.76}
          hideText={true}
          colors={["#ff3385", "#99ffbb"]}
          needleColor="#dadada"
          needleBaseColor="#333"
          arcWidth={0.2}
        />
        <InfoMotionWrapper
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h3>
            <span className="lbs">
              <CountUp end={lbs} />
            </span>{" "}
            POUNDS
          </h3>
          <p>of fresh groceries and counting!</p>
          <p style={{ color: "white", padding: "20px", fontSize: "16px" }}>
            For every dollar donated, Community Solidarity is able to provide
            eight pounds of fresh groceries to a family in need.
          </p>
        </InfoMotionWrapper>
      </ChartWrapper>
    </SectionWrapper>
  );
};

export { CommunitySolidarityChart };
