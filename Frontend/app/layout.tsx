"use client";
import Stack from "@mui/material/Stack";
import "./globals.css";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { NAVDATA } from "@/constants";
import TopBar from "@/components/layout/top-bar";
import { Provider } from "react-redux";
import { store } from "@/store";
import Link from "next/link";
import React from "react";

// const metadata: Metadata = {
//   title: "Anyware software",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className="bg-gray-100">
          <Stack direction="row">
            {/* Side bar -------------------------------------------------------------------------- */}
            <List className="bg-gradient-to-t from-cyan-500 via-cyan-700 to-customBlue fixed left-0 top-0 h-screen">
              <h1
                className="text-3xl font-bold place-self-center mb-12 "
                key={1}
              >
                Coligo
              </h1>
              {NAVDATA.map((item) => (
                <Link href={item.href} key={item.text}>
                  <ListItem className="px-10 py-5 hover:bg-white hover:text-cyan-500 group">
                    <ListItemIcon className="text-white group-hover:text-cyan-500">
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                </Link>
              ))}
            </List>
            <p className="px-8 w-72 "></p>

            <Stack className="w-full bg-gray-100">
              <TopBar />
              {children}
            </Stack>
          </Stack>
        </body>
      </html>
    </Provider>
  );
}
