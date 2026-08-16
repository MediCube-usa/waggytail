# Waggie Tail Shelter Voice Engine Blueprint

Status: CORE SYSTEM BLUEPRINT
Date: 2026-08-15

## 1. Strategic Purpose

The Shelter Voice Engine turns Waggie Tail into a social network with a built-in public mission and a continuous source of meaningful dog identities.

Each dog waiting for a home can receive:

- A distinct public account.
- A first-person voice.
- Photos and social posts.
- Followers and sharing.
- Repeated local and national visibility.
- A direct path to the responsible organization.
- A continuing identity after adoption.

This system solves the cold-start problem by preparing useful profiles from approved inputs and inviting organizations to claim, improve, and maintain them.

## 2. Core Operating Principle

National coverage uses:

- Registered source connectors.
- Documented authority.
- Field provenance.
- Media-rights records.
- Duplicate controls.
- Freshness checks.
- Claim, correction, and removal workflows.
- Complete audit history.

The discovery layer creates traceable candidate records. The publication layer applies source-specific policy and profile eligibility gates.

## 3. Identity Architecture

### Management Principals

- Individual human account.
- Shelter organization.
- Rescue organization.
- Foster organization.
- Waggie staff account.
- Waggie advocate account.
- System agent account.

### Dog Identity

The dog profile is a first-class public account independent from its managers.

It owns:

- Handle.
- Social graph.
- Posts and media.
- Comments.
- Campaign entries.
- Adoption status.
- Source history.
- Management relationships.
- Lifecycle events.

### Manager Roles

```text
GUARDIAN_OWNER
ORGANIZATION_OWNER
ORGANIZATION_EDITOR
FOSTER_EDITOR
WAGGIE_ADVOCATE
WAGGIE_REVIEWER
WAGGIE_ADMIN
READ_ONLY_PARTNER
```

Role examples:

- Foster editors add photos and draft updates.
- Shelter managers confirm official status.
- Waggie advocates create source-grounded social content.
- Authorized shelters and Waggie administrators approve adoption confirmation and profile transfer.

## 4. Profile Authority Levels

```text
LEVEL 0  Candidate
LEVEL 1  Source-Linked Listing
LEVEL 2  Waggie Advocate Profile
LEVEL 3  Shelter-Claimed Profile
LEVEL 4  Shared Profile
LEVEL 5  Guardian Profile
```

### Candidate

Private system record awaiting publication gates.

### Source-Linked Listing

Minimal public listing authorized by the source policy with official facts, attribution, and link.

### Waggie Advocate Profile

Complete social profile built from approved information and maintained by a Waggie advocate.

### Shelter-Claimed Profile

Organization-verified profile managed by the shelter or rescue.

### Shared Profile

Defined permissions shared across shelter, foster, and Waggie advocate roles.

### Guardian Profile

Profile transferred after adoption and managed by the new family.

## 5. Intake Channels

### API Connector

Preferred for continuous national scale.

Connector configuration:

```text
provider_name
provider_account
credential_reference
allowed_data_categories
allowed_media_use
cache_policy
update_frequency
removal_requirement
attribution_requirement
organization_opt_out_behavior
publication_policy
last_successful_sync
```

### Shelter Software Connector

Use documented APIs, exports, webhooks, or partner integrations.

### Spreadsheet Upload

Map columns, validate records, show preview, and create an intake job.

### URL Intake

Extract source facts, store the URL, evaluate the source policy, and prepare a draft.

### Email Intake

Convert organization email and attachments into a verified intake job.

### Guided Form

Support shelter staff, fosters, advocates, and the son.

### National Discovery

Search registered directories and approved domains for private candidate records and outreach leads.

## 6. Canonical Dog Data Contract

### Identity

```text
source_provider
source_organization_id
source_organization_name
external_animal_id
source_url
name
species
general_location
availability_status
availability_last_updated_at
waggie_last_verified_at
adoption_contact_url
profile_authority_level
```

### Media

```text
media_source_url
media_type
media_rights_basis
media_owner
media_attribution
media_last_updated_at
media_hash
safe_storage_url
thumbnail_url
```

### Description

```text
breed_primary
breed_secondary
breed_confidence
age_value
age_unit
age_range
sex
size
weight
color
coat
spayed_neutered
vaccination_status
house_trained
special_needs
medical_notes_public
behavior_notes_public
good_with_dogs
good_with_cats
good_with_children
activity_level
intake_date
foster_status
adoption_fee
source_description
```

### Social Content

```text
waggie_handle
waggie_bio
introduction_post
personality_tags
profile_theme
featured_story
```

### Provenance

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

## 7. Publication Gates

A record publishes after:

