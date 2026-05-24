export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-animal-welfare-software-should-be-local-first',
    title: 'Why Animal Welfare Software Should Be Local-First',
    category: 'Technology',
    date: 'Jan 15, 2025',
    description: 'Shelter and rescue teams work in places with spotty internet, manage sensitive records, and operate on zero budget for cloud subscriptions. Local-first software is the only architecture that respects those constraints.',
    content: `Most animal welfare software is designed like enterprise SaaS. You pay a monthly fee, your data lives on someone else's server, and if you lose internet access — or the vendor raises prices — you're stuck.

That model works fine for organizations with IT departments and reliable broadband. It doesn't work for the rescue running out of a garage in a rural county, or the shelter whose wifi goes down every time it rains.

**The case for local-first**

Local-first software stores your data on your device. The application works offline. When you do have internet, you can sync or back up — but the sync is optional, not required.

For animal welfare teams, this matters for three reasons:

**1. Sensitive records belong on your machine**

Animal intake records, medical histories, and donor information are sensitive. Putting them in a third-party cloud means trusting that vendor's security, privacy policy, and business continuity. Local storage eliminates that dependency.

**2. Connectivity is not universal**

Foster families, transport volunteers, and field teams often work in places where connectivity is poor. Software that requires a live connection fails them exactly when they need it most.

**3. Budget reality**

Cloud subscriptions compound. A rescue with a $500/month software bill has to raise that money every month just to stand still. Local-first software, especially open-source, removes that recurring cost.

**What local-first doesn't mean**

Local-first doesn't mean no internet, ever. Open Paw supports optional cloud sync for teams that want it. It means your data isn't *hostage* to the cloud.

It also doesn't mean worse features. Local SQLite databases can be fast, reliable, and full-featured. The constraint is good design discipline.

**The tradeoff**

Local-first software is harder to build correctly. You have to think about sync conflicts, backup strategies, and offline state. That's why most vendors don't do it.

Open Paw does it anyway, because the alternative — telling a rescue team they lost their animal records because the vendor went out of business — is not acceptable.`,
  },
  {
    slug: 'funding-radar-finding-grants-without-losing-the-plot',
    title: 'The Open Paw Funding Radar: Finding Grants Without Losing the Plot',
    category: 'Funding',
    date: 'Jan 22, 2025',
    description: 'Grant research is slow, deadline-driven, and easy to drop when you\'re also managing 40 animals. Funding Radar is built to make it survivable.',
    content: `Most animal welfare organizations are leaving grant money unclaimed — not because they don't qualify, but because grant research takes time nobody has.

The typical process looks like this: someone finds a relevant foundation, bookmarks it, means to come back to it, gets pulled into an intake emergency, and forgets. The deadline passes. Repeat.

**What Funding Radar does**

Funding Radar is a module inside Open Paw that turns grant management from a pile of browser bookmarks into a structured workflow.

It has four main parts:

**Funder database.** A searchable, filterable list of grant sources with focus areas, geographic restrictions, award ranges, and contact information. You add funders you've found or import from the included resource directory.

**Grant calendar.** Deadline tracking with alerts. When a grant you're tracking is 30 days out, you get a reminder. When it's 7 days out, you get another one. Missing deadlines because they snuck up on you stops being a thing.

**Eligibility checker.** Before you spend three hours on an application, the eligibility tool checks your organization profile against the funder's criteria. 501(c)(3) status, service area, program type, annual budget range — the basics that disqualify most applicants before they start.

**AI-assisted narrative drafts.** When you're ready to write, Funding Radar can generate a first-draft narrative based on your org profile, the grant's focus, and your recent program data. The draft requires human review before anything is submitted. This is not an auto-submit system. It's a starting point that saves the blank-page problem.

**What it doesn't do**

Funding Radar doesn't submit applications for you. It doesn't promise you'll win grants. It doesn't scrape funder websites without permission.

The AI draft is a starting point, not a final product. Every narrative should be reviewed, edited, and approved by a human who knows your organization. The tool accelerates the process; it doesn't replace judgment.

**Who it's for**

Any rescue or shelter that has tried to track grants in a spreadsheet, lost a deadline, or given up because the research felt like a second full-time job.

If that's you, Funding Radar is built for you.`,
  },
  {
    slug: 'track-foster-capacity-without-spreadsheet-explosion',
    title: 'How to Track Foster Capacity Without a Spreadsheet Explosion',
    category: 'Operations',
    date: 'Jan 29, 2025',
    description: 'Foster networks live and die by capacity tracking. Here\'s how to do it without a 47-tab spreadsheet that only one person understands.',
    content: `Every rescue coordinator has a spreadsheet. Usually it's called something like "Foster Master v7 FINAL (2).xlsx" and it has seventeen tabs, color-coding that made sense six months ago, and formulas that break when someone types in the wrong column.

The spreadsheet works until it doesn't. Then you double-place an animal because two people updated different versions. Or a foster says they have capacity and you discover they already have three animals because the sheet wasn't synced.

**The core problem**

Foster capacity tracking fails because the data lives in a document, not a system. Documents don't enforce constraints. They don't notify you when things change. They don't prevent two people from entering conflicting information at the same time.

**What a real system looks like**

In Open Paw, foster capacity is tracked as a property of each person record, not a row in a spreadsheet.

Each foster profile has:
- Current placements (linked to actual animal records)
- Maximum capacity (self-reported, updatable)
- Species and size preferences
- Status (active, on hold, full)
- Contact information

When you try to place an animal with a foster who is full, the system tells you. When a placement ends, capacity updates automatically.

**The placement board**

The foster placement view shows you all your active fosters, their current animals, and their remaining capacity in one place. You can filter by species, location, or availability. When you have an animal that needs a foster, you can see in 30 seconds who can take it.

**Notifications without chaos**

Foster coordinators get notified when placements are approaching their planned end date. Fosters get a reminder when their commitment period is ending. This replaces the "did anyone check on Biscuit's foster?" conversation that happens in every rescue team.

**Making the transition**

If you have a spreadsheet that works-ish, the migration path is: enter your active fosters as person records, link their current animals to them, and retire the spreadsheet. It takes an afternoon, and you only do it once.

The goal isn't software for its own sake. The goal is knowing, at any moment, exactly which animals need fosters and exactly who can take them.`,
  },
  {
    slug: 'vaccine-reminder-workflow-for-rescue-teams',
    title: 'A Simple Vaccine Reminder Workflow for Rescue Teams',
    category: 'Medical',
    date: 'Feb 5, 2025',
    description: 'Missed vaccines are one of the most common preventable issues in rescue operations. Here\'s a workflow that makes them hard to miss.',
    content: `Vaccine tracking in a rescue context is harder than it looks. Animals come in with unknown histories. Vaccines happen at intake, then again at intervals. Foster families can't always make it to a vet appointment. Reminders fall through the cracks.

The result: animals fall behind on vaccines, which creates medical risk and can delay adoption.

**The workflow problem**

Most rescue teams track vaccines in one of three places: a physical folder, a spreadsheet, or the memory of one very organized volunteer. All three break under load.

When you have 20 animals in care, keeping track of who is due for a booster this week, who needs a rabies update before their adoption date, and who came in with an incomplete history requires a system — not a spreadsheet, not memory.

**A structured approach**

Open Paw's medical records module lets you log each vaccine event with the date, type, and administered-by information. For each vaccine, you can set the next-due date. The task system then creates a reminder automatically.

The result: a weekly list of upcoming vaccine appointments, sorted by due date, filtered to the animals you're responsible for. No hunting through folders. No "I think she's due this month."

**For foster families**

Fosters often take animals to their own vets or to low-cost clinics. The key is getting the record back into the system. Open Paw lets you log a vaccine that was administered externally — you just note the provider and the date.

A simple protocol: after every vet visit, foster family texts a photo of the visit summary. Coordinator logs the vaccines that afternoon. The record stays current.

**The transfer problem**

When an animal transfers to another rescue or gets adopted, the medical record transfers with them. In Open Paw, you can export a complete medical summary as a PDF — vaccines, weight history, medications, procedures. The receiving organization or adopter gets the full picture.

This is not just good practice. For some animals, an incomplete vaccine record is a barrier to adoption. A clean, complete record removes the barrier.

**What a good system buys you**

Time. Confidence. The ability to answer "when is Luna due for her next distemper booster?" in 10 seconds instead of 10 minutes.

That time compounds. The coordinator who spends 20 minutes less on record-hunting every day has 80 more minutes per week for animal care.`,
  },
  {
    slug: 'how-to-write-better-adoption-bios-with-ai-and-human-review',
    title: 'How to Write Better Adoption Bios With AI and Human Review',
    category: 'Adoptions',
    date: 'Feb 12, 2025',
    description: 'A good adoption bio gets animals adopted faster. AI can help write the first draft. Here\'s how to use it without losing your voice or accuracy.',
    content: `The hardest part of an adoption bio isn't describing the animal — it's finding the energy to write yet another one after a long intake shift.

The result: bios that are technically accurate but flat. "Friendly dog, good with cats, loves walks." Every dog loves walks. Every dog is friendly. The bio doesn't help the adopter imagine this specific animal in their home.

**What makes a good bio**

A good adoption bio does three things:

1. It describes the animal's personality in specific, memorable terms — not generic ones.
2. It sets accurate expectations about the animal's needs.
3. It creates an emotional connection without being manipulative.

"Luna is a gray tabby who believes all sunny spots belong to her and will judge you quietly if you disagree. She does well in calm households and would prefer a home without small children. She gives slow blinks freely." That's a bio that gets adopted.

**Where AI helps**

AI-assisted bio drafting starts with the animal's intake notes, foster observations, and behavioral assessment. It generates a first draft that hits the structure and tone.

The draft is a starting point. It's usually 70-80% of the way there — better than starting from scratch, not good enough to post without review.

**The review step**

In Open Paw, the AI draft goes into a review queue before it's visible on the public adoption page. A human reviewer — usually the foster coordinator or an experienced volunteer — reads it, edits for accuracy and voice, and approves it.

This step is not optional. The AI doesn't know that Luna gets anxious in thunderstorms or that she hides for three days when she arrives in a new home. The foster knows. The bio should reflect that.

**What AI should never do**

Generate medical claims. Diagnose behavioral issues. Create a bio from nothing when there's no foster observation data. These are the guardrails that keep the system honest.

The goal is better bios, faster. Not automated bios that could be wrong.

**The outcome**

Organizations that use structured bio workflows — whether with AI assistance or just a template — typically see faster adoption matches. The bio does more work. The animal spends less time in care.

That's the outcome that matters.`,
  },
  {
    slug: 'what-small-rescues-need-from-software-before-they-need-ai',
    title: 'What Small Rescues Need From Software Before They Need AI',
    category: 'Operations',
    date: 'Feb 19, 2025',
    description: 'AI features are exciting. But most small rescues would benefit more from reliable record-keeping and a simple task system first.',
    content: `There's a lot of excitement about AI in animal welfare software. Grant drafting. Adoption bio generation. Medical record analysis.

Most of that excitement is premature for most rescues.

A rescue running 15 animals on $12,000/year doesn't need AI. They need to know where their animals are, when their next vet appointments are, and which fosters have capacity. That's it. That's the whole problem.

**The foundation first**

Before you can benefit from AI, you need reliable data. AI tools that generate grant narratives are only as good as the organization data they pull from. AI tools that flag medical anomalies are only useful if you've been consistently logging medical records.

Most small rescues don't have that data yet — not in a structured, queryable form. They have it in spreadsheets, in someone's email, in the muscle memory of a coordinator who's been doing this for eight years.

**What actually moves the needle**

For a rescue at the beginning of their software journey, the highest-value features are:

**Animal records.** A central list of every animal in care, with status, location, intake date, and species. Nothing fancy. Just a record.

**Status tracking.** Knowing whether an animal is in intake, in foster, on medical hold, or adoptable. A simple pipeline view.

**Task reminders.** "Pepper is due for a vet recheck on March 1." That's it. A task with a due date and an animal linked to it.

**Foster placement tracking.** Who has which animal, and when does their commitment end.

These four things, implemented simply and reliably, will reduce dropped balls by 80%.

**Where AI fits in**

Once you have reliable records — and you've been logging consistently for 3-6 months — AI features start to make sense. Your grant narratives can pull from real program data. Your bio drafts can reference real foster observations.

But the AI is only as good as the records feeding it. Garbage in, garbage out — and in animal welfare, garbage out means an inaccurate bio or a grant narrative that doesn't match your actual program.

**The honest recommendation**

Start simple. Get your animals into a system. Log consistently. Build the discipline.

Then, when your data is real and reliable, add the AI layer. It will actually work.`,
  },
  {
    slug: 'open-source-for-shelters-what-data-portability-actually-means',
    title: 'Open Source for Shelters: What Data Portability Actually Means',
    category: 'Technology',
    date: 'Feb 26, 2025',
    description: 'Data portability is often promised and rarely delivered. Here\'s what it actually means and why it matters for animal welfare organizations.',
    content: `Almost every animal welfare software vendor claims their product supports "data portability." The claim is usually true in a narrow technical sense and useless in practice.

**What vendors mean by data portability**

When a vendor says you can export your data, they usually mean: you can download a CSV file that contains your animal names, intake dates, and adoption outcomes. You cannot export your medical records, your adoption application history, your custom fields, or your user-generated content in a format another system can import.

The CSV is technically your data. It's practically useless for migration.

**What data portability should mean**

Real data portability means you can leave a system and take everything with you — in a format that another system can use.

For animal welfare organizations, that means:
- Animal records with full history (status changes, notes, photos)
- Medical records (vaccines, medications, procedures)
- People records (adopters, fosters, donors) with their history
- Documents and attachments
- Custom fields and their data
- Audit logs

The test: if you switched software tomorrow, could you import your history into the new system? Not just your animal names — your actual operational history?

**Why open source matters here**

Open source software gives you a different kind of guarantee: you can always read the database yourself. Even if the application stops working, even if the project is abandoned, your data is in a SQLite file that you can open with any database tool and query directly.

Your data is never locked inside a proprietary format that only one vendor's tooling can read.

**The practical implication**

For organizations that have been burned by vendor lock-in — migrating away from a SaaS tool and discovering their history isn't exportable — open source is a structural solution, not just a philosophical one.

Open Paw stores your data in standard SQLite. The schema is documented and open. Export tools are part of the project. Your data is yours, in a format that means something.

**The migration path**

When your needs outgrow Open Paw, or when you want to switch to another system, you should be able to export everything and import it elsewhere. That's the bar we're building to.`,
  },
  {
    slug: 'lost-and-found-workflows-that-help-reunite-pets-faster',
    title: 'Lost and Found Workflows That Help Reunite Pets Faster',
    category: 'Operations',
    date: 'Mar 5, 2025',
    description: 'The best reunifications happen within 24 hours. After that, chances drop sharply. Here\'s how to build a workflow that works fast.',
    content: `Most reunifications happen in the first 24-48 hours after a pet goes missing. After that, the chances of finding an owner drop significantly. This means the speed of your lost and found workflow directly determines outcomes.

**The matching problem**

The hard part of lost and found isn't collecting reports — it's matching them. A lost report and a found report about the same animal might use completely different descriptions. "Brown lab mix" and "tan short-haired dog." Same animal, different descriptor.

Manual matching requires someone to read every new report against every open report and make a judgment call. For a shelter handling dozens of reports per week, this becomes a full-time job.

**A structured intake form**

The first improvement is standardizing how reports come in. Instead of a free-text "describe your pet" field, a structured form collects:
- Species, breed, primary color, secondary color
- Sex, estimated age
- Microchip number (if known)
- Last known location (address + date)
- Distinguishing marks
- Collar/tag description
- Photo (required)

Structured fields make matching possible. "Brown" and "tan" are still a judgment call, but matching by species + approximate color + location + date is much more tractable than matching free text.

**The follow-up protocol**

Most reunifications happen because someone follows up — calls shelters, posts in neighborhood groups, checks back. A workflow that surfaces open reports to staff daily, sorted by age, ensures no report sits dormant.

In Open Paw, open lost/found reports appear in the coordinator's task list until they're marked resolved. The match status moves through: open → potential match → confirmed → reunited or closed.

**When to involve the public**

Some organizations publish lost and found reports publicly. This is often the right call — the person who found a dog is more likely to see a public listing than to call a shelter. But public listings require care: full contact information for the reporting party should not be public. A contact form or email relay protects privacy while enabling contact.

**The outcome measure**

Track your reunification rate. What percentage of lost reports result in a confirmed reunion? What's the average time from report to reunion? These numbers tell you whether your workflow is working.

Most organizations that move from ad-hoc reporting to a structured workflow see their reunification rate improve. The workflow doesn't find lost pets — the community does — but the workflow makes sure nothing falls through the cracks.`,
  },
  {
    slug: 'how-fiscal-sponsors-can-support-animal-welfare-programs',
    title: 'How Fiscal Sponsors Can Support Animal Welfare Programs With Shared Tools',
    category: 'Operations',
    date: 'Mar 12, 2025',
    description: 'Fiscal sponsorship is a growing model for animal welfare. Here\'s how shared software infrastructure can reduce overhead for both sponsors and sponsored programs.',
    content: `Fiscal sponsorship is a model where an established nonprofit acts as the legal and financial umbrella for a program that doesn't have its own 501(c)(3) status. For animal welfare, this is increasingly common — a new rescue group operates under a larger organization's tax exemption while building toward independent status.

The challenge is infrastructure. The sponsored program needs software. The sponsor often has their own systems. The two don't talk.

**The multi-tenant problem**

A fiscal sponsor supporting four sponsored animal welfare programs might have each program using a different spreadsheet, a different email address, a different filing system. Oversight becomes a coordination nightmare. Reporting requires manually aggregating data from four separate sources.

**What shared infrastructure looks like**

Open Paw is designed for multi-tenant operation. A fiscal sponsor can run a single Open Paw installation where each sponsored program has its own tenant — its own animal records, its own users, its own data.

The sponsor has a top-level view that shows aggregate activity across programs. They can run consolidated reports. They can see which programs are active, which have pending grant deadlines, and which animals are in care across their portfolio.

Each sponsored program sees only their own data. A volunteer at Program A cannot see Program B's animal records or donor information.

**What this requires from the sponsor**

Running shared infrastructure is a commitment. The sponsor needs someone who can administer the system, manage user accounts, and handle backups. For a large sponsor supporting many programs, this might be a part-time role. For a smaller sponsor, it might be a shared responsibility.

The tradeoff: the infrastructure cost is borne once, not four times. Programs get production-quality software on day one instead of starting from spreadsheets.

**The grant reporting benefit**

When sponsored programs use shared infrastructure, the sponsor can generate consolidated impact reports across all programs. Instead of asking four programs to submit quarterly data in four different formats, the sponsor generates the report directly from the system.

For funders who require consolidated reporting from fiscal sponsors, this removes a significant administrative burden.

**Starting point**

For fiscal sponsors exploring this model, the practical starting point is: identify your highest-need sponsored programs, pilot the shared infrastructure with one or two, and expand from there. The goal is not to mandate tooling — it's to offer it as a service that reduces friction for everyone.`,
  },
  {
    slug: 'felipe-reviews-your-intake-workflow',
    title: 'Felipe Reviews Your Intake Workflow',
    category: 'Operations',
    date: 'Mar 19, 2025',
    description: 'A fictional rescue coordinator reviews common intake workflow mistakes and what to do instead.',
    content: `*Felipe has been coordinating animal intake at a mid-size rescue for six years. He has seen every intake workflow mistake at least twice. Here are his notes.*

---

**"We do intake on paper and enter it later"**

I understand why you do this. The animal is in front of you, you're trying to get them comfortable, you don't have time to type. The paper form is fast.

The problem is "later" doesn't happen. Or it happens three days later, when you can't remember what the intake volunteer told you about the dog's history. Or it happens halfway, and you have half the record in paper and half in the system.

What actually works: a phone or tablet at intake, with a form that takes 4 minutes to fill out completely. Yes, even when the animal is distressed. The 4 minutes now saves 40 minutes of reconstruction later.

**"We have a separate system for medical records"**

Every organization that has a separate medical records system has a coordination problem. The animal's intake status is in System A. Their vaccine history is in System B. When the adoption coordinator wants to know if an animal is cleared for adoption, they have to check two places, and one of them usually has stale data.

Unified records exist. Use them.

**"Our foster coordinator keeps track of placements"**

Your foster coordinator is doing great work. She also knows things that aren't written down anywhere, and when she takes a vacation or — inevitably — burns out and steps back, those placements exist only in her head.

A system doesn't replace your foster coordinator. It makes her replaceable in the best sense: someone else can step in without losing the thread of 15 active placements.

**"We don't track outcomes"**

This one is expensive. When you apply for a grant, they want to know your adoption rate. Your reunification rate. Your average length of stay. If you've been tracking outcomes — even informally — you have numbers. If you haven't, you're estimating, and funders can tell.

Outcome tracking is a 2-minute step at the end of each adoption or reunion. It's worth it.

**"We'll fix the workflow when things calm down"**

Things don't calm down. Intake season is always either just ending or just beginning. The fix-it window that you're waiting for doesn't exist.

The organizations that have good workflows built them in the middle of chaos, because that's when you most need them.

Start with the minimum: animal record, status, location, task for next action. Get that right. Everything else comes later.`,
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRecentPosts(count = 3): BlogPost[] {
  return blogPosts.slice(0, count);
}
