import inventory from "../../ad-placement-manifest.json";
import type { AdConfig } from "@/types/ads";

// Page Builder leaves matching codes empty; Adsterra Integrator supplies real codes after launch.
export const ads: AdConfig = {
  units: {
    "page-top-728x90": "<script>\n  atOptions = {\n    'key' : '9c991e654abff6203e750edff7e6b13a',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/9c991e654abff6203e750edff7e6b13a\"></script>",
    "page-top-468x60": "<script>\n  atOptions = {\n    'key' : '9c0e1940db277b084a3f7d8c44c1317b',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/9c0e1940db277b084a3f7d8c44c1317b\"></script>",
    "page-top-320x50": "<script>\n  atOptions = {\n    'key' : '694f93de319426fdd958c7703bc181af',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/694f93de319426fdd958c7703bc181af\"></script>",
    "home-after-entry-native-banner": "<script async=\"async\" data-cfasync=\"false\" src=\"https://bauval.org/21/47549e818b55351366cefa96ac9b0b2a\"></script>\n<div id=\"container-47549e818b55351366cefa96ac9b0b2a\"></div>",
    "guide-native-native-banner": "<script async=\"async\" data-cfasync=\"false\" src=\"https://bauval.org/21/47549e818b55351366cefa96ac9b0b2a\"></script>\n<div id=\"container-47549e818b55351366cefa96ac9b0b2a\"></div>",
    "guide-section-break-728x90": "<script>\n  atOptions = {\n    'key' : '9c991e654abff6203e750edff7e6b13a',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/9c991e654abff6203e750edff7e6b13a\"></script>",
    "guide-section-break-468x60": "<script>\n  atOptions = {\n    'key' : '9c0e1940db277b084a3f7d8c44c1317b',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/9c0e1940db277b084a3f7d8c44c1317b\"></script>",
    "guide-section-break-320x50": "<script>\n  atOptions = {\n    'key' : '694f93de319426fdd958c7703bc181af',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/694f93de319426fdd958c7703bc181af\"></script>",
    "guide-before-faq-468x60": "<script>\n  atOptions = {\n    'key' : '9c0e1940db277b084a3f7d8c44c1317b',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/9c0e1940db277b084a3f7d8c44c1317b\"></script>",
    "guide-before-faq-320x50": "<script>\n  atOptions = {\n    'key' : '694f93de319426fdd958c7703bc181af',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/694f93de319426fdd958c7703bc181af\"></script>",
    "footer-sponsored-smartlink": "https://araplhn.org/4/ba26683b399c59d5bdf05a675fc1c0c6",
  },
};

export const adInventory = inventory;
