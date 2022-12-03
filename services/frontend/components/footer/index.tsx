import styled from "@mui/material/styles/styled";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { ERegion, getRegionLabel } from "../../data";
import { darkTheme } from "../../styles/theme";

export const Footer: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper square>
        <Divider />

        <StyledFooter>
          <LinksContainer>
            <Typography variant="subtitle2">
              Službe za zapošljavanje:
            </Typography>
            <Link href="https://usk-szz.ba/oglasi" target="blank">
              <Typography variant="body1">
                {getRegionLabel(ERegion["UNSKO_SANSKI_KANTON"])}
              </Typography>
            </Link>
            <Link
              href="https://www.facebook.com/Slu%C5%BEba-za-zapo%C5%A1ljavanje-USK-a-507371329352460/"
              target="blank"
            >
              <Typography variant="body1">
                {getRegionLabel(ERegion["UNSKO_SANSKI_KANTON"])} | Facebook
              </Typography>
            </Link>
            <Link
              href="http://www.szuzp.ba/nova-stranica-3.aspx"
              target="blank"
            >
              <Typography variant="body1">
                {getRegionLabel(ERegion["POSAVSKI_KANTON"])}
              </Typography>
            </Link>
            <Link href="https://szztk.ba/category/oglasi/" target="blank">
              <Typography variant="body1">
                {getRegionLabel(ERegion.TUZLANSKI_KANTON)}
              </Typography>
            </Link>
            <Link href="http://zdk-szz.ba/searchadvert" target="blank">
              <Typography variant="body1">
                {getRegionLabel(ERegion.ZENICKO_DOBOJSKI_KANTON)}
              </Typography>
            </Link>
            <Link href="https://szzbpk.ba/oglasikonkursi.html" target="blank">
              <Typography variant="body1">
                {getRegionLabel(ERegion.BOSANSKO_PODRINJSKI_KANTON)}
              </Typography>
            </Link>
            <Link
              href="http://szzksbsbk.com.ba/oglasi-za-posao/"
              target="blank"
            >
              <Typography variant="body1">
                {getRegionLabel(ERegion.SREDNJOBOSANSKI_KANTON)}
              </Typography>
            </Link>
            <Link href="https://szzhnz-k.ba/natjecaji.php" target="blank">
              <Typography variant="body1">
                {getRegionLabel(ERegion.HERCEGOVACKO_NERETVANSKI_KANTON)}
              </Typography>
            </Link>
            <Link href="http://szz-zzh.ba/category/oglasi/" target="blank">
              <Typography variant="body1">
                {getRegionLabel(ERegion.ZAPADNOHERCEGOVACKI_KANTON)}
              </Typography>
            </Link>
            <Link href="https://szks.ba/posao/" target="blank">
              <Typography variant="body1">
                {getRegionLabel(ERegion.KANTON_SARAJEVO)}
              </Typography>
            </Link>
            <Link href="http://zzzu-livno.ba/oglasi/page/1" target="blank">
              <Typography variant="body1">
                {getRegionLabel(ERegion.KANTON_10)}
              </Typography>
            </Link>
            <Link
              href="http://www.zzzrs.net/index.php/nezaposleni/oglasi_zavoda/search&exact-filijala=1"
              target="blank"
            >
              <Typography variant="body1">
                {getRegionLabel(ERegion.BANJALUCKA_REGIJA)} | Banja Luka
              </Typography>
            </Link>
            <Link
              href="http://www.zzzrs.net/index.php/nezaposleni/oglasi_zavoda/search&exact-filijala=5"
              target="blank"
            >
              <Typography variant="body1">
                {getRegionLabel(ERegion.BANJALUCKA_REGIJA)} | Prijedor
              </Typography>
            </Link>
            <Link
              href="http://www.zzzrs.net/index.php/nezaposleni/oglasi_zavoda/search&exact-filijala=2"
              target="blank"
            >
              <Typography variant="body1">
                {getRegionLabel(ERegion.DOBOJSKO_BIJELJINSKA_REGIJA)} |
                Bijeljina
              </Typography>
            </Link>
            <Link
              href="http://www.zzzrs.net/index.php/nezaposleni/oglasi_zavoda/search&exact-filijala=3"
              target="blank"
            >
              <Typography variant="body1">
                {getRegionLabel(ERegion.DOBOJSKO_BIJELJINSKA_REGIJA)} | Doboj
              </Typography>
            </Link>
            <Link
              href="http://www.zzzrs.net/index.php/nezaposleni/oglasi_zavoda/search&exact-filijala=4"
              target="blank"
            >
              <Typography variant="body1">
                {getRegionLabel(ERegion.SARAJEVSKO_ZVORNICKA_REGIJA)} | Istočno
                Sarajevo
              </Typography>
            </Link>
            <Link
              href="http://www.zzzrs.net/index.php/nezaposleni/oglasi_zavoda/search&exact-filijala=7"
              target="blank"
            >
              <Typography variant="body1">
                {getRegionLabel(ERegion.SARAJEVSKO_ZVORNICKA_REGIJA)} | Zvornik
              </Typography>
            </Link>
            <Link
              href="http://www.zzzrs.net/index.php/nezaposleni/oglasi_zavoda/search&exact-filijala=6"
              target="blank"
            >
              <Typography variant="body1">
                {getRegionLabel(ERegion.TREBINJSKO_FOCANSKA_REGIJA)}
              </Typography>
            </Link>
            <Link
              href="https://zzzbrcko.org/index.php/konkursi2016"
              target="blank"
            >
              <Typography variant="body1">
                {getRegionLabel(ERegion.BRCKO_DISTRIKT)}
              </Typography>
            </Link>
          </LinksContainer>

          <div>
            <Typography variant="subtitle2">
              Kontakt:{" "}
              <Typography color="primary">joldic.hasan@gmail.com</Typography>
            </Typography>
          </div>
        </StyledFooter>
        <Box pb={2}>
          <Typography textAlign="center">
            Konkursi za zapošljavanje u javnim ustanovama i preduzećima u Bosni
            i Hercegovini
          </Typography>
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

const StyledFooter = styled("footer")(({ theme }) => ({
  padding: theme.spacing(5),
  display: "flex",
  justifyContent: "space-around",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",

    "& > div": {
      marginBottom: "5rem",
    },
  },
}));

const LinksContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  "& > a": {
    lineHeight: 2,
  },
}));
