import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { gql, useQuery } from "@apollo/client";

// TODO
// import { GetJobsQuery, GetJobsQueryVariables } from "generated/types";

import { IJobsState, EJobsActionType } from "./types";

export const setJobs = (data: IJobsState["data"]) => ({
  type: EJobsActionType.SET_JOBS,
  payload: { data },
});

export const setJob = (id: string, job: IJobsState["data"][0]) => ({
  type: EJobsActionType.SET_JOB,
  payload: { id, job },
});

const GET_JOBS = gql`
  query GetJobs {
    jobs {
      nodes {
        id
        title
        numberOfOpenings
        startDate
        endDate
        externalUrl
        notes
        region
        company {
          id
          title
        }
        jobType {
          id
          title
        }
        _createdAt
        _updatedAt
      }
    }
  }
`;

export const useGetJobs = () => {
  const dispatch = useDispatch();

  // TODO
  // const query = useQuery<GetJobsQuery, GetJobsQueryVariables>(GET_JOBS);
  const query = useQuery(GET_JOBS);
  const jobs = query?.data?.jobs?.nodes;

  useEffect(() => {
    dispatch(setJobs(jobs));
  }, [dispatch, jobs]);

  return query;
};
