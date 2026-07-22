# GitHub Repository Audit

Scope: read-only audit of repositories under the `SRZpeedTEC` account. The
`SebKoreano` account was visible as a separate installed account, but it was not
used as the portfolio-owner source because the requested repository is
`SRZpeedTEC/Portafolio_Santiago_Boza` and the CV/GitHub profile point to
`SRZpeedTEC`.

Limitations: GitHub CLI is not installed locally. Public repositories were
cloned into a temporary system directory for read-only inspection. Two private
repositories were visible to the connector but could not be cloned through HTTPS;
their public portfolio treatment should remain conservative. GitHub topics and
homepage metadata were not fully available from the connector response.

Scoring model: technical relevance 20, scope and completeness 20, portfolio
differentiation 15, code organization 10, README/documentation 15, visual
evidence/live demo 10, setup reproducibility 5, GitHub presentation quality 5.

## Featured Projects

| Repository                                    | Score | Classification                              | Why selected                                                                                                                                                                                                                 |
| --------------------------------------------- | ----: | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SRZpeedTEC/NutriTEC`                         |    82 | Featured now, link withheld pending cleanup | Broadest project scope: role-based frontends, layered .NET APIs, SQL Server scripts, MongoDB API structure, REST Client tests, deployment folders. Selected to show full-stack and database depth.                           |
| `SRZpeedTEC/TECAir`                           |    80 | Featured now, link withheld pending cleanup | Strong full-stack airline domain with React frontends, layered ASP.NET Core API, PostgreSQL persistence, mobile packaging, and endpoint documentation. Selected because the CV verifies team context and contribution areas. |
| `SRZpeedTEC/CineTEC`                          |    74 | Featured now                                | Clear README, React/Vite frontend, ASP.NET Core API, admin/client flows, services, repositories, file storage, reports, and deployment folders. Selected as a concise full-stack prototype with public source link.          |
| `SRZpeedTEC/-sboza-compu-archi-found-G1-2026` |    78 | Featured now                                | Differentiates the portfolio with SystemVerilog FPGA modules, testbenches, assembly examples, Python processor simulation, pipeline modules, UI, and tests.                                                                  |
| `SRZpeedTEC/TinySQLDbOFICIAL`                 |    68 | Featured now                                | Shows database-system and data-structure thinking through SQL-like operation processing, file storage, system catalog work, B-tree, and BST indexes. Documentation needs major improvement.                                  |

## Repositories Evaluated But Not Selected

| Repository                              | Score | Classification                      | Brief reason                                                                                                                                                                |
| --------------------------------------- | ----: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SRZpeedTEC/DonCEy_Kong_Jr`             |    70 | Improve before featuring            | Strong C/Java client-server game structure and reusable sprites, but less aligned than database/full-stack/computer-architecture projects for this first portfolio cut.     |
| `SRZpeedTEC/TECMEDIAFILESYSTEM`         |    58 | Improve before featuring            | Interesting distributed/file-system style structure with controller and disk nodes, but public README is effectively empty and build artifacts/config folders need cleanup. |
| `SRZpeedTEC/Proyecto1_Datos1_Tron`      |    57 | Keep public but do not feature      | Demonstrates C# desktop game and data structures, but README is minimal and it overlaps with stronger systems/game candidates.                                              |
| `SRZpeedTEC/ProductoresAgricolasUnidos` |    45 | Review visibility or archive status | Python desktop app with a short README and a hardcoded admin password in source. Needs cleanup before portfolio use.                                                        |
| `SRZpeedTEC/RegistroCE`                 |    42 | Keep public but do not feature      | Assembly grading-management project, but includes executable artifacts and limited documentation.                                                                           |
| `SRZpeedTEC/BusCEMinas`                 |    38 | Keep public but do not feature      | Small Racket Minesweeper exercise; useful academically but too narrow for featured work.                                                                                    |
| `SRZpeedTEC/Chatting_Tarea1`            |    36 | Keep public but do not feature      | C# chat assignment with informal README; needs professional documentation before use.                                                                                       |
| `SRZpeedTEC/Caso-3Modelado`             |    35 | Keep public but do not feature      | Design-pattern practice in C# WinForms; no README and limited project context.                                                                                              |
| `SRZpeedTEC/Airwars`                    |    34 | Keep public but do not feature      | Small C# WinForms game; no README and limited evidence of portfolio-level scope.                                                                                            |
| `SRZpeedTEC/MPointers2_8`               |    33 | Keep public but do not feature      | C++ pointer/data-structure practice; lacks README and presentation context.                                                                                                 |
| `SRZpeedTEC/Tarea-2`                    |    25 | Keep public but do not feature      | Small C# linked-list assignment; no README.                                                                                                                                 |
| `SRZpeedTEC/RepositorioPruebaIntro`     |    18 | Review visibility or archive status | Introductory example repository; not relevant for professional portfolio.                                                                                                   |
| `SRZpeedTEC/SRZpeedTEC`                 |    50 | Improve before featuring            | Profile README contains useful personal facts but should be polished and kept consistent with the portfolio.                                                                |
| `SRZpeedTEC/Portafolio_Santiago_Boza`   |    62 | Featured indirectly                 | This repository is the portfolio itself; not a project card candidate yet.                                                                                                  |
| Private repository: `TransLog`          |    20 | Insufficient access or evidence     | Private repo, connector README only showed a title, HTTPS clone failed. Do not feature without owner review.                                                                |
| Private repository: `ProyectoII_Intro`  |    20 | Insufficient access or evidence     | Private repo, HTTPS clone failed. Do not expose or feature without owner review.                                                                                            |

