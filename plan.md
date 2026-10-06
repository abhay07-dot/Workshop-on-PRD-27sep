# Project Plan

## Objective
Build an MVP for a travel enquiry and booking management system for Namami Gange Tours and Travel that captures leads, standardizes follow-up, and supports quote generation and document handling.

## Proposed Product Direction
The product should help travel agents manage customer enquiries more effectively from first contact through booking. The MVP should focus on core workflow efficiency and visibility instead of trying to replace the entire travel operations stack.

## 1. Phase 1: Foundation and Product Setup
### Deliverables
- Define technical stack
- Set up repository and project structure
- Configure environment variables and dependencies
- Create database schema and migration strategy
- Set up authentication foundation

### Recommended Stack
- Frontend: Next.js + TypeScript + Tailwind CSS
- Backend: Next.js API routes or Node.js + Express
- Database: PostgreSQL + Prisma
- Auth: NextAuth or Clerk
- Storage: Supabase or S3-compatible storage
- Deployment: Vercel + Railway / Supabase

## 2. Phase 2: Lead and Enquiry Management
### Deliverables
- Customer enquiry table
- Lead status workflow
- Lead creation form
- Search, filter, and dashboard views
- Notes and follow-up history

### Core Data Model
- Customer
- Enquiry
- FollowUp
- Quote
- Booking
- Document
- User / Agent

### Enquiry Status Flow
- New
- Contacted
- Qualified
- Quoted
- Follow-up
- Booked
- Closed
- Lost

## 3. Phase 3: Quote and Itinerary Workflow
### Deliverables
- Template-based quote generation
- Itinerary preview
- Human approval step before sending to customer
- Field mapping for destination, travel dates, pricing, travellers, and notes

### Notes
The PRD expects a branded output generated from the enquiry, but the MVP should first prioritize a workflow that generates a structured proposal or itinerary preview with a review step.

## 4. Phase 4: Post-booking Documentation and Operations
### Deliverables
- Document list for vouchers and traveller packets
- Attachments and document status tracking
- Hotel / vendor communication record
- Booking details summary page

### MVP Scope
Keep this focused on document management and booking records rather than a full operational platform.

## 5. Phase 5: Reporting and Business Visibility
### Deliverables
- Dashboard for daily enquiry volume
- Conversion tracking
- Follow-up completion metrics
- Lead aging and status overview

### KPIs to Track
- Total enquiries received
- % enquiries captured
- % enquiry records with complete data
- % converted into bookings
- Follow-up response rate

## 6. Phase 6: Testing, QA, and Launch Preparation
### Deliverables
- Unit tests for core data flows
- Form validation and security checks
- Role-based access implementation
- UX polish and edge-case testing
- Deployment configuration and environment checks

## 7. Phase 7: GitHub Portfolio Packaging
### Deliverables
- Clean README with problem, features, setup, and screenshots
- Architecture overview
- Demo video or GIF optional
- Repository structure that is easy to follow
- Clear commit history and product narrative

### Portfolio Positioning
Present this project as:
- a real-world business workflow optimization MVP
- a full-stack CRM-style product
- an example of solving a lead management problem in a travel domain

## Suggested MVP Timeline
### Week 1
- Requirements finalization
- Stack selection
- Repo setup
- Database schema

### Week 2
- Enquiry form + dashboard
- Authentication and user roles
- Lead status tracking

### Week 3
- Quote / itinerary flow
- Document attachments
- Follow-up notes

### Week 4
- Reporting
- UI polish
- Deployment
- Portfolio README and demo assets

## Risks and Mitigations
### Risk: Feature scope grows too large
Mitigation: Keep the MVP limited to enquiry capture, status tracking, quote generation, and document records.

### Risk: Data model becomes messy
Mitigation: Normalize core entities and keep status flows explicit.

### Risk: UX is too complex for real agents
Mitigation: Focus on clean dashboards, simple workflows, and quick data entry.

### Risk: Product appears too generic
Mitigation: Tailor the UI and terminology to the travel business context and enquiry workflow.

## Final Recommendation
For a portfolio project, build the MVP in a way that is realistic, measurable, and visually understandable. A clean lead dashboard, enquiry flow, quote generation, and basic reporting will create a strong story and demonstrate business product thinking clearly.
