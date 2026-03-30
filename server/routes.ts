import type { Express } from "express";
import { createServer, type Server } from "http";
import { Resend } from "resend";

const BASE_PRICES: Record<string, number> = {
  "1-3": 499,
  "4-7": 899,
  "8+": 1399,
};

const FEATURE_PRICES: Record<string, { label: string; price: number }> = {
  gallery:      { label: "Photo gallery / portfolio section", price: 149 },
  blog:         { label: "Blog / news section", price: 249 },
  booking:      { label: "Online booking / appointments", price: 349 },
  ecommerce:    { label: "E-commerce shop (up to 20 products)", price: 599 },
  events:       { label: "Events & classes calendar", price: 199 },
  testimonials: { label: "Testimonials / reviews slider", price: 99 },
  livechat:     { label: "Live chat widget integration", price: 79 },
  gdpr:         { label: "GDPR cookie consent setup", price: 99 },
  analytics:    { label: "Google Analytics + Search Console", price: 79 },
};

const DOMAIN_YEARLY = 24;
const EMAIL_PER_USER_MONTHLY = 6;

function calculatePrice(data: {
  pageCount?: string;
  isRedesign?: boolean;
  hasDomain?: boolean;
  features?: string[];
  wantsEmail?: boolean;
  emailUsers?: number;
}) {
  const base = data.pageCount ? (BASE_PRICES[data.pageCount] ?? 0) : 0;
  const discountedBase = data.isRedesign ? Math.round(base * 0.8) : base;
  const addons = (data.features ?? []).reduce(
    (sum, f) => sum + (FEATURE_PRICES[f]?.price ?? 0),
    0
  );
  const oneTime = discountedBase + addons;
  const yearly = data.hasDomain === false ? DOMAIN_YEARLY : 0;
  const monthly = data.wantsEmail ? (data.emailUsers ?? 1) * EMAIL_PER_USER_MONTHLY : 0;
  return { base: discountedBase, addons, oneTime, yearly, monthly };
}

