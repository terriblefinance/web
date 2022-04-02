import { ReactElement } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

const footerItems = [
  {
    header: "Company",
    items: ["Team", "History", "Contact Us", "Locations"],
  },
  {
    header: "Features",
    items: ["Team", "History", "Contact Us", "Locations"],
  },
  {
    header: "Resources",
    items: ["Team", "History", "Contact Us", "Locations"],
  },
  {
    header: "Legal",
    items: ["Team", "History", "Contact Us", "Locations"],
  },
];

const MarketingLayout = (page: ReactElement) => (
  <>
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Terrible
        </Typography>
        <nav>
          <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }}>
            Features
          </Link>
          <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }}>
            Pricing
          </Link>
          <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }}>
            About
          </Link>
        </nav>
        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
    {page}
    <Container
      maxWidth="md"
      component="footer"
      sx={{ borderTop: (theme) => `1px solid ${theme.palette.divider}`, mt: 8, py: [3, 6] }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        {footerItems.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.header}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {footer.header}
            </Typography>
            <ul>
              {footer.items.map((item) => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
        {"Copyright © "}
        <Link color="inherit" href="/">
          Terrible
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  </>
);

export default MarketingLayout;
