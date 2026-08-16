# Waggie Tail Master Architecture

Status: LOCKED FOUNDATION
Date: 2026-08-15

## 1. North Star

Waggie Tail is the social network where every dog can have a distinct identity, voice, audience, and continuing story.

> The social network where the dog is the account.

Mission:

> Every dog deserves a profile, a voice, an audience, and a path home.

The platform serves dogs living with families and dogs waiting for families inside one shared social network.

## 2. Identity Model

### Private Management Identity

A human or organization account controls authentication, security, permissions, recovery, and administration.

### Public Dog Identity

Each dog receives a separate public account with its own:

- Name and handle.
- Profile and biography.
- Photos and videos.
- Posts and comments.
- Followers and following.
- Campaign entries.
- Family or shelter status.
- Authorized management team.
- Lifecycle history.

### Management Relationships

- One person may manage many dog accounts.
- One organization may manage hundreds or thousands of dog accounts.
- One dog may have several authorized managers.
- Authentication and recovery remain centralized through manager relationships.
- Role-based controls support scale and system integrity.

Manager roles include:

```text
GUARDIAN_OWNER
ORGANIZATION_OWNER
ORGANIZATION_EDITOR
FOSTER_EDITOR
WAGGIE_ADVOCATE
WAGGIE_REVIEWER
WAGGIE_MODERATOR
WAGGIE_ADMIN
READ_ONLY_PARTNER
```

## 3. Core Product Systems

### Family Dog Social Network

Dogs post, follow, comment, discover, share, enter campaigns, and build audiences.

### Shelter Voice Network

Dogs waiting for homes receive social identities, first-person stories, followers, repeated visibility, and official adoption pathways.

### Lifelong Dog Identity

A dog's account can move from shelter management to adopter management while preserving history, followers, posts, and community.

### Campaign and Contest Engine

Administrators create campaigns from templates, set dates and rules, review entries, manage voting, publish winners, and measure results through configuration controls.

### Agent Operations

Agents discover, normalize, draft, maintain, promote, verify, and measure dog profiles through source, permission, review, and audit controls.

### Son-Friendly Administration

The son operates profiles, shelters, campaigns, moderation, outreach, announcements, and analytics through plain-language interface controls.

## 4. Social Experience

Primary navigation:

```text
Home
Discover
Create
Contests
My Dog
```

Core user capabilities:

- Create and switch between dog accounts.
- Publish photo posts.
- Prepare for short-form video.
- Follow dogs.
- Like, comment, save, and share.
- Search dogs, breeds, locations, and shelters.
- Receive notifications.
- Enter contests.
- Share public profile and campaign links.
- Report content and block accounts.

## 5. Shelter Profile Authority

```text
LEVEL 0  Candidate
LEVEL 1  Source-Linked Listing
LEVEL 2  Waggie Advocate Profile
LEVEL 3  Shelter-Claimed Profile
LEVEL 4  Shared Profile
LEVEL 5  Guardian Profile
```

Public labels include:

- Waggie Advocate Managed.
- Shelter Verified.
- Shared Management.
- Status Verified [date].
- AI-Assisted Story Reviewed by [role].
- Official Adoption Link.

## 6. Shelter Voice Engine

The Shelter Voice Engine:

1. Discovers dogs through registered sources.
2. Collects and normalizes source facts.
3. Detects duplicate records.
4. Builds separate draft dog accounts.
5. Creates first-person content grounded in approved facts.
6. Routes exceptions to review.
7. Publishes eligible profiles.
8. Rechecks source status.
9. Maintains profile freshness.
10. Invites organizations to claim profiles.
11. Processes corrections and removal requests.
12. Celebrates confirmed adoptions.
13. Transfers profiles to adopters.

## 7. National Coverage Architecture

The system supports high-volume discovery and processing across the United States.

Publication eligibility requires:

- Registered source and organization.
- Documented data-use authority.
- Stable dog identifier.
- Duplicate clearance.
- Current availability status.
- Official adoption or contact path.
- Media authorization or approved placeholder.
- Safe general location.
- Field provenance.
- Freshness timestamps.
- Operational correction and removal path.

Source priority:

1. Direct shelter or rescue connection.
2. Approved adoption-data provider.
3. Organization-supplied URL.
4. Registered national discovery source.
5. Guided manual intake.

## 8. Dog Voice Contract

The Dog Voice Agent transforms verified facts into warm, hopeful, dog-first language.

Required outputs:

```text
short_bio
long_bio
introduction_post
caption_drafts
share_message
adoption_call_to_action
facts_used
uncertainties
risk_flags
```

Health, behavior, compatibility, safety, urgency, adoption, fee, age, and location claims require exact approved source evidence.

Harmless personality framing may add warmth while preserving factual integrity.

Every public shelter field retains:

```text
source_record_id
source_field
source_timestamp
extraction_method
confidence
review_status
reviewed_by
reviewed_at
```

## 9. Profile Lifecycle

```text
Candidate
Draft
Awaiting Review
Source Verified
Published Advocate Managed
Published Shelter Managed
Published Shared Management
Adoption Pending
Adopted
Transfer Pending
Guardian Managed
Status Unknown
Stale
Removed
Archived
Memorial
```

A missing source record maps to Status Unknown and starts verification. Adoption status requires authorized confirmation.

## 10. Adoption Handoff

1. Shelter or authorized source confirms adoption.
2. Profile receives Adopted status.
3. Celebration content enters review.
4. Shelter or Waggie sends a secure adopter invitation.
5. Adopter creates a private login.
6. Adopter accepts management.
7. Active control transfers according to the approved role plan.
8. Shelter attribution and lifecycle history remain preserved.
9. The dog continues as a family dog account.

