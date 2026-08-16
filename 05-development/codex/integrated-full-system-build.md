# Codex Task: Waggie Tail Complete Integrated System Build

## Objective

Build Waggie Tail as a complete, production-oriented social platform where every dog has a separate public identity and authorized people or organizations manage those identities through secure private accounts.

The active product objective includes:

- Family dog social networking.
- Shelter and rescue dog advocacy.
- Lifelong dog identity and adoption handoff.
- Campaigns and contests.
- Son-friendly administration.
- Agent-assisted profile creation and maintenance.
- National shelter coverage operations.
- Analytics, marketing operations, moderation, and production readiness.

Dependency milestones organize implementation order while the complete platform remains the active objective.

## Context Files

Read the repository before implementation begins.

Priority context:

```text
AGENTS.md
README.md
00-foundation/instruction-standard.md
00-foundation/north-star.md
00-foundation/master-architecture.md
00-foundation/decisions.md
00-foundation/roadmap.md
02-blueprints/shelter-voice-engine.md
05-development/data-model/
05-development/api-design/
05-development/ai-agents/
```

## Instruction Standard

Every task statement uses affirmative requirements:

- State the intended system behavior.
- State the required data and permissions.
- State the acceptance condition.
- State the verification method.
- State the owner approval point.

Constraints use eligibility, authority, state transitions, evidence requirements, and permission rules.

## Complete Product Architecture

### 1. Authentication and Management

Create:

- Human login accounts.
- Organization accounts.
- Organization memberships.
- Separate public dog accounts.
- Many-to-many dog manager relationships.
- Guardian, shelter, rescue, foster, Waggie advocate, reviewer, moderator, and administrator roles.
- Profile claims.
- Adoption handoffs.
- Session security.
- Account recovery.
- Audit trails.

Each dog receives its own:

- Name.
- Handle.
- Profile.
- Posts.
- Followers.
- Following.
- Comments.
- Media.
- Campaign entries.
- Shelter or family status.
- Management team.
- Lifecycle history.

Secure manager authentication supports many dog identities from one private operating account.

### 2. Family Dog Social Network

Create:

- Dog onboarding.
- Multiple dog management.
- Active dog switching.
- Public dog profiles.
- Photo posts.
- Short-form video readiness.
- Home feed.
- Discover feed.
- Follow relationships.
- Likes.
- Comments.
- Saves.
- Shares.
- Notifications.
- Search.
- Public share cards.
- Profile reporting.
- Blocking.

The public experience presents the dog as the speaker and social identity.

### 3. Shelter Voice Engine

Create:

- Organization registry.
- Source registry.
- Source policy engine.
- API, feed, spreadsheet, URL, email, and guided-form intake.
- National discovery candidates.
- Canonical dog normalization.
- Duplicate detection.
- Field-level provenance.
- Media-rights records.
- Dog Voice drafts.
- Human review.
- Batch publication.
- Freshness checks.
- Status synchronization.
- Organization claims.
- Corrections.
- Removal requests.
- Adoption confirmations.
- Secure adopter handoffs.
- Archived success stories.

Publication eligibility requires:

- Registered organization.
- Active source policy.
- Stable external identifier.
- Duplicate clearance.
- Current availability state.
- Official adoption or contact path.
- Media authorization or approved placeholder.
- Safe general location.
- Internally consistent facts.
- Source-grounded generated content.
- Operational correction and removal workflow.

### 4. Campaign and Contest Engine

Create one configurable campaign engine supporting:

- Campaign templates.
- Drafting.
- Scheduling.
- Entry windows.
- Voting windows.
- One entry per dog rules.
- Human-account vote controls.
- Entry review.
- Public galleries.
- Leaderboards.
- Administrator-selected winners.
- Highest-vote winners.
- Winner pages.
- Share cards.
- Automated opening and closing.
- Campaign analytics.

Template examples:

