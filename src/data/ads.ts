import inventory from "../../ad-placement-manifest.json";
import type { AdConfig } from "@/types/ads";

// Page Builder leaves matching codes empty; Adsterra Integrator supplies real codes after launch.
export const ads: AdConfig = {
  units: {
    "page-top-728x90": "",
    "page-top-468x60": "",
    "page-top-320x50": "",
    "home-after-entry-native-banner": "",
    "guide-native-native-banner": "",
    "guide-section-break-728x90": "",
    "guide-section-break-468x60": "",
    "guide-section-break-320x50": "",
    "guide-before-faq-468x60": "",
    "guide-before-faq-320x50": "",
    "footer-sponsored-smartlink": "",
  },
};

export const adInventory = inventory;