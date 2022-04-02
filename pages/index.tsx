import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import MarketingLayout from "../src/layouts/marketing";
import type { Page } from "../src/types/page";

const Home: Page = () => {
  return (
    <>
      <Head>
        <title>Terrible.Finance - Budgeting for people with terrible finances</title>
      </Head>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          The worst budgeting app you&apos;ve ever seen!
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Terrible.Finance is a budgeting app that is so bad, you&apos;ll think it&apos;s good!
        </Typography>
      </Container>
    </>
  );
};

Home.getLayout = MarketingLayout;

export default Home;