- Best Introduction Post.
- Cutest Puppy.
- Best Dressed Dog.
- Funniest Dog.
- Best Senior Dog.
- Best Smile.
- Best Adventure.
- Meet Me Monday.
- Long-Stay Love.
- Senior Sunday.
- Foster Spotlight.
- Homecoming Story.

### 5. Administration

Create a plain-language administration system for the son.

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

Routine operations occur through interface controls.

### 6. Agent System

Create controlled agents for:

- National discovery.
- Intake normalization.
- Identity and duplicate review.
- Dog Voice generation.
- Media preparation.
- Content review.
- Publication.
- Freshness and status checks.
- Content maintenance.
- Shelter outreach and claims.
- Adoption transition.
- Campaign drafting.
- Marketing drafting.
- Impact analytics.

Each agent definition includes:

- Inputs.
- Authorized actions.
- Evidence requirements.
- Permission requirements.
- Audit events.
- Approval points.
- Error states.
- Retry behavior.
- Rollback behavior.
- Operational metrics.

Sensitive claims concerning health, behavior, compatibility, urgency, adoption status, and safety require exact approved source evidence.

### 7. Data Model

Create and document these core entities:

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
notification_preferences
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
admin_announcements
featured_content
analytics_events
feature_flags
audit_logs
```

Create:

```text
05-development/data-model/database-schema.md
05-development/data-model/relationships.md
05-development/data-model/row-level-security.md
05-development/data-model/profile-lifecycle.md
05-development/data-model/source-provenance.md
```

### 8. API Contract

Create and maintain:

```text
05-development/api-design/openapi.yaml
05-development/api-design/endpoint-reference.md
```

Cover:

- Authentication.
- Private account management.
- Dog profiles.
- Dog managers.
- Organizations.
- Posts and media.
- Social graph.
- Feeds.
- Search and discovery.
- Notifications.
- Campaigns and voting.
- Reports and moderation.
- Sources and intake.
- Profile claims.
- Adoption handoffs.
- Freshness and status.
- Administrative operations.
- Analytics.
- Agent-assisted drafts and jobs.

Use versioned routes under:

```text
/api/v1/
```

### 9. Trust, Safety, and Security

Implement:

- Role-based authorization.
- Row-level security.
- Ownership validation.
- Secure session handling.
- Rate limits.
- Input validation.
- Output encoding.
- Signed media uploads.
- File scanning.
- Spam controls.
- Bot controls.
- User reporting.
- User blocking.
- Moderation queues.
- Audit logs.
- Secret management.
- Backups.
- Migration rollback.
- Error monitoring.
- Uptime monitoring.
- Data export.
- Account deletion.
- Source removal processing.

Public shelter information preserves general location while foster addresses and staff personal information remain private.

### 10. Analytics and Growth

Track:

- Account creation.
- Dog profile completion.
- First post.
- Follow activity.
- Sharing.
- Return activity.
- Campaign participation.
- Contest entry sharing.
- Shelter profile publication.
- Source freshness.
- Shelter claims.
- Adoption-link clicks.
- Confirmed adoptions.
- Adopter handoffs.
- Moderation volume.
- Agent processing quality.

Build growth loops for:

- Public dog profile sharing.
- Contest entry sharing.
- Founding Dog badges.
- Founding Shelter recognition.
- Shelter profile launch cards.
- Adoption celebration stories.
- Local supporter participation.

### 11. Brand and Interface

Apply the Waggie Tail design direction:

- Happy.
- Friendly.
- Social.
- Trustworthy.
- Modern.
- Warm.
- Polished.
- Dog-first.
- Mobile-first.

Use:

- Warm cream or soft white surfaces.
- Deep navy text.
- Coral accent.
- Soft blue, sage, and gold support colors.
- Rounded cards.
- Large dog photography.
- Friendly typography.
- Clear navigation.
- Accessible contrast.
- Consistent spacing.

Primary navigation:

```text
Home
Discover
Create
Contests
My Dog
```

Shelter advocacy appears naturally inside the same social network.

## Integrated Delivery Program

The work proceeds through dependency milestones. Completion of one milestone opens the next while the complete platform remains the active objective.

### Milestone A: Repository and Architecture

- Repository structure.
- Decision log.
- Instruction standard.
- Master architecture.
- Data model.
- API contract.
- Design system.
- Test strategy.

### Milestone B: Application Foundation

- Responsive shell.
- Navigation.
- Shared components.
- Authentication.
- Error handling.
- Loading and empty states.
- Deployment preview.

### Milestone C: Dog Identity and Social Core

- Dog management.
- Profiles.
- Posts.
- Social graph.
- Feed.
- Search.
- Notifications.
- Sharing.

### Milestone D: Shelter Voice Core

- Organizations.
- Intake.
- Provenance.
- Review.
- Publication.
- Claims.
- Status maintenance.
- Adoption links.

### Milestone E: Shelter Automation and Continuity

- Approved connectors.
- Batch processing.
- Agents.
- Freshness automation.
- Adoption transitions.
- Guardian handoffs.

### Milestone F: Campaigns and Administration

- Contest engine.
- Campaign templates.
- Dashboard.
- Moderation.
- Featured content.
- Announcements.
- Analytics.

### Milestone G: National Operations and Growth

- State coverage.
- Shelter outreach.
- Regional dashboards.
- Partner onboarding.
- Marketing operations.
- Impact reporting.

### Milestone H: Production Readiness

- Security review.
- Accessibility review.
- Performance review.
- Data recovery verification.
- Monitoring.
- Domain connection.
- Operational runbooks.
- Launch readiness review.

## Progression Rules

Continue through milestones when:

- Acceptance criteria pass.
- Required tests pass.
- Database migrations verify successfully.
- API contracts remain consistent.
- Owner decisions are available.
- Required credentials are available.

Pause conditions:

- Destructive data changes requiring owner approval.
- Production deployment requiring owner approval.
- Legal policy decisions requiring professional review.
- External credentials requiring owner action.
- Architecture conflicts requiring a recorded decision.

## Acceptance Criteria

The complete build reaches readiness when:

1. Every dog operates as a distinct public identity.
2. People and organizations manage many dog identities securely.
3. Dogs support multiple authorized managers.
4. Family dogs can post, follow, engage, discover, and share.
5. Shelter dogs receive source-linked social identities.
6. Every public shelter fact retains provenance and freshness.
7. Organizations can claim, correct, maintain, and transfer profiles.
8. Adoption status follows authorized evidence.
9. Missing source records enter Status Unknown and verification.
10. Dog Voice content remains grounded in approved source facts.
11. Campaigns launch through configuration controls.
12. The son operates campaigns, profiles, moderation, shelter workflows, and marketing through the admin interface.
13. Agent actions create complete audit records.
14. APIs and schemas remain internally consistent.
15. Security, accessibility, performance, and recovery checks pass.
16. Marketing and analytics systems measure acquisition, engagement, advocacy, and adoption outcomes.

## Tests and Verification

Run available:

- Documentation checks.
- Schema checks.
- OpenAPI validation.
- Type checks.
- Lint.
- Unit tests.
- Component tests.
- API tests.
- Permission tests.
- Database policy tests.
- End-to-end tests.
- Accessibility checks.
- Responsive checks.
- Performance checks.
- Security checks.

Record every command and result.

A passing claim requires a completed test run and captured output.

## Output Report

Report:

```text
OBJECTIVE
CURRENT MILESTONE
SYSTEMS COMPLETED
FILES CREATED
FILES UPDATED
DATABASE CHANGES
ENDPOINTS ADDED OR CHANGED
AGENTS ADDED OR CHANGED
TESTS RUN
TEST RESULTS
OWNER DECISIONS
EXTERNAL CREDENTIALS
RISKS
NEXT DEPENDENCY MILESTONE
```
