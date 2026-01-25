import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle = "Minecraft 音频包生成器";
const description = "在线生成Minecraft音频包，使用在线FFmpeg转换音频文件。纯本地运算，无需上传文件到服务器。";

export const metadata: Metadata = {
  applicationName: `${defaultTitle}`,
  title: {
    default: defaultTitle,
    template: `%s | ${defaultTitle}`,
  },
  description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Minecraft",
    "资源包",
    "音频包",
    "OGG",
    "Vorbis",
    "FFmpeg",
    "sounds.json",
    "Java版",
    "基岩版",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${defaultTitle}`,
    description,
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: defaultTitle,
    images: [
      {
        url: "/note_block.png",
        width: 512,
        height: 512,
        alt: defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${defaultTitle}`,
    description,
    images: ["/note_block.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/favicon.ico" }],
  },
  themeColor: "#38bdf8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
