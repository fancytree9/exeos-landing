import NetworkRolesSection from "@/components/network-roles/network-roles";
import Hero from "@/components/hero/hero";
import Partners from "@/components/partners/partners";
import FeaturesSection from "@/components/features/features";
import DemandForNetworkingSection from "@/components/demand-for-networking/demand-for-networking";
import UseCases from "@/components/use-cases/use-cases";
import GlobalConnectivityNeeds from "@/components/global-connectivity-needs/global-connectivity-needs";
import FaqSection from "@/components/faq/faq";
import CallToActionSection from "@/components/call-to-action/call-to-action";
import ArchitectureOverviewSection from "@/components/architecture-overview/architecture-overview";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <NetworkRolesSection />
      <FeaturesSection />
      <DemandForNetworkingSection />
      <ArchitectureOverviewSection />
      <UseCases />
      <GlobalConnectivityNeeds />
      <FaqSection />
      <CallToActionSection />
    </>
  );
}
