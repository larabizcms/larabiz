import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PageContainer from '../components/container/PageContainer';
import SalesOverview from '../components/dashboard/SalesOverview';
import YearlyBreakup from '../components/dashboard/YearlyBreakup';
import MonthlyEarnings from '../components/dashboard/MonthlyEarnings';
import RecentTransactions from '../components/dashboard/RecentTransactions';
import ProductPerformance from '../components/dashboard/ProductPerformance';
import Blog from '../components/dashboard/Blog';

// TODO remove, this demo shouldn't need to reset the theme.
export default function Dashboard() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
    );
}
