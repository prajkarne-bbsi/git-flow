# Git-Flow

## Overview
Git Flow is a comprehensive branching strategy designed to cover various development scenarios. It defines specific branch responsibilities and provides a structured workflow for managing features, releases, and hotfixes. This strategy excels in environments with scheduled releases and multiple product versions.

**Best suited for**: Large teams, scheduled releases, enterprise software, and projects requiring multiple version support.

## Core Principles

- **Structured branch hierarchy** - Each branch type has a specific purpose and lifecycle
- **Parallel development** - Multiple features and releases can progress simultaneously
- **Release preparation** - Dedicated release branches for stabilization and testing
- **Version management** - Clear tracking of production versions through tags
- **Hotfix capability** - Quick fixes for production without disrupting development
- **Team coordination** - Well-defined workflow enables large team collaboration

## Branching Strategy

### Main Branch (`main` or `master`)
- **Purpose**: Production-ready code, reflects live application
- **Protection**: Highly protected, no direct commits
- **Receives merges from**: `release/*` and `hotfix/*` branches only
- **Deployment**: Represents production environment
- **Rules**: 
  - All commits must be tagged with version numbers
  - Only stable, tested code
  - No direct development work

### Develop Branch (`develop`)
- **Purpose**: Integration branch for ongoing development
- **Protection**: Protected, requires PR reviews
- **Receives merges from**: `feature/*`, `release/*`, and `hotfix/*` branches
- **Deployment**: Can deploy to development environment
- **Rules**: 
  - Always ahead of `main` with latest features
  - Should remain stable enough for feature integration
  - Source branch for all features and releases

### Feature Branches (`feature/*`)
- **Purpose**: Development of new features or enhancements
- **Naming Convention**: `feature/feature-name` or `feature/TICKET-123-description`
- **Created from**: `develop`
- **Merged into**: `develop` only
- **Lifespan**: Duration of feature development (days to weeks)
- **Rules**: 
  - Never merge directly to `main`
  - Delete after merge to `develop`
  - Keep focused on single feature

### Release Branches (`release/*`)
- **Purpose**: Preparation and stabilization of upcoming release
- **Naming Convention**: `release/v1.2.0` or `release/2024.11`
- **Created from**: `develop`
- **Merged into**: `main` AND `develop`
- **Lifespan**: Until release is deployed (1-2 weeks typical)
- **Rules**: 
  - No new features, only bug fixes and release prep
  - Version bump and changelog updates
  - Final testing and QA
  - Tag `main` after merge

### Hotfix Branches (`hotfix/*`)
- **Purpose**: Emergency fixes for production issues
- **Naming Convention**: `hotfix/v1.2.1` or `hotfix/critical-bug-fix`
- **Created from**: `main`
- **Merged into**: `main` AND `develop` (or current `release/*`)
- **Lifespan**: Short-lived (hours to 1 day)
- **Rules**: 
  - Only for critical production issues
  - Increment patch version
  - Must be merged back to both `main` and `develop`
