# Namami Gange Enquiry CRM

<div align="center">
  <img src="https://img.shields.io/badge/Portfolio-Project-blue?style=for-the-badge" alt="Portfolio project" />
  <img src="https://img.shields.io/badge/Status-Ready%20for%20Showcase-green?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/Focus-Travel%20CRM-orange?style=for-the-badge" alt="Focus" />
</div>

A premium travel operations and lead-conversion dashboard designed around a real PRD for Namami Gange Tours and Travel.

This project transforms a common business pain point into a clean, portfolio-ready product story: lost enquiries, inconsistent follow-ups, and fragmented travel workflows.

## Why this project matters
Travel businesses often lose revenue because customer inquiries are captured manually across calls, WhatsApp messages, and spreadsheets. This project creates a single operational flow to:

- capture enquiries consistently
- track their status from first contact to booking
- build itinerary and quote workflows
- manage vouchers, documents, and operational handoff
- improve follow-up quality and conversion rates

## The product vision
This CRM-style system is built for travel sales and operations teams to manage the full enquiry lifecycle efficiently and professionally.

### Core workflow
1. Enquiry comes in from WhatsApp / call / website
2. Key details are captured and validated
3. Lead is assigned, tracked, and followed up
4. Itinerary or quote is built and reviewed
5. Booking is confirmed and documents are released
6. Reporting highlights conversion and operational metrics

## Key features
- WhatsApp and inbound enquiry capture workflow
- Enquiry dashboard with lead state management
- Follow-up planning and tracking
- Customer and booking detail dossier
- Template-based itinerary and quote generation
- Voucher and document management
- Operational reporting and north-star metrics
- Premium design language aligned to the travel brand

## Portfolio-fit summary
This repo is designed to look like a serious product case study:

- clear business problem
- structured UX and workflow thinking
- operational dashboard design
- realistic domain-specific logic
- strong GitHub presentation value

## Screenshots

### Website dashboards

| View | Preview |
| --- | --- |
| Enquiry pipeline | <img src="Protype%20screens/Website%20screens/Website%20screens/stitch_ng_tours_crm_platform/enquiry_management_pipeline/screen.png" width="420" alt="Enquiry pipeline dashboard" /> |
| Itinerary verification | <img src="Protype%20screens/Website%20screens/Website%20screens/stitch_ng_tours_crm_platform/itinerary_builder_human_verification/screen.png" width="420" alt="Itinerary verification" /> |
| WhatsApp capture | <img src="Protype%20screens/Website%20screens/Website%20screens/stitch_ng_tours_crm_platform/whatsapp_enquiry_capture_verification/screen.png" width="420" alt="WhatsApp enquiry capture" /> |

### Mobile views

| View | Preview |
| --- | --- |
| Mobile operations dashboard | <img src="Protype%20screens/Mobile%20screens/Mobile%20screens/stitch_ng_tours_crm_platform/mobile_operations_dashboard/screen.png" width="240" alt="Mobile dashboard" /> |
| Lead verification | <img src="Protype%20screens/Mobile%20screens/Mobile%20screens/stitch_ng_tours_crm_platform/whatsapp_lead_verification/screen.png" width="240" alt="Lead verification" /> |
| Enquiry dossier | <img src="Protype%20screens/Mobile%20screens/Mobile%20screens/stitch_ng_tours_crm_platform/enquiry_dossier_timeline/screen.png" width="240" alt="Enquiry dossier" /> |

## Repo structure

```text
.
├── index.html                  # dashboard prototype
├── styles.css                 # premium product styling
├── script.js                  # small UI interactions
├── context.md                 # business context and PRD summary
├── plan.md                    # roadmap and implementation plan
├── README.md                  # GitHub portfolio landing page
├── .gitignore                 # basic repo hygiene
├── .env.example               # environment vars template
├── PRD Sunday Workshop.docx   # original PRD source
├── Protype screens/           # website and mobile mockup screens
└── ...
```

## Quick start
Open the dashboard directly in a browser:

```bash
# Option 1
start index.html

# Option 2
python -m http.server 8000
```
Then visit:

```text
http://localhost:8000
```

## Suggested next step
This repo is already strong as a product showcase. The next level would be to convert it into a working app with:

- Next.js frontend
- Prisma + PostgreSQL database
- authentication
- real CRUD flows for enquiries and bookings
- reporting dashboard with live analytics

## Project files
- [context.md](context.md)
- [plan.md](plan.md)
- [index.html](index.html)
- [README.md](README.md)

## License
This project is intended for portfolio presentation and product storytelling.
