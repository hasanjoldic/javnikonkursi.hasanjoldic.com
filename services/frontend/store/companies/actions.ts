import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { gql, useQuery } from "@apollo/client";

// TODO
// import { GetCompaniesQuery, GetCompaniesQueryVariables } from "generated/types";

import { ICompaniesState, ECompaniesActionType } from "./types";

export const setCompanies = (data: ICompaniesState["data"]) => ({
  type: ECompaniesActionType.SET_COMPANIES,
  payload: { data },
});

export const setCompany = (
  id: string,
  company: ICompaniesState["data"][0]
) => ({
  type: ECompaniesActionType.SET_COMPANY,
  payload: { id, company },
});

const GET_COMPANIES = gql`
  query GetCompanies {
    companies {
      nodes {
        id
        url
        title
        region

        _createdAt
        _updatedAt
      }
    }
  }
`;

export const useGetCompanies = () => {
  const dispatch = useDispatch();

  // TODO
  // const query = useQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(
  //   GET_COMPANIES
  // );

  const query = useQuery(GET_COMPANIES);
  const companies = query?.data?.companies?.nodes;

  useEffect(() => {
    dispatch(setCompanies(companies));
  }, [dispatch, companies]);

  return query;
};
