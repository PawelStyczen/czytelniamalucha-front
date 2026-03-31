const env = import.meta.env;

const siteUrl = env.PUBLIC_SITE_URL ?? "https://www.czytelniamalucha.pl";
const siteHost = env.PUBLIC_SITE_HOST ?? "www.czytelniamalucha.pl";
const businessName = env.PUBLIC_BUSINESS_NAME ?? "[uzupełnij nazwę sprzedawcy]";
const businessNip = env.PUBLIC_BUSINESS_NIP ?? "[uzupełnij NIP]";
const businessAddress =
  env.PUBLIC_BUSINESS_ADDRESS ?? "[uzupełnij adres do doręczeń]";
const contactEmail = env.PUBLIC_CONTACT_EMAIL ?? "[uzupełnij adres e-mail]";

const hasContactEmail = !contactEmail.startsWith("[");

export const publicSite = {
  siteUrl,
  siteHost,
  businessName,
  businessNip,
  businessAddress,
  contactEmail,
  hasContactEmail,
  contactMailto: hasContactEmail ? `mailto:${contactEmail}` : "#",
};