## Per-Repository Notes

### `SRZpeedTEC/NutriTEC`

- Visibility: public.
- Purpose: academic nutrition-management platform.
- Main technologies: ASP.NET Core, C#, React, Vite, SQL Server, MongoDB, Docker.
- Completeness: substantial implementation, but README still describes parts as
  initial structure.
- README status: useful but outdated relative to source evidence.
- GitHub description/topics/homepage: not fully available through connector.
- Screenshots/media: logo and app assets exist; no clean portfolio screenshots
  selected.
- Installation instructions: partial.
- Architecture documentation: README and source structure explain layers; docs
  folder is sparse.
- Demo status: no verified public deployment.
- Code organization: strong layered backend, role-based frontends, database
  scripts, tests.
- Sensitive-information concerns: committed database connection configuration
  should be rotated/sanitized before public promotion.
- Portfolio relevance: very high.
- Recommended next actions: sanitize secrets, update README, add screenshots,
  document setup, clarify team roles, then add public repository link.
- Suggested description: "Academic full-stack nutrition platform with role-based
  React interfaces, layered ASP.NET Core APIs, SQL Server scripts, and MongoDB
  feedback support."
- Suggested topics: `react`, `vite`, `aspnet-core`, `sql-server`, `mongodb`,
  `nutrition`, `rest-api`, `academic-project`.

### `SRZpeedTEC/TECAir`

- Visibility: public.
- Purpose: airline reservation and operations platform.
- Main technologies: ASP.NET Core, C#, PostgreSQL, Npgsql, React, Vite,
  Capacitor.
- Completeness: substantial implementation across backend, web, admin, mobile,
  tests, and database folders.
- README status: placeholder-only and should be replaced.
- GitHub description/topics/homepage: not fully available through connector.
- Screenshots/media: promotion images and mobile assets exist; no clean
  screenshots selected.
- Installation instructions: missing from root README.
- Architecture documentation: source is layered; itinerary-management notes are
  useful.
- Demo status: no verified public deployment.
- Code organization: strong API/application/infrastructure separation with DTOs,
  services, repositories, and REST Client files.
- Sensitive-information concerns: committed local database connection
  configuration should be sanitized.
- Portfolio relevance: very high.
- Recommended next actions: replace README, sanitize config, add screenshots,
  document setup, clarify team contributions, then add public repository link.
- Suggested description: "Academic airline reservation platform with React web
  flows, ASP.NET Core APIs, PostgreSQL persistence, and mobile packaging."
- Suggested topics: `react`, `vite`, `aspnet-core`, `postgresql`, `airline`,
  `rest-api`, `capacitor`, `academic-project`.

### `SRZpeedTEC/CineTEC`

- Visibility: public.
- Purpose: cinema management and ticket-sales prototype.
- Main technologies: React, Vite, ASP.NET Core, C#, Bootstrap, XML/JSON/TXT
  storage.
- Completeness: functional prototype structure.
- README status: concise and useful, but missing limitations, screenshots,
  testing instructions, contributors, and license.
- GitHub description/topics/homepage: not fully available through connector.
- Screenshots/media: app logo and movie images exist; no screenshot copied.
- Installation instructions: present for backend/frontend.
- Architecture documentation: good repository structure summary.
- Demo status: no verified public deployment.
- Code organization: controllers, models, repositories, services, frontend
  routes/pages/services.
- Sensitive-information concerns: none identified in quick scan.
- Portfolio relevance: high.
- Recommended next actions: add screenshots, contributor context, test notes,
  known limitations, and license status.
- Suggested description: "Cinema management and ticket-sales prototype built
  with React and ASP.NET Core Web API."
- Suggested topics: `react`, `vite`, `aspnet-core`, `cinema`, `ticketing`,
  `bootstrap`, `web-api`, `academic-project`.

### `SRZpeedTEC/-sboza-compu-archi-found-G1-2026`

- Visibility: public.
- Purpose: computer-architecture academic work with FPGA modules and processor
  simulation.