1. Organization registration.
2. Active source policy.
3. Stable external identifier.
4. Duplicate clearance.
5. Current permitted status.
6. Official adoption or contact path.
7. Media authorization or approved placeholder.
8. Safe general location.
9. Internal fact consistency.
10. Source-grounded generated content.
11. Operational correction and removal workflow.

## 8. Duplicate Detection

### Deterministic Match

```text
source_provider + source_organization_id + external_animal_id
```

### Cross-Source Evidence

- Organization.
- External IDs.
- Source URLs.
- Name.
- Age.
- Sex.
- Breed.
- General location.
- Intake date.
- Image perceptual hash.

### Merge Policy

- High-confidence exact matches link automatically.
- Medium-confidence matches enter review.
- Low-confidence records remain separate.
- Shared name and breed trigger additional evidence review.
- Every source record remains preserved after profile linkage.

## 9. Dog Voice Generation

Required output:

```text
short_bio
long_bio
introduction_post
three_caption_drafts
share_message
adoption_call_to_action
facts_used
facts_omitted
uncertainties
risk_flags
```

Voice style:

- Warm.
- Hopeful.
- Dog-first.
- Specific.
- Easy to read.
- Mature and approachable.
- Emotionally honest.

Every sentence maps to verified fields or approved harmless personality framing.

Health, safety, behavior, compatibility, urgency, adoption, age, fee, and location claims require exact approved source evidence.

## 10. Source Policy Engine

Each connector or domain has a policy record:

```text
source_type
permission_basis
terms_version
allowed_to_cache
allowed_to_transform_text
allowed_to_host_images
allowed_to_generate_derived_content
required_attribution
required_linkback
required_update_frequency
required_removal_time
organization_opt_out_supported
human_review_required
auto_publish_allowed
policy_review_date
legal_notes
```

A policy change pauses publication from the affected source and opens a review task.

## 11. Freshness and Status

Status checks use:

- API sync.
- Webhook.
- Feed update.
- Source-page recheck.
- Organization confirmation.
- Manual verification.

Required timestamps:

```text
source_last_seen_at
source_last_changed_at
waggie_last_checked_at
waggie_last_verified_at
next_check_at
stale_at
```

State mapping:

- Authorized adopted evidence -> Adopted.
- Authorized pending evidence -> Adoption Pending.
- Authorized unavailable evidence -> Removed from discovery.
- Missing source record -> Status Unknown.
- Repeated failed checks -> Stale and hidden from adoption discovery.
- Verified removal request -> Removal workflow.

## 12. Agent System

### National Discovery Agent

Finds organizations and candidate dog records from the source registry.

### Intake Normalization Agent

Maps source data into the canonical dog contract.

### Identity and Duplicate Agent

Links exact records and routes uncertain matches to review.

### Dog Voice Agent

Creates source-grounded biographies, posts, captions, and calls to action.

### Media Preparation Agent

Validates rights, scans media, creates derivatives, and records provenance.

### Review Agent

Flags incomplete, conflicting, stale, or high-risk records.

### Publication Agent

Publishes eligible profiles and records the policy basis.

### Freshness and Status Agent

Rechecks source state, updates profiles, and creates review tasks.

### Content Maintenance Agent

Creates update drafts from verified changes.

### Outreach and Claim Agent

Creates outreach drafts, claim invitations, and response tracking.

### Adoption Transition Agent

Coordinates adopted status, celebration content, and profile handoff.

### Impact Analytics Agent

Measures views, followers, shares, adoption-link clicks, claims, handoffs, and data quality.

## 13. Intake Job States

```text
CREATED
FETCHING
PARSED
NORMALIZED
VALIDATING
DUPLICATE_REVIEW
CONTENT_DRAFTING
HUMAN_REVIEW
APPROVED
PUBLISHING
PUBLISHED
PARTIALLY_PUBLISHED
FAILED
CANCELLED
REMOVED
```

Each record maintains its own state and error history. Invalid records are isolated while the remaining batch continues.

## 14. Son's Operating Workflow

### Add a Shelter

1. Open Shelter Voice Command Center.
2. Select Add Shelter Source.
3. Choose connector type.
4. Enter organization details.
5. Select the permission basis.
6. Test the source.
7. Preview candidates.
8. Approve connector settings.

### Build Profiles

1. Select candidate batch.
2. Normalize records.
3. Run duplicate review.
4. Build Dog Voice drafts.
5. Review exceptions.
6. Approve ready profiles.
7. Publish batch.

### Maintain Profiles

1. Review status changes.
2. Review stale profiles.
3. Approve updates.
4. Process claims and corrections.
5. Process removal requests.
6. Celebrate adoptions.
7. Transfer profiles to adopters.

