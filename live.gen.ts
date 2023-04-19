// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./functions/LoadGitHubRawPostList.ts";
import * as $1 from "./functions/LoadGitHubRawPost.ts";
import * as $2 from "./functions/LoadPageProps.ts";
import * as $3 from "./functions/LoadGitHubRaw.ts";
import * as $$$$0 from "./routes/docs/[...slug].tsx";
import * as $$$$1 from "./routes/index.tsx";
import * as $$$$2 from "./routes/api/leads.tsx";
import * as $$$$3 from "./routes/_app.tsx";
import * as $$$$4 from "./routes/gfm.css.ts";
import * as $$$$$0 from "./islands/CampHeader.tsx";
import * as $$$$$1 from "./islands/ContactUs.tsx";
import * as $$$$$2 from "./islands/Cms.tsx";
import * as $$$$$3 from "./islands/Header.tsx";
import * as $$$$$4 from "./islands/SliderJS.tsx";
import * as $$$$$5 from "./islands/ImpactCalculator.tsx";
import * as $$$$$6 from "./islands/CampMentor.tsx";
import * as $$$$$$$$0 from "./sections/Integration.tsx";
import * as $$$$$$$$1 from "./sections/CampHero.tsx";
import * as $$$$$$$$2 from "./sections/Features.tsx";
import * as $$$$$$$$3 from "./sections/CampSteps.tsx";
import * as $$$$$$$$4 from "./sections/ContactUs.tsx";
import * as $$$$$$$$5 from "./sections/Head.tsx";
import * as $$$$$$$$6 from "./sections/About.tsx";
import * as $$$$$$$$7 from "./sections/BlogPostList.tsx";
import * as $$$$$$$$8 from "./sections/MainBanner.tsx";
import * as $$$$$$$$9 from "./sections/Cms.tsx";
import * as $$$$$$$$10 from "./sections/DepoimentsCarrossel.tsx";
import * as $$$$$$$$11 from "./sections/Divider.tsx";
import * as $$$$$$$$12 from "./sections/Header.tsx";
import * as $$$$$$$$13 from "./sections/QuillText.tsx";
import * as $$$$$$$$14 from "./sections/Markdown.tsx";
import * as $$$$$$$$15 from "./sections/CampComments.tsx";
import * as $$$$$$$$16 from "./sections/TripletBanner.tsx";
import * as $$$$$$$$17 from "./sections/Differentials.tsx";
import * as $$$$$$$$18 from "./sections/Benefits.tsx";
import * as $$$$$$$$19 from "./sections/Community.tsx";
import * as $$$$$$$$20 from "./sections/Partner.tsx";
import * as $$$$$$$$21 from "./sections/Delight.tsx";
import * as $$$$$$$$22 from "./sections/ImpactCalculator.tsx";
import * as $$$$$$$$23 from "./sections/BlogHeader.tsx";
import * as $$$$$$$$24 from "./sections/BlogPostHeader.tsx";
import * as $$$$$$$$25 from "./sections/Pricing.tsx";
import * as $$$$$$$$26 from "./sections/CampMentor.tsx";
import * as $$$$$$$$27 from "./sections/Footer.tsx";
import * as $$$$$$$$28 from "./sections/Carousel.tsx";
import * as $$$$$$$$29 from "./sections/CampRegistration.tsx";
import * as $$$$$$$$30 from "./sections/FooterBigLogo.tsx";
import * as $$$$$$$$31 from "./sections/Faq.tsx";
import * as $$$$$$$$32 from "./sections/StripePricing.tsx";
import * as $live_middleware from "$live/routes/_middleware.ts";
import * as $live_workbench from "$live/routes/live/workbench.ts";
import * as $live_invoke from "$live/routes/live/invoke/index.ts";
import * as $live_editorData from "$live/routes/live/editorData.ts";
import * as $live_inspect from "$live/routes/live/inspect.ts";
import * as $live_meta from "$live/routes/live/_meta.ts";
import * as $live_previews from "$live/routes/live/previews/[...block].tsx";
import * as $live_catchall from "$live/routes/[...catchall].tsx";
import * as i2$$$$2 from "$live/handlers/devPage.ts";
import * as i2$$$$3 from "$live/handlers/fresh.ts";
import * as i2$$$$1 from "$live/handlers/router.ts";
import * as i2$$$$0 from "$live/handlers/routesSelection.ts";
import * as i2$$$$$0 from "$live/pages/LivePage.tsx";
import * as i2$$$9 from "$live/sections/PageInclude.tsx";
import * as i2$$$$$$6 from "$live/matchers/MatchAlways.ts";
import * as i2$$$$$$0 from "$live/matchers/MatchDate.ts";
import * as i2$$$$$$5 from "$live/matchers/MatchEnvironment.ts";
import * as i2$$$$$$3 from "$live/matchers/MatchMulti.ts";
import * as i2$$$$$$4 from "$live/matchers/MatchRandom.ts";
import * as i2$$$$$$2 from "$live/matchers/MatchSite.ts";
import * as i2$$$$$$1 from "$live/matchers/MatchUserAgent.ts";
import * as i2$$$$$$$0 from "$live/flags/audience.ts";
import * as i2$$$$$$$1 from "$live/flags/everyone.ts";
import * as i2$0 from "deco-sites/std/functions/vtexConfig.ts";
import * as i2$1 from "deco-sites/std/functions/vtexProductListingPage.ts";
import * as i2$2 from "deco-sites/std/functions/vndaProductList.ts";
import * as i2$3 from "deco-sites/std/functions/vndaProductDetailsPage.ts";
import * as i2$4 from "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts";
import * as i2$5 from "deco-sites/std/functions/vtexSuggestions.ts";
import * as i2$6 from "deco-sites/std/functions/vtexNavbar.ts";
import * as i2$7 from "deco-sites/std/functions/shopifyProductListingPage.ts";
import * as i2$8 from "deco-sites/std/functions/vtexProductList.ts";
import * as i2$9 from "deco-sites/std/functions/occProductDetailsPage.ts";
import * as i2$10 from "deco-sites/std/functions/vndaProductListingPage.ts";
import * as i2$11 from "deco-sites/std/functions/vtexLegacyProductListingPage.ts";
import * as i2$12 from "deco-sites/std/functions/vtexProductDetailsPage.ts";
import * as i2$13 from "deco-sites/std/functions/vtexLegacyProductList.ts";
import * as i2$14 from "deco-sites/std/functions/shopifyProductList.ts";
import * as i2$15 from "deco-sites/std/functions/shopifyProductDetailsPage.ts";
import * as i2$16 from "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts";
import * as i2$$0 from "deco-sites/std/accounts/vnda.ts";
import * as i2$$1 from "deco-sites/std/accounts/yourViews.ts";
import * as i2$$2 from "deco-sites/std/accounts/vtex.ts";
import * as i2$$3 from "deco-sites/std/accounts/shopify.ts";
import * as i2$$4 from "deco-sites/std/accounts/occ.ts";
import * as i2$$$0 from "deco-sites/std/sections/configYourViews.global.tsx";
import * as i2$$$1 from "deco-sites/std/sections/SEO.tsx";
import * as i2$$$2 from "deco-sites/std/sections/SEOPLP.tsx";
import * as i2$$$3 from "deco-sites/std/sections/configOCC.global.tsx";
import * as i2$$$4 from "deco-sites/std/sections/Analytics.tsx";
import * as i2$$$5 from "deco-sites/std/sections/configShopify.global.tsx";
import * as i2$$$6 from "deco-sites/std/sections/configVNDA.global.tsx";
import * as i2$$$7 from "deco-sites/std/sections/configVTEX.global.tsx";
import * as i2$$$8 from "deco-sites/std/sections/SEOPDP.tsx";