- Main technologies: SystemVerilog, Python, assembly, testbenches.
- Completeness: substantial source and test structure.
- README status: useful but short; repository name references 2026 while README
  title references 2025.
- GitHub description/topics/homepage: not fully available through connector.
- Screenshots/media: none found.
- Installation instructions: missing for Python simulator and FPGA toolchain.
- Architecture documentation: source folders are clear; UI README exists.
- Demo status: no verified public demo.
- Code organization: separated FPGA modules, Python assembler/core/pipeline/UI,
  and tests.
- Sensitive-information concerns: none identified in quick scan.
- Portfolio relevance: high because it differentiates computer-engineering
  foundations.
- Recommended next actions: resolve year mismatch, add setup instructions,
  screenshots/diagrams, and explain team context.
- Suggested description: "Computer-architecture academic project with
  SystemVerilog FPGA modules and Python processor simulation."
- Suggested topics: `systemverilog`, `fpga`, `computer-architecture`, `python`,
  `assembly`, `processor-simulator`, `testbench`, `academic-project`.

### `SRZpeedTEC/TinySQLDbOFICIAL`

- Visibility: public.
- Purpose: simplified database engine and query-processing project.
- Main technologies: C#, .NET, file storage, SQL-like parsing, B-tree, BST.
- Completeness: meaningful multi-project source structure.
- README status: missing.
- GitHub description/topics/homepage: not fully available through connector.
- Screenshots/media: none found.
- Installation instructions: missing.
- Architecture documentation: missing outside source folders.
- Demo status: no verified demo.
- Code organization: API interface, entities, query processor, store data
  manager, project tests.
- Sensitive-information concerns: none identified in quick scan.
- Portfolio relevance: high as a data-structures/database internals project.
- Recommended next actions: add README, examples of supported queries, setup,
  storage model, limitations, and tests.
- Suggested description: "C# academic database engine practice with SQL-like
  parsing, file-based storage, and tree-based indexes."
- Suggested topics: `csharp`, `dotnet`, `database`, `sql-parser`, `b-tree`,
  `binary-search-tree`, `file-storage`, `academic-project`.

### Other Repositories

For `DonCEy_Kong_Jr`, prioritize documenting C/Java client-server architecture,
TLV protocol handling, build steps, screenshots, and collaboration context.

For `TECMEDIAFILESYSTEM`, remove committed IDE/build artifacts, add a real README,
and explain controller/disk node architecture before featuring.

For `Proyecto1_Datos1_Tron`, add screenshots, setup instructions, game controls,
data-structure notes, and contributor context.

For `ProductoresAgricolasUnidos`, remove the hardcoded password, improve README,
and review whether the repository should remain public.

For smaller assignment repositories, keep them public only if they are useful for
academic traceability; otherwise consider archiving or improving descriptions.

## README Improvement Priorities

1. TECAir: replace placeholder README with project purpose, architecture, setup,
   configuration, screenshots, tests, known limitations, and team context.
2. TinySQLDbOFICIAL: add a complete README from scratch with supported SQL-like
   operations and storage/index architecture.
3. NutriTEC: update README to match current source, explain role-based apps,
   database setup, tests, security configuration, and limitations.
4. Computer Architecture Foundations: add simulator/FPGA setup, diagrams,
   screenshots, tests, and resolve naming/year mismatch.
5. TECMEDIAFILESYSTEM: document architecture and remove generated local files
   before considering it for the portfolio.

## GitHub API Synchronization Decision

Not implemented in this iteration.

Reasoning: the portfolio benefits more from manually curated project content
because project purpose, contribution, security status, and collaboration context
must be verified by Santiago. Live client-side GitHub API calls would add
complexity and risk. A future build-time sync could safely enrich selected
projects with public metadata after repository cleanup.

Recommended future architecture:

- Manually curated featured project data.
- Optional build-time metadata sync for selected public repositories only.
- Cached generated JSON committed after review.
- Optional server-side `GITHUB_TOKEN`, never exposed to React client code.
- Graceful fallback to curated data when GitHub is unavailable.

## Profile Recommendations

Recommended pinned repositories and order:

1. `NutriTEC` after credential cleanup.
2. `TECAir` after credential cleanup and README rewrite.
3. `CineTEC`.
4. `-sboza-compu-archi-found-G1-2026`.
5. `TinySQLDbOFICIAL` after README creation.
6. `DonCEy_Kong_Jr` after documentation improvements.

Update first:

- Repository descriptions for TECAir, NutriTEC, TinySQLDbOFICIAL, and Computer
  Architecture Foundations.
- READMEs for TECAir, TinySQLDbOFICIAL, NutriTEC, and TECMEDIAFILESYSTEM.
- Screenshots for all featured projects.
- Visibility/security review for repositories with committed configuration or
  hardcoded credentials.
