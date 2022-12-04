import Link from "next/link";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

interface Props {
  height: string | number;
}

export const Header: React.FC<Props> = ({ height }) => {
  return (
    <AppBar elevation={0} style={{ height }}>
      <Toolbar>
        <Box width="100%" display="flex" justifyContent="center">
          <Link href="/">
            <a>
              <Box display="flex" alignItems="center" columnGap={4}>
                <img src="/logo.png" alt="logo" width={32} height={32} />
                <Typography
                  variant="h6"
                  textAlign="center"
                  component="div"
                  lineHeight={1.2}
                >
                  Javni konkursi u Bosni i Hercegovini
                </Typography>
              </Box>
            </a>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
