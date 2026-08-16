# Waggie Tail Visual Rebuild Design System

Status: ACTIVE
Date: 2026-08-16

## Intended Outcome
The application presents Waggie Tail as a premium dog-first social network where each dog owns the public identity and managers operate privately behind that identity.

## Required Behavior
The interface uses a responsive social shell, warm ivory and white surfaces, deep navy typography, coral social actions, circular dog identity media, reusable cards, accessible controls, and populated demonstration content for family dogs, shelter dogs, contests, notifications, settings, onboarding, and administration.

## Design Tokens
Tokens are centralized in `src/styles.css` as CSS variables for color, radius, shadow, and motion. The primary colors are Warm Ivory `#FFF9F4`, Deep Navy `#18324A`, Charcoal Text `#1E2933`, Waggie Coral `#FF6B61`, Soft Sky `#C9EAF7`, Sage `#CEE1CF`, Golden Tan `#DFAF69`, and Soft Blush `#FAD8D4`.

## Component Evidence
Reusable visual sections and component factories live in `src/app.js` and include app shell elements, dog avatars, dog identity, dog cards, shelter dog cards, post cards, composer, profile header, badges, campaign cards, notifications, empty state, loading skeleton, metric cards, admin table, search field, and mobile navigation.

## Acceptance Condition
The current implementation is accepted when the landing page, home feed, dog profile, discover page, create-post editor, contests, shelter dogs, authentication, onboarding, notifications, settings, and administration render as one cohesive responsive social product.

## Verification Method
Run `npm install`, `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`, and `npm run dev`. Review the static preview at mobile and desktop widths.

## Owner Approval Point
Production deployment, public campaign launch, paid services, and legal-policy publication remain owner approval points.
