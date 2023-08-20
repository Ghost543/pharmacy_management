import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {TabProvider} from "@/context/tabContext";
import {WorkerProvider} from "@/context/workersContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <WorkerProvider>
          <TabProvider>
            <Component {...pageProps} />
          </TabProvider>
      </WorkerProvider>
  );
}
