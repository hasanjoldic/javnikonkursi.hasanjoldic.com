import Head from "next/head";

import Box from "@mui/material/Box";

import { useRouter } from "next/router";

import { useAppSelector } from "../../store";
import { Job } from "../../components/job";

const JobDetail: React.FC = () => {
  const { query } = useRouter();
  const { id } = query;

  const jobs = useAppSelector((state) => state.jobs.data);

  const job = jobs.find((job) => job.id === id);

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={2}
    >
      <Head>
        <title>Javni konkursi | {job?.title}</title>
      </Head>
      <Job job={job} />
    </Box>
  );
};

export default JobDetail;