## 15. Organization Claim

1. Send secure claim invitation.
2. Verify representative identity.
3. Record organization authority.
4. Accept data permissions.
5. Grant manager access.
6. Select management model:
   - Full management.
   - Shared management.
   - Source-feed management.
   - Removal.
7. Record the claim in the audit log.

## 16. Correction and Removal

Every profile includes:

- Report incorrect data.
- Claim this profile.
- Organization removal request.

Removal states:

```text
REQUESTED
IDENTITY_CHECK
TEMPORARILY_HIDDEN
APPROVED
SOURCE_DATA_REMOVED
DERIVED_CONTENT_REMOVED
BACKUP_RETENTION_HANDLED
COMPLETED
```

Urgent requests can hide public data immediately while verification continues.

## 17. Adoption Continuity

1. Authorized source confirms adoption.
2. Profile leaves available-dog discovery.
3. Celebration content enters review.
4. Profile history remains preserved.
5. Shelter offers profile transfer.
6. Adopter receives secure claim invitation.
7. Adopter accepts active management.
8. Profile converts to family-dog controls.

### Archived Success Story Path

Profiles that remain under shelter or Waggie management become archived success stories.

## 18. Public Experience

A shelter dog profile includes:

```text
DOG NAME
Needs a Home
General Location
Shelter or Rescue
Last Verified
Follow
Share
Official Adoption Link
Dog Voice Bio
Photos and Videos
Verified Facts
Social Posts
Followers
Comments
Adoption Information
Source and Manager Information
```

The profile functions as a living social identity with an active story, audience, and verified adoption pathway.

## 19. Dashboard Metrics

### Coverage

- Active organizations.
- States covered.
- Candidate dogs.
- Published profiles.
- Verified available profiles.

### Operations

- Intake jobs.
- Processing time.
- Exceptions.
- Duplicate candidates.
- Stale profiles.
- Removal requests.

### Advocacy

- Profile views.
- Followers.
- Shares.
- Adoption-link clicks.
- Shelter claims.
- Confirmed adoptions.
- Adopter handoffs.

### Quality

- Unsupported-claim flags.
- Corrections.
- Status accuracy.
- Source failures.
- Moderation reports.

## 20. Marketing Engine

Each published profile creates:

- Public dog account.
- Share image.
- Short social caption.
- Shelter attribution.
- Official adoption link.
- Local discovery placement.

Campaign templates:

```text
Meet Me Monday
Long-Stay Love
Senior Sunday
Foster Spotlight
Weekend Home Search
Homecoming Story
Founding Shelter
One Share Could Find My Home
```

Supporter actions:

- Follow.
- Share.
- Comment.
- Save.
- Visit official adoption page.
- Invite shelter to claim.

Donation and transaction capabilities enter through an approved commerce workstream.

## 21. Security and Abuse Controls

- Bulk profile creation requires verified roles.
- Agents use limited service identities.
- Every creation records its source and agent run.
- Every status change creates an audit event.
- Discovery and intake jobs use rate controls.
- Uploaded files and media receive scanning.
- Foster addresses remain private.
- Shelter staff personal information remains private.
- Claim verification protects organizations.
- Duplicate controls detect mass creation.
- Connector shutdown controls remain available.
- Publication and posting controls support immediate administrative pause.

## 22. Acceptance Criteria

The Shelter Voice Engine reaches operational readiness when:

1. A verified operator creates an organization.
2. A spreadsheet creates separate draft profiles.
3. Exact duplicates are detected.
4. Dog Voice drafts remain source-grounded.
5. A reviewer approves or rejects each record.
6. Published profiles show manager, source, and freshness labels.
7. Official adoption links work.
8. Shelters can claim profiles.
9. Shelters can submit corrections and removal requests.
10. Sync jobs update availability.
11. Missing records enter Status Unknown.
12. Confirmed adopted profiles support guardian handoff.
13. Every action appears in the audit log.
14. The son completes the workflow through interface controls.

## 23. Connector Sequence

1. Standard Waggie spreadsheet template.
2. Guided form and URL intake.
3. Approved national adoption-data API.
4. Direct shelter partner feed.
5. Additional shelter management platforms.

Use current supported APIs and transfer methods.

## 24. Foundation-Level Decisions Queue

1. Public program name. Working name: Waggie Voices.
2. Public AI disclosure wording.
3. Default stale interval by source type.
4. Comment policy for unclaimed source-linked profiles.
5. Scope of shelter authorization for generated posts and maintenance.
6. Adopter verification method for profile handoff.

Core architecture proceeds while these items remain in the decision queue.
