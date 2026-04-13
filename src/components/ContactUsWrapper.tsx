// components/ContactUsWrapper.tsx
import { getCachedOutlet } from "@/lib/outlet/getCachedOutlet";
import ContactUs from "@/custom/cus-components/ContactUs";

export default async function ContactUsWrapper() {
  const outlet = await getCachedOutlet();

  return <ContactUs outlet={outlet} />;
}