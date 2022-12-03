import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { gql, useQuery } from "@apollo/client";

// TODO
// import { GetJobTypesQuery, GetJobTypesQueryVariables } from "generated/types";

import { IJobTypesState, EJobTypesActionType } from "./types";

export const setJobTypes = (data: IJobTypesState["data"]) => ({
  type: EJobTypesActionType.SET_JOB_TYPES,
  payload: { data },
});

export const setJobType = (id: string, jobType: IJobTypesState["data"][0]) => ({
  type: EJobTypesActionType.SET_JOB_TYPE,
  payload: { id, jobType },
});

const GET_JOB_TYPES = gql`
  query GetJobTypes {
    jobTypes {
      nodes {
        id
        title
        notes
      }
    }
  }
`;

export const useGetJobTypes = () => {
  const dispatch = useDispatch();

  // TODO
  // const query = useQuery<GetJobTypesQuery, GetJobTypesQueryVariables>(
  //   GET_JOB_TYPES
  // );

  const query = useQuery(GET_JOB_TYPES);
  const jobTypes = query?.data?.jobTypes?.nodes;

  useEffect(() => {
    dispatch(setJobTypes(jobTypes));
  }, [dispatch, jobTypes]);

  return query;
};
