export type SectionCopy = {
  eyebrow: string | null;
  title: string;
  body: string[];
  cta: { label: string; href: string } | null;
};

// Publishable blocks from the owner-supplied November 2026 brief, with generic scenario substitutions.
export const copy: Record<string, SectionCopy> = {
  H01: {
    eyebrow: "MANAGED PLANNING FOR GROWING FOOD & BEVERAGE BRANDS",
    title: "Before your next production run, know what deserves the cash.",
    body: [
      "ScaleSight maintains the analysis behind your inventory decisions and prepares weekly, specialist-reviewed recommendations on what to buy, make or replenish - how much, when, and the cash each option commits. Your team makes the final call.",
    ],
    cta: {
      label: "See an illustrative decision",
      href: "/examples#supply-timing",
    },
  },
  H02: {
    eyebrow: null,
    title: "A forecast still leaves a decision to make.",
    body: [
      "When retail orders change, a flavor speeds up or supply slips, the question is not just what demand might be. It is what your team should commit to next.",
    ],
    cta: null,
  },
  H03: {
    eyebrow: null,
    title: "We investigate the signal and prepare the choice.",
    body: [
      "ScaleSight brings together sales, inventory, incoming orders and operating constraints. We check what changed, compare feasible actions and prepare recommendations for your team to review.",
    ],
    cta: {
      label: "See how we work",
      href: "/how-we-work",
    },
  },
  H04: {
    eyebrow: null,
    title: "We do the analysis. You can see the reasoning.",
    body: [
      "A planning workspace organizes the evidence behind each recommendation: what changed, what we checked, which options were compared and what needs a decision. Where included in the engagement, your team can review agreed scenarios without having to rebuild our models.",
    ],
    cta: {
      label: "Explore the planning workspace",
      href: "/planning-workspace",
    },
  },
  H05: {
    eyebrow: "ILLUSTRATIVE SUPPLY-TIMING DECISION",
    title: "A shipment slips. Which response is worth its cost?",
    body: [
      "Compare accepting the delay, expediting, splitting supply or adjusting the promotion. See how each choice changes exposure, service and cost before the business commits. Illustrative concept using synthetic operating data. Not a client result.",
    ],
    cta: {
      label: "Explore the illustrative supply decision",
      href: "/examples#supply-timing",
    },
  },
  H06: {
    eyebrow: "ILLUSTRATIVE PRODUCTION-MIX DECISION",
    title: "A launch takes off. Does the next production run need to grow?",
    body: [
      "Look past the headline sales number. Compare opening orders, repeat demand, availability and production constraints to determine whether to increase output, change the mix or wait for a stronger signal. Illustrative concept using synthetic operating data. Not a client result.",
    ],
    cta: {
      label: "Explore the illustrative production decision",
      href: "/examples#production-mix",
    },
  },
  H07: {
    eyebrow: null,
    title: "What your team gets each planning cycle.",
    body: [
      "A concise decision brief connects the changed signal to a clear next step. Your team sees the recommended action, quantities and timing, alternatives considered, assumptions, and cash or availability trade-offs.",
    ],
    cta: {
      label: "See a sample brief",
      href: "/examples#sample-brief",
    },
  },
  H08: {
    eyebrow: null,
    title: "Built around the team and systems you already have.",
    body: [
      "ScaleSight maintains the scoped analytical work and reviewed recommendations. Your team validates commercial constraints, approves or changes the decision, and executes through its existing systems.",
    ],
    cta: {
      label: "See how we work",
      href: "/how-we-work",
    },
  },
  H09: {
    eyebrow: "30-DAY PLANNING PILOT",
    title: "Start with one upcoming commitment.",
    body: [
      "Choose a buying, production or allocation decision. We agree the inputs, baseline and constraints, compare the relevant options and review whether this support deserves a recurring place in your process.",
    ],
    cta: {
      label: "Explore the 30-day pilot",
      href: "/30-day-planning-pilot",
    },
  },
  H10: {
    eyebrow: null,
    title: "Have a decision coming up?",
    body: [
      "Tell us what your team is weighing. We will establish whether a focused planning review fits the timing and available data.",
    ],
    cta: {
      label: "Talk through a decision",
      href: "/contact",
    },
  },
  WS01: {
    eyebrow: "A VIEW INTO THE DECISION",
    title: "See the recommendation. Challenge the assumptions.",
    body: [
      "A ScaleSight decision workspace brings the evidence, scenarios and reviewed recommendation into one place. Where included in scope, your team can examine the options without becoming responsible for producing the analysis.",
    ],
    cta: {
      label: "Explore illustrative workspaces",
      href: "/examples",
    },
  },
  WS02: {
    eyebrow: null,
    title: "One planning question, all the useful context.",
    body: [
      "Each decision view connects the signal to the constraint, the available actions and the consequences worth comparing.",
    ],
    cta: null,
  },
  WS03: {
    eyebrow: null,
    title: "Explore alternatives without rewriting the plan.",
    body: [
      "Selected what-if controls can help your team test a changed quantity, receipt date, allocation or demand assumption. The comparison is exploratory; it does not silently modify the source data or replace the reviewed recommendation.",
    ],
    cta: null,
  },
  WS04: {
    eyebrow: null,
    title: "Maintained by ScaleSight. Clear to your team.",
    body: [
      "The analytical workspace supports our internal investigation and review. The client-facing view focuses on the decisions, evidence and approved scenarios that matter to your team.",
    ],
    cta: null,
  },
  WS05: {
    eyebrow: null,
    title: "You use the decision. We maintain the analysis.",
    body: [
      "The workspace does not replace your ERP, purchase-order process or planning team. ScaleSight refreshes and investigates the agreed analysis. Your team keeps control of inventory policy, supplier commitments and execution.",
    ],
    cta: {
      label: "Discuss a planning decision",
      href: "/contact",
    },
  },
  WS06: {
    eyebrow: "ILLUSTRATIVE WORKSPACES",
    title: "See how a planning question becomes a recommendation.",
    body: [
      "Explore examples built using synthetic operating data. These demonstrate the intended workflow, not actual customer results or live client integrations.",
    ],
    cta: {
      label: "View illustrative examples",
      href: "/examples",
    },
  },
  HW01: {
    eyebrow: "HOW THE SERVICE WORKS",
    title: "From changing stock signals to decisions your team can act on.",
    body: [
      "We work with the data and planning context you already have. ScaleSight investigates demand and supply changes, compares the available actions and prepares reviewed recommendations. Your team decides and executes.",
    ],
    cta: {
      label: "Talk through a decision",
      href: "/contact",
    },
  },
  HW02: {
    eyebrow: null,
    title:
      "The same disciplined planning cycle, refreshed for the agreed scope.",
    body: [
      "01 Agree the decision. Define products, channels, owner and commitment date. 02 Agree inputs. Sales, usable stock, open orders, lead times and relevant context. 03 Check the signal. Distinguish demand from stock availability, launches, promotions and channel mix. 04 Compare responses. Quantities, timing, capacity, service and cash trade-offs. 05 Review the recommendation. Check evidence, uncertainty and operating feasibility. 06 Deliver and revisit. Prepare the decision brief and refresh analysis as new evidence arrives.",
    ],
    cta: null,
  },
  HW03: {
    eyebrow: null,
    title: "A forecast is evidence, not the final answer.",
    body: [
      "We use relevant calculations, statistical methods and machine learning when suitable to the question and data. We also consider stock already committed, supplier timing, production constraints and the cost of each response.",
    ],
    cta: null,
  },
  HW04: {
    eyebrow: null,
    title: "The work is visible in the planning brief.",
    body: [
      "See what changed, which assumptions matter, the options we compared and what the team needs to validate next. When included in scope, selected what-if controls let your team challenge the assumptions.",
    ],
    cta: {
      label: "See the planning workspace",
      href: "/planning-workspace",
    },
  },
  HW05: {
    eyebrow: null,
    title: "Use the data that answers the question.",
    body: [
      "Demand: sales or sell-through by useful product, channel and period. Stock & supply: available inventory, committed stock, purchase orders and receipt timing. Constraints: lead time, MOQ, production slots, pack size and shelf life when relevant. Commercial context: promotions, launches, returns, costs and retailer plans where needed.",
    ],
    cta: null,
  },
  HW06: {
    eyebrow: null,
    title: "A clear recommendation. A clear decision owner.",
    body: [
      "ScaleSight maintains the agreed analysis, tests options and prepares the recommendation. Your team supplies operating context, validates constraints, chooses the action and executes it through existing systems.",
    ],
    cta: null,
  },
  HW07: {
    eyebrow: null,
    title: "Questions before the next commitment?",
    body: [
      "Can you work with our planner or ERP? Yes, within an agreed analytical scope. Does every project use machine learning? No. Methods follow the question and the quality of the data. Will ScaleSight place orders? No. Your team owns approval and execution. What if data is incomplete? We document the gap and agree a narrower useful question where possible.",
    ],
    cta: {
      label: "Talk through a planning decision",
      href: "/contact",
    },
  },
  EX01: {
    eyebrow: "SEE THE THINKING",
    title: "From evidence to a decision worth making.",
    body: [
      "These examples illustrate how ScaleSight may investigate real business questions. They use synthetic operating figures and do not represent client results, internal data or live integrations.",
    ],
    cta: null,
  },
  EX02: {
    eyebrow: "ILLUSTRATIVE CONCEPT / SUPPLY TIMING",
    title: "A delayed salmon shipment. Split, expedite or wait?",
    body: [
      "The planning question: a delayed inbound shipment may leave a service gap before the next receipt. Compare accepting the delay, bringing all stock forward, splitting the shipment or reducing optional promotional demand.",
      "Evidence to examine: available inventory, weekly demand, incoming PO timing and protected commitments. Decision output: an action to consider, units advanced, incremental freight and remaining exposure.",
    ],
    cta: null,
  },
  EX03: {
    eyebrow: "ILLUSTRATIVE CONCEPT / ALLOCATION",
    title: "When stock is limited, where should it go?",
    body: [
      "A constrained SKU can affect retailer commitments, direct-to-consumer availability and mixed-product packs. Compare allocation options with the commitments and dependencies visible.",
    ],
    cta: null,
  },
  EX04: {
    eyebrow: "ILLUSTRATIVE CONCEPT / LAUNCH DEMAND",
    title: "Is a launch adding demand or shifting the flavor mix?",
    body: [
      "Before committing another production run, separate opening orders from repeat orders, check availability, and compare whether to make more total product or adjust the flavor mix within capacity.",
      "Evidence to examine: demand by flavor and retailer, opening versus repeat orders, stock availability, production commitments. Decision output: next-run alternatives with quantity, timing and cash trade-offs.",
    ],
    cta: null,
  },
  EX05: {
    eyebrow: "EXAMPLE OUTPUT",
    title: "A weekly recommendation you can actually discuss.",
    body: [
      "What changed: a demand or supply signal worth investigating. What we checked: availability, commitments and relevant context. Reviewed action: make, buy, move, split, hold or investigate. Quantity & timing: the size of the decision and deadline. Trade-offs: cash commitment, feasibility and potential service exposure. Next signal: the evidence that could change the call.",
    ],
    cta: null,
  },
  EX06: {
    eyebrow: null,
    title: "Could this approach help with your next commitment?",
    body: [
      "The examples demonstrate our analytical method, not an outcome already achieved for the illustrative brands. Bring us your actual decision and we can discuss a scoped assessment.",
    ],
    cta: {
      label: "Explore the 30-day pilot",
      href: "/30-day-planning-pilot",
    },
  },
  P01: {
    eyebrow: "A FOCUSED PAID PILOT",
    title: "Test the planning approach on one real decision.",
    body: [
      "Choose an upcoming buy, production run or allocation choice. We agree the inputs and decision deadline, examine the evidence, compare feasible options and review what your team should consider before committing.",
    ],
    cta: {
      label: "Discuss a 30-day pilot",
      href: "/contact?intent=pilot",
    },
  },
  P02: {
    eyebrow: null,
    title: "A useful pilot starts with a commitment still open.",
    body: [
      "The strongest starting point has a named owner, an upcoming decision date, enough relevant data and at least two feasible alternatives worth comparing.",
      "Examples: a production run with competing flavor signals; an inbound delay with recovery options; a retail opening that changes allocation.",
    ],
    cta: null,
  },
  P03: {
    eyebrow: null,
    title: "Four weeks. One agreed decision scope.",
    body: [
      "Week 1 — Define the decision, inputs, constraints and success criteria. Week 2 — Validate the baseline, evidence and data gaps. Week 3 — Compare practical quantity, timing or allocation options. Week 4 — Review recommendation, uncertainty and next steps.",
    ],
    cta: null,
  },
  P04: {
    eyebrow: null,
    title: "What your team receives.",
    body: [
      "A decision-specific analytical workspace; the maintained analysis appropriate to the data; reviewed recommendation briefs containing evidence, assumptions and trade-offs; a final decision-focused review.",
    ],
    cta: null,
  },
  P05: {
    eyebrow: null,
    title: "We maintain the analysis. You own the commitment.",
    body: [
      "ScaleSight: organize agreed inputs, check the evidence, compare options and prepare reviewed recommendations. Your team: provide context, validate constraints, decide what to buy or make and execute through existing systems.",
    ],
    cta: null,
  },
  P06: {
    eyebrow: null,
    title: "Judge the pilot by the decision it supports.",
    body: [
      "Did the analysis clarify a real choice before the commitment? Were the assumptions, options and trade-offs useful? What new information would change the call? We quantify effects only where the evidence supports it.",
    ],
    cta: null,
  },
  P07: {
    eyebrow: null,
    title: "Continue only when the support earns its place.",
    body: [
      "At the end of the pilot, we review what was useful and what remains open. Any continuing engagement has an agreed scope, review cadence, workspace access and fee.",
    ],
    cta: null,
  },
  P08: {
    eyebrow: null,
    title: "Before we begin.",
    body: [
      "Do we need to change systems? No; we scope the required inputs around your current environment. Do we need machine learning? Not always; methods follow the question and data. Is client workspace access included? We define access and allowed interactions in the engagement scope. Who approves the outcome? Your team. Is a financial result guaranteed? No; we test useful decisions and their trade-offs.",
    ],
    cta: null,
  },
  P09: {
    eyebrow: null,
    title: "A purchase, run or allocation decision is approaching?",
    body: [
      "Bring the choice you are weighing. We will see whether a focused review fits the decision timing and available data.",
    ],
    cta: {
      label: "Talk through a planning decision",
      href: "/contact?intent=pilot",
    },
  },
  A01: {
    eyebrow: "ABOUT SCALESIGHT",
    title: "Because a demand number is not a purchasing decision.",
    body: [
      "Growing food and beverage brands often need to commit cash to stock before the next demand signal arrives. ScaleSight exists to make those commitments more evidence-led and easier to evaluate.",
    ],
    cta: null,
  },
  A02: {
    eyebrow: null,
    title: "Data science in service of the next business decision.",
    body: [
      "ScaleSight was founded from a data-science perspective: models and forecasts are useful when they answer a real operating question. Our approach connects analysis to the practical decisions behind production, purchasing, replenishment and allocation.",
    ],
    cta: null,
  },
  A03: {
    eyebrow: null,
    title: "The best planning output is a choice your team can evaluate.",
    body: [
      "We investigate the change, show the assumptions, compare the alternatives and prepare a clear recommendation. The workspace gives that work structure; the value comes from maintaining and reviewing the analysis.",
    ],
    cta: null,
  },
  A04: {
    eyebrow: null,
    title: "Built to work beside your existing team.",
    body: [
      "ScaleSight can add analytical capacity around launches, supply disruptions and important commitments. Your planners and operating leaders retain inventory policy, supplier relationships and execution.",
    ],
    cta: null,
  },
  A05: {
    eyebrow: null,
    title: "Technical analysis. Practical review.",
    body: [
      "We use relevant statistical and machine-learning methods where useful, document uncertainty and compare responses against supply and cash constraints. Specialist planning review connects the analytical read to operating feasibility.",
    ],
    cta: null,
  },
  A06: {
    eyebrow: null,
    title: "Start with the next decision, not a complete system overhaul.",
    body: [
      "Tell us the buy, production run or allocation choice that needs attention. We can scope a focused 30-day pilot around it.",
    ],
    cta: {
      label: "Discuss a planning decision",
      href: "/contact",
    },
  },
  R01: {
    eyebrow: "FOR OPERATING ADVISORS",
    title: "Additional analytical planning capacity for your client work.",
    body: [
      "ScaleSight can support defined inventory and supply-planning questions with maintained analysis, scenario comparison and reviewed recommendations, while you retain your agreed advisory role.",
    ],
    cta: {
      label: "Discuss a partner engagement",
      href: "/contact?intent=partner",
    },
  },
  R02: {
    eyebrow: null,
    title: "For advisors already guiding operational decisions.",
    body: [
      "Potential collaborators include fractional operations leaders, supply-chain advisers and systems consultants working on retailer expansion, purchasing, manufacturing or inventory questions.",
    ],
    cta: null,
  },
  R03: {
    eyebrow: null,
    title: "Agree the roles before delivery begins.",
    body: [
      "We define the decision, client permission, data access, review scope, relationship ownership and fees together. ScaleSight supports the analytical work; the client and adviser retain their agreed approval and execution responsibilities.",
    ],
    cta: null,
  },
  R04: {
    eyebrow: null,
    title: "Have a client with a decision worth investigating?",
    body: [
      "Tell us the operating question, timeline and your role in the relationship.",
    ],
    cta: {
      label: "Discuss a partnership",
      href: "/contact?intent=partner",
    },
  },
  C01: {
    eyebrow: "TALK THROUGH A DECISION",
    title: "Bring us the commitment you are weighing.",
    body: [
      "Tell us what your team is considering buying, producing or allocating next. We will discuss whether a focused planning review fits your timing and available data.",
    ],
    cta: null,
  },
  C02: {
    eyebrow: null,
    title: "What to expect.",
    body: [
      "We discuss the upcoming commitment and decision date. We check the relevant data and operating context. We agree whether a focused pilot makes sense.",
    ],
    cta: null,
  },
  C03: {
    eyebrow: null,
    title: "Start with a few details.",
    body: [
      "Required: Name; Work email; Brand or company. Optional: Website; Role; Sales channels (DTC, retail, wholesale, marketplace, other); What decision is coming up? Button: Send planning enquiry.",
      "We use these details to respond to your enquiry. Read our Privacy Notice.",
    ],
    cta: null,
  },
  C04: {
    eyebrow: null,
    title: "Thank you - your enquiry has been received.",
    body: [
      "You can now choose a time for a conversation. Choose a conversation time · verified booking link",
    ],
    cta: null,
  },
  C05: {
    eyebrow: null,
    title: "We could not send your enquiry.",
    body: ["Please try again or contact us directly by email."],
    cta: null,
  },
  C06: {
    eyebrow: null,
    title: "Please do not send confidential records in this form.",
    body: [
      "We first discuss the question and agree an appropriate method for sharing any operational data required for a scoped engagement.",
    ],
    cta: null,
  },
  PR01: {
    eyebrow: "SCALESIGHT / LEGAL",
    title: "Privacy Notice",
    body: [
      "Clear information about how ScaleSight collects, uses and handles personal information through the website, enquiries and business communications.",
    ],
    cta: null,
  },
};
