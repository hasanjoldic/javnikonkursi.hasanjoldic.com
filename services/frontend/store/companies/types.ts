// TODO
// import { GetCompaniesQuery } from "generated/types";

export enum ECompaniesActionType {
  SET_COMPANIES = "@@companies/SET_COMPANIES",
  SET_COMPANY = "@@companies/SET_COMPANY",
}
export interface ICompaniesState {
  // TODO
  // data: GetCompaniesQuery["companies"]["nodes"];
  data: any[];
}