const manifest = {
  "functions": {
    "deco-sites/starting/functions/LoadGitHubRaw.ts": $3,
    "deco-sites/starting/functions/LoadGitHubRawPost.ts": $1,
    "deco-sites/starting/functions/LoadGitHubRawPostList.ts": $0,
    "deco-sites/starting/functions/LoadPageProps.ts": $2,
    "deco-sites/std/functions/occProductDetailsPage.ts": i2$9,
    "deco-sites/std/functions/shopifyProductDetailsPage.ts": i2$15,
    "deco-sites/std/functions/shopifyProductList.ts": i2$14,
    "deco-sites/std/functions/shopifyProductListingPage.ts": i2$7,
    "deco-sites/std/functions/vndaProductDetailsPage.ts": i2$3,
    "deco-sites/std/functions/vndaProductList.ts": i2$2,
    "deco-sites/std/functions/vndaProductListingPage.ts": i2$10,
    "deco-sites/std/functions/vtexConfig.ts": i2$0,
    "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts": i2$4,
    "deco-sites/std/functions/vtexLegacyProductList.ts": i2$13,
    "deco-sites/std/functions/vtexLegacyProductListingPage.ts": i2$11,
    "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts": i2$16,
    "deco-sites/std/functions/vtexNavbar.ts": i2$6,
    "deco-sites/std/functions/vtexProductDetailsPage.ts": i2$12,
    "deco-sites/std/functions/vtexProductList.ts": i2$8,
    "deco-sites/std/functions/vtexProductListingPage.ts": i2$1,
    "deco-sites/std/functions/vtexSuggestions.ts": i2$5,
  },
  "routes": {
    "./routes/_app.tsx": $$$$3,
    "./routes/_middleware.ts": $live_middleware,
    "./routes/[...catchall].tsx": $live_catchall,
    "./routes/api/leads.tsx": $$$$2,
    "./routes/docs/[...slug].tsx": $$$$0,
    "./routes/gfm.css.ts": $$$$4,
    "./routes/index.tsx": $$$$1,
    "./routes/live/_meta.ts": $live_meta,
    "./routes/live/editorData.ts": $live_editorData,
    "./routes/live/inspect.ts": $live_inspect,
    "./routes/live/invoke/index.ts": $live_invoke,
    "./routes/live/previews/[...block].tsx": $live_previews,
    "./routes/live/workbench.ts": $live_workbench,
  },
  "islands": {
    "./islands/CampHeader.tsx": $$$$$0,
    "./islands/CampMentor.tsx": $$$$$6,
    "./islands/Cms.tsx": $$$$$2,
    "./islands/ContactUs.tsx": $$$$$1,
    "./islands/Header.tsx": $$$$$3,
    "./islands/ImpactCalculator.tsx": $$$$$5,
    "./islands/SliderJS.tsx": $$$$$4,
  },
  "sections": {
    "$live/sections/PageInclude.tsx": i2$$$9,
    "deco-sites/starting/sections/About.tsx": $$$$$$$$6,
    "deco-sites/starting/sections/Benefits.tsx": $$$$$$$$18,
    "deco-sites/starting/sections/BlogHeader.tsx": $$$$$$$$23,
    "deco-sites/starting/sections/BlogPostHeader.tsx": $$$$$$$$24,
    "deco-sites/starting/sections/BlogPostList.tsx": $$$$$$$$7,
    "deco-sites/starting/sections/CampComments.tsx": $$$$$$$$15,
    "deco-sites/starting/sections/CampHero.tsx": $$$$$$$$1,
    "deco-sites/starting/sections/CampMentor.tsx": $$$$$$$$26,
    "deco-sites/starting/sections/CampRegistration.tsx": $$$$$$$$29,
    "deco-sites/starting/sections/CampSteps.tsx": $$$$$$$$3,
    "deco-sites/starting/sections/Carousel.tsx": $$$$$$$$28,
    "deco-sites/starting/sections/Cms.tsx": $$$$$$$$9,
    "deco-sites/starting/sections/Community.tsx": $$$$$$$$19,
    "deco-sites/starting/sections/ContactUs.tsx": $$$$$$$$4,
    "deco-sites/starting/sections/Delight.tsx": $$$$$$$$21,
    "deco-sites/starting/sections/DepoimentsCarrossel.tsx": $$$$$$$$10,
    "deco-sites/starting/sections/Differentials.tsx": $$$$$$$$17,
    "deco-sites/starting/sections/Divider.tsx": $$$$$$$$11,
    "deco-sites/starting/sections/Faq.tsx": $$$$$$$$31,
    "deco-sites/starting/sections/Features.tsx": $$$$$$$$2,
    "deco-sites/starting/sections/Footer.tsx": $$$$$$$$27,
    "deco-sites/starting/sections/FooterBigLogo.tsx": $$$$$$$$30,
    "deco-sites/starting/sections/Head.tsx": $$$$$$$$5,
    "deco-sites/starting/sections/Header.tsx": $$$$$$$$12,
    "deco-sites/starting/sections/ImpactCalculator.tsx": $$$$$$$$22,
    "deco-sites/starting/sections/Integration.tsx": $$$$$$$$0,
    "deco-sites/starting/sections/MainBanner.tsx": $$$$$$$$8,
    "deco-sites/starting/sections/Markdown.tsx": $$$$$$$$14,
    "deco-sites/starting/sections/Partner.tsx": $$$$$$$$20,
    "deco-sites/starting/sections/Pricing.tsx": $$$$$$$$25,
    "deco-sites/starting/sections/QuillText.tsx": $$$$$$$$13,
    "deco-sites/starting/sections/StripePricing.tsx": $$$$$$$$32,
    "deco-sites/starting/sections/TripletBanner.tsx": $$$$$$$$16,
    "deco-sites/std/sections/Analytics.tsx": i2$$$4,
    "deco-sites/std/sections/configOCC.global.tsx": i2$$$3,
    "deco-sites/std/sections/configShopify.global.tsx": i2$$$5,
    "deco-sites/std/sections/configVNDA.global.tsx": i2$$$6,
    "deco-sites/std/sections/configVTEX.global.tsx": i2$$$7,
    "deco-sites/std/sections/configYourViews.global.tsx": i2$$$0,
    "deco-sites/std/sections/SEO.tsx": i2$$$1,
    "deco-sites/std/sections/SEOPDP.tsx": i2$$$8,
    "deco-sites/std/sections/SEOPLP.tsx": i2$$$2,
  },
  "handlers": {
    "$live/handlers/devPage.ts": i2$$$$2,
    "$live/handlers/fresh.ts": i2$$$$3,
    "$live/handlers/router.ts": i2$$$$1,
    "$live/handlers/routesSelection.ts": i2$$$$0,
  },
  "pages": {
    "$live/pages/LivePage.tsx": i2$$$$$0,
  },
  "matchers": {
    "$live/matchers/MatchAlways.ts": i2$$$$$$6,
    "$live/matchers/MatchDate.ts": i2$$$$$$0,
    "$live/matchers/MatchEnvironment.ts": i2$$$$$$5,
    "$live/matchers/MatchMulti.ts": i2$$$$$$3,
    "$live/matchers/MatchRandom.ts": i2$$$$$$4,
    "$live/matchers/MatchSite.ts": i2$$$$$$2,
    "$live/matchers/MatchUserAgent.ts": i2$$$$$$1,
  },
  "flags": {
    "$live/flags/audience.ts": i2$$$$$$$0,
    "$live/flags/everyone.ts": i2$$$$$$$1,
  },
  "accounts": {
    "deco-sites/std/accounts/occ.ts": i2$$4,
    "deco-sites/std/accounts/shopify.ts": i2$$3,
    "deco-sites/std/accounts/vnda.ts": i2$$0,
    "deco-sites/std/accounts/vtex.ts": i2$$2,
    "deco-sites/std/accounts/yourViews.ts": i2$$1,
  },
  "config": config,
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest satisfies DecoManifest;
