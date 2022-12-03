import { useRouter } from "next/router";
import Link from "next/link";

import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

import {
  Place as PlaceIcon,
  Work as WorkIcon,
  People as PeopleIcon,
  BusinessRounded as BusinessRoundedIcon,
  OpenInNew as OpenInNewIcon,
} from "@mui/icons-material";

import { dateFormat, EDateFormat } from "../../utils";
import { getJobInternalUrl } from "../../store";
import { getRegionLabel } from "../../data";

// TODO: generate GraphQL types
// import { GetJobsQuery } from "generated/types";

const Chips = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  "& > .MuiChip-root": {
    backgroundColor: "white",
    height: "unset",
    minHeight: theme.spacing(4),
    display: "inline-flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0.125rem",
    "& > .MuiChip-label": {
      whiteSpace: "normal",
    },
  },
  [theme.breakpoints.up("lg")]: {
    display: "block",
    margin: "0.25rem",
  },
}));

const Buttons = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    justifyContent: "space-between",
  },
  [theme.breakpoints.down("md")]: {
    display: "grid",
    ".MuiButton-root": {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
  },
}));

const Root = styled(Paper)(({ theme }) => ({
  width: "100%",
  maxWidth: "50rem",
  padding: theme.spacing(4, 2),
  margin: "0 auto",
  marginBottom: theme.spacing(2),

  // border: `1px solid ${theme.palette.divider}`,
}));

interface IProps {
  // TODO: generate GraphQL types
  // job: GetJobsQuery["jobs"]["nodes"][0];
  job: any;
  // occupation: EJobType;
}

export const Job: React.FC<IProps> = (props) => {
  const { pathname } = useRouter();
  const { job } = props;

  const isDetailPage = pathname.includes("konkursi");

  return (
    <Root id={job?.id} elevation={1}>
      <Typography variant="h5">{job?.title}</Typography>
      <Divider />
      <Box paddingY={1}>
        <Chips>
          <Chip icon={<PlaceIcon />} label={getRegionLabel(job?.region)} />
          <Chip icon={<BusinessRoundedIcon />} label={job?.company.title} />
          {job?.jobType && (
            <Chip icon={<WorkIcon />} label={job?.jobType.title} />
          )}
          <Chip icon={<PeopleIcon />} label={job?.numberOfOpenings} />
        </Chips>
        <div></div>
      </Box>
      <Divider />
      <Box paddingY={1}>
        <Typography>
          Objavljeno: {dateFormat(job?.startDate, EDateFormat["DD.MM.YYYY"])}
        </Typography>
        <Typography>
          Ističe: {dateFormat(job?.endDate, EDateFormat["DD.MM.YYYY"])}
        </Typography>
      </Box>
      {isDetailPage && job?.notes && (
        <Box paddingY={1}>
          <Divider />
          <Box paddingY={1}>
            <Typography>{job.notes}</Typography>
          </Box>
          <Divider />
        </Box>
      )}
      <Box pt={2}>
        <Buttons>
          <Box>
            {!isDetailPage && (
              <Link href={`/konkursi/${job?.id}`}>
                <Button variant="contained" color="primary">
                  Otvori
                </Button>
              </Link>
            )}
            {isDetailPage && job?.externalUrl && (
              <a href={job.externalUrl} target="_blank" rel="noreferrer">
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<OpenInNewIcon />}
                >
                  Izvorni oglas
                </Button>
              </a>
            )}
          </Box>
          <Box>
            {isDetailPage && (
              <a
                href={getJobInternalUrl(job?.id)}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<OpenInNewIcon />}
                >
                  Arhivirani oglas
                </Button>
              </a>
            )}
          </Box>
        </Buttons>
      </Box>
    </Root>
  );
};
