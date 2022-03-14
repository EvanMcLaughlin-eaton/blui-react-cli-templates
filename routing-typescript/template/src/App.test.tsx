import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, Theme, StyledEngineProvider, createTheme, adaptV4Theme } from '@mui/material';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import { HomePage } from './pages/home';
import { DrawerContext } from './contexts/drawerContextProvider';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


test('renders welcome text', () => {
    render(
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={createTheme(adaptV4Theme(BLUIThemes.blue))}>
                <DrawerContext.Provider
                    value={{
                        drawerOpen: true,
                        setDrawerOpen: jest.fn(),
                    }}
                >
                    <HomePage />
                </DrawerContext.Provider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
    const bluiText = screen.getByText(/Welcome to Brightlayer/i);
    expect(bluiText).toBeInTheDocument();
});
