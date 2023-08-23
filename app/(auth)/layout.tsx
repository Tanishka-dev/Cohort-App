import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from 'next/font/google';
import type { Metadata} from 'next';
import React from "react";

const inter= Inter({subsets:["latin"]})

export const metadata: Metadata = {
    title: "Authorization",
    description: "Build by Tanishka Yadav"

}

export default function RootLayout({children,}:{children: React.ReactNode})
{ return(
    <ClerkProvider>
        <html>
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>
    </ClerkProvider>
)

}