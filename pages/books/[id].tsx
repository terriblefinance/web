import Head from "next/head";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import AppLayout from "../../src/layouts/app";
import type { Page } from "../../src/types/page";

const BookShowPage: Page = () => {
  return (
    <>
      <Head>
        <title>Book Name - Terrible.Finance</title>
      </Head>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
              <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                The worst budgeting app you&apos;ve ever seen!
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" component="p">
                Terrible.Finance is a budgeting app that is so bad, you&apos;ll think it&apos;s good!
              </Typography>
            </Container>
          </Paper>
        </Grid>
      </Container>
    </>
  );
};

BookShowPage.getLayout = AppLayout;

export default BookShowPage;
