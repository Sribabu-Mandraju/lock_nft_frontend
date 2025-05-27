// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pools from "./pages/Pools";
import RealWorldAssets from "./pages/RealWorldAssets";
import OperatingSystem from "./pages/OperatingSystem";
import Staking from "./pages/Stacking";
  // import NotFound from "./pages/NotFound";
import Overview from "./pages/Overview";
import ConnectWallet from "./components/ConnectButton";

const App = () => (
  <>
  {/* <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/connect" element={<ConnectWallet />} />
          <Route path="/pools" element={<Pools />} />
          <Route path="/rwa" element={<RealWorldAssets />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/os" element={<OperatingSystem />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    {/* </TooltipProvider>
  </QueryClientProvider> */}
  </>
);

export default App;