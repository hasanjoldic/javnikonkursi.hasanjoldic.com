import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { gql, useQuery } from "@apollo/client";
// import { GetJobTagsQuery, GetJobTagsQueryVariables } from "generated/types";

import { IJobTagsState, EJobTagsActionType } from "./types";

export const setJobTags = (data: IJobTagsState["data"]) => ({
  type: EJobTagsActionType.SET_JOB_TAGS,
  payload: { data },
});

export const setJobTag = (id: string, jobTag: IJobTagsState["data"][0]) => ({
  type: EJobTagsActionType.SET_JOB_TAG,
  payload: { id, jobTag },
});

const GET_JOB_TYPE_TAGS = gql`
  query GetJobTags {
    jobTags {
      nodes {
        id
        title
        notes
      }
    }
  }
`;

export const useGetJobTags = () => {
  const dispatch = useDispatch();

  // const query = useQuery<GetJobTagsQuery, GetJobTagsQueryVariables>(
  //   GET_JOB_TYPE_TAGS
  // );
  const query = useQuery<any, any>(GET_JOB_TYPE_TAGS);
  const jobTags = query?.data?.jobTags?.nodes;

  useEffect(() => {
    dispatch(setJobTags(jobTags));
  }, [dispatch, jobTags]);

  return query;
};