## 11. Data Model

Core entities:

```text
accounts
account_roles
organizations
organization_members
dogs
dog_profile_managers
dog_lifecycle_events
external_identifiers
posts
post_media
follows
likes
comments
saved_posts
shares
notifications
campaigns
campaign_templates
campaign_entries
votes
source_connectors
source_policies
source_records
source_snapshots
field_provenance
media_rights
intake_jobs
intake_items
agent_runs
agent_decisions
duplicate_candidates
profile_claims
profile_handoffs
status_checks
removal_requests
adoption_outcomes
content_drafts
content_approvals
reports
blocks
moderation_actions
featured_content
analytics_events
feature_flags
audit_logs
```

Core relationships:

```text
LOGIN ACCOUNT -> manages -> DOG ACCOUNT
ORGANIZATION -> manages -> MANY DOG ACCOUNTS
DOG ACCOUNT -> may have -> MANY AUTHORIZED MANAGERS
DOG ACCOUNT -> created from -> ONE OR MORE SOURCE RECORDS
PUBLIC FIELD -> supported by -> FIELD PROVENANCE
DOG ACCOUNT -> moves through -> LIFECYCLE EVENTS
```

## 12. API Domains

All application services use versioned routes under `/api/v1/`.

Required domains:

- Authentication and private accounts.
- Dog profiles and managers.
- Organizations and members.
- Posts, media, comments, and social graph.
- Feeds, discovery, search, and notifications.
- Campaigns, entries, voting, and winners.
- Sources, intake, review, and publication.
- Claims, corrections, removal, and handoff.
- Status, freshness, provenance, and lifecycle.
- Administration, moderation, analytics, and agent jobs.

## 13. Administration

Primary areas:

```text
Dashboard
Dogs
Organizations
Shelter Sources
Intake Jobs
Review Queue
Campaigns
Featured Content
Announcements
Reports
Moderation
Claims
Handoffs
Analytics
Settings
Audit Log
```

Quick actions:

```text
Add Shelter Source
Paste Dog URL
Upload Shelter Spreadsheet
Build Profile Batch
Review Drafts
Publish Approved Batch
Create Campaign
Feature Dog
Create Announcement
Check Statuses
Contact Shelters
Celebrate Adoption
Transfer Profile
```

## 14. Campaign Engine

Campaign configuration supports:

- Templates.
- Start and end dates.
- Entry and voting windows.
- Entry limits.
- Human-account vote controls.
- Review requirements.
- Public or private vote totals.
- Administrator-selected winners.
- Highest-vote winners.
- Share cards.
- Automated opening and closing.
- Campaign analytics.

## 15. Security and Trust

Implement:

- Role-based authorization.
- Row-level security.
- Ownership validation.
- Secure sessions.
- Rate limits.
- Input validation.
- Signed media uploads.
- File scanning.
- Spam and bot controls.
- Reporting and blocking.
- Moderation queues.
- Audit logs.
- Secret management.
- Backups and rollback.
- Error and uptime monitoring.
- Data export and account deletion.

## 16. Growth and Impact

Growth loops:

```text
Dog Profile -> Share -> Visitor -> New Dog Account
Contest Entry -> Share -> Vote -> New Community Member
Shelter Profile -> Story -> Local Sharing -> Adoption Link Visit
Adoption -> Celebration -> Profile Handoff -> Continuing Family Account
```

Track:

- Dog accounts created.
- Profile completion.
- First posts.
- Follows and engagement.
- Shares and invitations.
- Campaign participation.
- Published shelter profiles.
- Fresh status rate.
- Shelter claims.
- Adoption-link clicks.
- Confirmed adoptions.
- Adopter handoffs.
- Agent quality and operating time.

## 17. Integrated Delivery Program

The complete platform remains the active objective. Milestones organize dependencies, verification, and recovery points.

```text
A  Repository and Architecture
B  Application Foundation
C  Dog Identity and Social Core
D  Shelter Voice Core
E  Shelter Automation and Adoption Continuity
F  Campaigns and Administration
G  Agent Operations and National Coverage
H  Marketing and Growth
I  Production Readiness
```

## 18. Locked Decisions

1. Every dog has a separate public account.
2. Private manager authentication supports many dog accounts.
3. A dog may have several authorized managers.
4. Family dogs and shelter dogs share one network.
5. The Shelter Voice Engine is a core system.
6. Public shelter facts retain provenance and freshness.
7. Sensitive claims require exact approved evidence.
8. Missing source records enter Status Unknown and verification.
9. Organizations can claim, correct, maintain, and transfer profiles.
10. Adoption links route to the responsible organization.
11. Dog identity can continue after adoption.
12. Campaigns operate through reusable configuration.
13. The son operates the system through interface controls.
14. GitHub preserves final architecture and decisions.
15. Milestones advance the complete integrated platform.

## 19. Activation Command

> Activate Waggie Tail Complete System Build. Read AGENTS.md and the foundation files. Build the family-dog social network, Shelter Voice Engine, campaign engine, administration, data architecture, API contracts, agents, source provenance, status freshness, organization claims, adoption handoffs, analytics, marketing operations, and production readiness as one integrated platform. Progress through dependency milestones while the complete platform remains the active objective. Publication requires verified data, documented authority, media rights, current status, and audit records. Report exact files changed, validation results, owner decisions, commit SHA, and the next dependency milestone.