function buildEmail(data: any, pricing: ReturnType<typeof calculatePrice>): string {
  const fmt = (n: number) => `€${n.toLocaleString("en-IE")}`;

  const featureRows = (data.features ?? [])
    .map((f: string) => FEATURE_PRICES[f])
    .filter(Boolean)
    .map((f: { label: string; price: number }) =>
      `<tr><td style="padding:6px 0;color:#555;font-size:14px;">✓ ${f.label}</td><td style="padding:6px 0;color:#555;font-size:14px;text-align:right;">${fmt(f.price)}</td></tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>New Quote Request — Crettyard Digital</title></head>
<body style="margin:0;padding:0;background:#f3f4f5;font-family:Arial,Helvetica,sans-serif;">
<table cellpadding="0" cellspacing="0" width="100%" style="background:#f3f4f5;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

      <tr>
        <td style="background:#0C2366;padding:32px 40px;">
          <p style="color:#12B388;margin:0 0 4px;font-size:12px;text-transform:uppercase;letter-spacing:2px;">Crettyard Digital</p>
          <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700;">New Quote Request</h1>
          <p style="color:#ffffff;opacity:0.6;margin:6px 0 0;font-size:13px;">Submitted via the website quote calculator</p>
        </td>
      </tr>

      <tr>
        <td style="padding:32px 40px 16px;">
          <h2 style="color:#0C2366;font-size:15px;margin:0 0 16px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Contact Details</h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:5px 0;color:#333;font-size:14px;width:40%;font-weight:bold;">Name</td><td style="padding:5px 0;color:#555;font-size:14px;">${data.name ?? "—"}</td></tr>
            <tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Email</td><td style="padding:5px 0;font-size:14px;"><a href="mailto:${data.email}" style="color:#12B388;">${data.email ?? "—"}</a></td></tr>
            ${data.phone ? `<tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Phone</td><td style="padding:5px 0;color:#555;font-size:14px;">${data.phone}</td></tr>` : ""}
            ${data.businessName ? `<tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Business Name</td><td style="padding:5px 0;color:#555;font-size:14px;">${data.businessName}</td></tr>` : ""}
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding:16px 40px;">
          <h2 style="color:#0C2366;font-size:15px;margin:0 0 16px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Business &amp; Project</h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:5px 0;color:#333;font-size:14px;width:40%;font-weight:bold;">Business Type</td><td style="padding:5px 0;color:#555;font-size:14px;">${data.businessType ?? "—"}</td></tr>
            <tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Website Goals</td><td style="padding:5px 0;color:#555;font-size:14px;">${(data.websiteGoals ?? []).join(", ") || "—"}</td></tr>
            <tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Pages Needed</td><td style="padding:5px 0;color:#555;font-size:14px;">${data.pageCount ?? "—"}</td></tr>
            <tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Redesign?</td><td style="padding:5px 0;color:#555;font-size:14px;">${data.isRedesign ? "Yes — 20% base discount applied" : "No"}</td></tr>
            <tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Has Domain?</td><td style="padding:5px 0;color:#555;font-size:14px;">${data.hasDomain ? "Yes" : "No — domain registration needed"}</td></tr>
            ${data.launchDate ? `<tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Ideal Launch</td><td style="padding:5px 0;color:#555;font-size:14px;">${data.launchDate}</td></tr>` : ""}
            ${data.budget ? `<tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Budget Range</td><td style="padding:5px 0;color:#555;font-size:14px;">${data.budget}</td></tr>` : ""}
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding:16px 40px;">
          <h2 style="color:#0C2366;font-size:15px;margin:0 0 16px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Features &amp; Add-ons</h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:6px 0;color:#555;font-size:14px;">✓ Contact form &amp; enquiry notifications</td><td style="padding:6px 0;color:#12B388;font-size:14px;text-align:right;font-weight:bold;">INCLUDED</td></tr>
            ${featureRows}
          </table>
          ${data.wantsEmail ? `
          <div style="margin-top:12px;padding:12px 16px;background:#f3f4f5;border-radius:6px;font-size:14px;color:#555;">
            <strong style="color:#0C2366;">Business Email (Microsoft 365):</strong> ${data.emailUsers ?? 1} mailbox${(data.emailUsers ?? 1) > 1 ? "es" : ""} — ${fmt(EMAIL_PER_USER_MONTHLY)}/mailbox/month
          </div>` : ""}
        </td>
      </tr>

      <tr>
        <td style="padding:16px 40px 32px;">
          <h2 style="color:#0C2366;font-size:15px;margin:0 0 16px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Guide Pricing Summary</h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:10px 16px;background:#0C2366;color:#ffffff;font-size:15px;font-weight:bold;border-radius:6px 6px 0 0;">One-time Investment</td>
              <td style="padding:10px 16px;background:#0C2366;color:#12B388;font-size:18px;font-weight:bold;text-align:right;border-radius:6px 6px 0 0;">${fmt(pricing.oneTime)}</td>
            </tr>
            <tr>
              <td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;">Base build (${data.pageCount ?? "?"} pages)</td>
              <td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;text-align:right;">${fmt(pricing.base)}</td>
            </tr>
            ${pricing.addons > 0 ? `<tr><td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;">Feature add-ons</td><td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;text-align:right;">${fmt(pricing.addons)}</td></tr>` : ""}
            ${pricing.monthly > 0 ? `
            <tr><td colspan="2" style="padding:4px;"></td></tr>
            <tr>
              <td style="padding:10px 16px;background:#f3f4f5;color:#333;font-size:14px;font-weight:bold;border-radius:6px 6px 0 0;">Monthly</td>
              <td style="padding:10px 16px;background:#f3f4f5;color:#0C2366;font-size:15px;font-weight:bold;text-align:right;border-radius:6px 6px 0 0;">${fmt(pricing.monthly)}/mo</td>
            </tr>
            <tr><td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;">Microsoft 365 (${data.emailUsers ?? 1} mailbox${(data.emailUsers ?? 1) > 1 ? "es" : ""})</td><td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;text-align:right;">${fmt(pricing.monthly)}/mo</td></tr>
            ` : ""}
            ${pricing.yearly > 0 ? `
            <tr><td colspan="2" style="padding:4px;"></td></tr>
            <tr>
              <td style="padding:10px 16px;background:#f3f4f5;color:#333;font-size:14px;font-weight:bold;border-radius:6px 6px 0 0;">Annual</td>
              <td style="padding:10px 16px;background:#f3f4f5;color:#0C2366;font-size:15px;font-weight:bold;text-align:right;border-radius:6px 6px 0 0;">${fmt(pricing.yearly)}/yr</td>
            </tr>
            <tr><td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;">.ie domain registration</td><td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;text-align:right;">${fmt(pricing.yearly)}/yr</td></tr>
            ` : ""}
          </table>
          <p style="margin:16px 0 0;font-size:12px;color:#999;font-style:italic;">This is a guide price only. A firm fixed quote will be provided after a free consultation.</p>
        </td>
      </tr>

      ${data.notes ? `
      <tr>
        <td style="padding:0 40px 32px;">
          <h2 style="color:#0C2366;font-size:15px;margin:0 0 12px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Additional Notes</h2>
          <p style="margin:0;color:#555;font-size:14px;line-height:1.6;">${data.notes}</p>
        </td>
      </tr>` : ""}

      <tr>
        <td style="padding:20px 40px;background:#f3f4f5;border-top:1px solid #e5e7eb;">
          <p style="margin:0;font-size:12px;color:#999;">Sent via the Crettyard Digital quote calculator at digital.crettyard.ie</p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/quote", async (req, res) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[quote] RESEND_API_KEY is not set.");
      return res.status(500).json({ error: "Email service is not configured. Please contact info@crettyard.ie directly." });
    }

    const body = req.body;
    if (!body?.name?.trim() || !body?.email?.trim()) {
      return res.status(400).json({ error: "Name and email are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    const pricing = calculatePrice({
      pageCount: body.pageCount,
      isRedesign: body.isRedesign,
      hasDomain: body.hasDomain,
      features: body.features,
      wantsEmail: body.wantsEmail,
      emailUsers: body.emailUsers,
    });

    const html = buildEmail(body, pricing);

    const resend = new Resend(apiKey);

    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

    try {
      const { error } = await resend.emails.send({
        from: `Crettyard Digital Quote Tool <${fromEmail}>`,
        to: ["info@crettyard.ie"],
        replyTo: body.email,
        subject: `New Quote Request — ${body.businessName || body.name} (${body.pageCount ?? "?"} pages, ${pricing.oneTime > 0 ? `€${pricing.oneTime}` : "TBD"})`,
        html,
      });

      if (error) {
        console.error("[quote] Resend error:", error);
        return res.status(500).json({ error: "Failed to send quote. Please contact info@crettyard.ie directly." });
      }

      return res.json({ success: true });
    } catch (err) {
      console.error("[quote] Unexpected error:", err);
      return res.status(500).json({ error: "An unexpected error occurred. Please contact info@crettyard.ie directly." });
    }
  });

  return httpServer;
}
