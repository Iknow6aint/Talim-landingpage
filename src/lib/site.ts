export const CONTACT_EMAIL = "hello@mytalim.com";
export const SUPPORT_EMAIL = "support@mytalim.com";
export const PRIVACY_EMAIL = "privacy@mytalim.com";

export const DEMO_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Talim demo request")}`;
export const WAITLIST_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Talim verified records")}`;

export const PRODUCT_VIDEO_ID = "rmejrs_kzT8";
export const APP_STORE_URL = "https://apps.apple.com/us/app/mytalim/id6783429017";
export const LOGO_SRC = "/images/landing/brand/talim-mark.png";
export const PRODUCT_IMAGES = "/images/landing/product";

export const PORTAL_URLS = {
  admin: "https://school.mytalim.com",
  teacher: "https://teachers.mytalim.com",
  parent: "https://parents.mytalim.com",
  student: "https://students.mytalim.com",
} as const;
