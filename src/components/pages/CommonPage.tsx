
// import { Container } from '@mui/material';
import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';

type CommonPageProps = {
    children: ReactNode;
};

const CommonPage: React.FC<CommonPageProps> = ({ children }) => {
    return <Grid className="">
       {children}
        </Grid>
};
export default CommonPage;
