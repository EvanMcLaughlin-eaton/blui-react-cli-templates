import React from 'react';
import { AppBar, IconButton, Theme, Toolbar, Typography, useTheme, useMediaQuery } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { EmptyState } from '@brightlayer-ui/react-components';
import Menu from '@mui/icons-material/Menu';
import Event from '@mui/icons-material/Event';
import { useDrawer } from '../contexts/drawerContextProvider';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    })
);

export const PageTwo = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();
    const md = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <AppBar position={'sticky'}>
                <Toolbar className={classes.toolbar}>
                    {md ? null : (
                        <IconButton
                            color={'inherit'}
                            onClick={(): void => {
                                setDrawerOpen(true);
                            }}
                            edge={'start'}
                            style={{ marginRight: theme.spacing(3) }}
                            size="large"
                        >
                            <Menu />
                        </IconButton>
                    )}
                    <Typography variant={'h6'} color={'inherit'}>
                        Page Two
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{ flex: '1 1 0px' }}>
                <EmptyState
                    icon={<Event fontSize={'inherit'} />}
                    title={'Coming Soon'}
                    description={'Replace this page with your own content'}
                />
            </div>
        </div>
    );
};
