import type { NextPage } from "next";
import Head from "next/head";

import { shallowEqual } from "react-redux";

import _orderBy from "lodash/orderBy";

import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { useAppSelector } from "../store";
import { Filters, Job } from "../components/job";

const Home: NextPage = () => {
  const {
    jobs,
    regionsFilter,
    jobTypesFilter,
    companiesFilter,
    shouldIncludeExpired,
  } = useAppSelector(
    (state) => ({
      jobs: state.jobs.data,
      regionsFilter: state.filters.regions,
      jobTypesFilter: state.filters.jobTypes,
      companiesFilter: state.filters.companies,
      shouldIncludeExpired: state.filters.shouldIncludeExpired,
    }),
    shallowEqual
  );

  console.log({
    regionsFilter,
    jobTypesFilter,
    companiesFilter,
    shouldIncludeExpired,
  });

  const currentDate = new Date().toISOString();

  const filteredJobs = _orderBy(
    // TODO: job type
    jobs.filter((job: any) => {
      if (
        regionsFilter.length &&
        !regionsFilter.map((o) => o.value).includes(job.region)
      ) {
        return false;
      }
      if (
        jobTypesFilter.length &&
        !jobTypesFilter.map((o) => o.value).includes(job.jobType?.id)
      ) {
        return false;
      }
      if (
        companiesFilter.length &&
        !companiesFilter.map((o) => o.value).includes(job.company.id)
      ) {
        return false;
      }
      if (!shouldIncludeExpired && currentDate > job.endDate) {
        return false;
      }
      return true;
    }),
    (job: any) => job._createdAt,
    "desc"
  );

  return (
    <>
      <Head>
        <title>Javni konkursi</title>
      </Head>

      <Container>
        <Filters />
        <Box marginY={2}>
          <Divider />
        </Box>
        {!filteredJobs.length && (
          <Typography variant="h3" padding={1}>
            Nema konkursa za date filtere.
          </Typography>
        )}
        {filteredJobs.map((job: any) => (
          <Job key={job.id} job={job} />
        ))}
      </Container>
    </>
  );
};

const Container = styled("div")(({ theme }) => ({
  flex: 1,
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
}));

export default Home;
