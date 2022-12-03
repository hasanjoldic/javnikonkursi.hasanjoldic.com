import React from "react";
import { shallowEqual, useDispatch } from "react-redux";

import { Box, Switch, FormGroup, FormControlLabel } from "@mui/material";

import { regions } from "../../data";
import { updateFilters, useAppSelector } from "../../store";
import { SearchSelectInput, ISelectOption } from "../../components/inputs";

const regionOptions = regions.map(({ value, label }) => ({ value, label }));

export const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const {
    jobTypes,
    companies,
    regionsFilter,
    jobTypesFilter,
    companiesFilter,
    shouldIncludeExpired,
  } = useAppSelector(
    (state) => ({
      jobTypes: state.jobTypes.data,
      companies: state.companies.data,
      regionsFilter: state.filters.regions,
      jobTypesFilter: state.filters.jobTypes,
      companiesFilter: state.filters.companies,
      shouldIncludeExpired: state.filters.shouldIncludeExpired,
    }),
    shallowEqual
  );

  const [jobTypeOptions, setJobTypeOptions] = React.useState<ISelectOption[]>(
    []
  );
  const [companyOptions, setCompanyOptions] = React.useState<ISelectOption[]>(
    []
  );

  React.useEffect(() => {
    setJobTypeOptions(
      jobTypes.map((o) => ({
        label: o.title,
        value: o.id,
      }))
    );
  }, [setJobTypeOptions, jobTypes]);

  React.useEffect(() => {
    setCompanyOptions(
      companies.map((o) => ({
        label: o.title,
        value: o.id,
      }))
    );
  }, [setCompanyOptions, companies]);

  return (
    <Box marginTop={1} display="grid" rowGap="20px">
      <Box display="grid" rowGap="1rem" px={2}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={shouldIncludeExpired}
                onChange={(_event, checked) => {
                  dispatch(updateFilters({ shouldIncludeExpired: checked }));
                }}
                color="primary"
              />
            }
            label="Istekli konkursi"
          />
        </FormGroup>

        <SearchSelectInput
          placeholder="Lokacija..."
          options={regionOptions}
          value={regionsFilter}
          multiple
          onChange={(_event, value) =>
            dispatch(updateFilters({ regions: value || [] }))
          }
        />

        <SearchSelectInput
          placeholder="Vrsta posla..."
          options={jobTypeOptions}
          value={jobTypesFilter}
          onChange={(_event, value) =>
            dispatch(updateFilters({ jobTypes: value || [] }))
          }
          multiple
        />

        <SearchSelectInput
          placeholder="Javna ustanova/preduzeće..."
          options={companyOptions}
          value={companiesFilter}
          onChange={(_event, value) =>
            dispatch(updateFilters({ companies: value || [] }))
          }
          multiple
        />
      </Box>
    </Box>
  );
};
