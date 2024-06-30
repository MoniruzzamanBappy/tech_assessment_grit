import { AppStoreProvider } from '@/state/AppStoreProvider';
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import React from 'react';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata: Metadata = {
    title: 'Rate Calender App',
    description: 'Rate Calender App Developed by Md. Moniruzzaman',
    icons: {
        shortcut: "/fab.png",
      },

};

const RootLayout = ({children}: Readonly<{ children: React.ReactNode; }>) => {

    return (
        <html lang={'en'}>
        <body>
        <AppRouterCacheProvider options={{key: 'css'}}>
            <AppStoreProvider>
                    {children}
            </AppStoreProvider>
            <Toaster toastOptions={{ duration: 3000 }} />
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
export default RootLayout;
