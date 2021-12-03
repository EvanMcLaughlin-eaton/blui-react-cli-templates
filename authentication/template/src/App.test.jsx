import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import { HomePage } from './pages/home';
import { DrawerContext } from './contexts/drawerContextProvider';

jest.mock('@brightlayer-ui/react-auth-shared', () => ({
    useSecurityActions: () => ({
        onUserNotAuthenticated: jest.fn(),
        showChangePassword: jest.fn(),
    }),
}));

test('renders welcome text', () => {
    render(
        <ThemeProvider theme={createMuiTheme(BLUIThemes.blue)}>
            <DrawerContext.Provider
                value={{
                    drawerOpen: true,
                    setDrawerOpen: jest.fn(),
                }}
            >
                <HomePage />
            </DrawerContext.Provider>
        </ThemeProvider>
    );
    const bluiText = screen.getByText(/Welcome to PX/i);
    expect(bluiText).toBeInTheDocument();
});
