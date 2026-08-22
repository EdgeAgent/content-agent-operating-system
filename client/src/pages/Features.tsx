/**
 * Operative Ledger style reminder: this feature guide uses editorial spreads, evidence labels,
 * black control cards, routing-pink rules, and chartreuse only for verified conditions.
 */
import { ArrowRight, Check, LockKeyhole, ShieldCheck, Workflow } from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";

const controls = [
  {
    number: "01",
    title: "Bounded work graph",
    body: "One manager routes one defined job through allowlisted workers. Specialists return artifacts; no worker owns the entire workflow.",
    icon: Workflow,
  },
  {
    number: "02",
    title: "Deterministic gates",
    body: "Schemas, source rights, approval state, duplicate checks, budgets, and artifact hashes are tested before the job can advance.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Named authority",
    body: "A person approves a particular final artifact. The manager may ask for review; it may not self-approve or convert a casual instruction into publication.",
    icon: LockKeyhole,
  },
];

const phases = [
  ["01–03", "Foundation", "Register source ownership, consent, rights, brand voice, and the governing playbook."],
  ["04–07", "Drafting", "Build structured intake, source cards, content drafts, variants, and a human review packet."],
  ["08–14", "Controls", "Add state transitions, schema checks, idempotency, model comparisons, budgets, and pass/fail gates."],
  ["15–21", "Production", "Run approved edit specifications, technical QA, subtitle checks, and hash-matched approval packets."],
  ["22–30", "Publication", "Connect one official platform adapter, keep an idempotent receipt, label analytics, and rehearse a pause."],
];

export default function Features() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="page-intro page-intro-features">
          <div className="ledger-rail"><span>FEATURE FILE / 02</span></div>
          <div className="container page-intro-grid">
            <div>
              <p className="eyebrow">CONTROLLED CONTENT OPERATIONS</p>
              <h1>Features that keep the work <span>inspectable.</span></h1>
            </div>
            <p className="page-lede">A content system earns autonomy only after it establishes a small, evidence-backed workflow that people can understand, interrupt, and audit.</p>
          </div>
        </section>

        <section className="feature-grid-section section-paper">
          <div className="container">
            <div className="section-heading section-heading-split">
              <div>
                <p className="eyebrow">THE CONTROL MODEL</p>
                <h2>Three controls. One accountable job.</h2>
              </div>
              <p>The document does not propose a super-agent. It creates a deliberate chain of responsibility from owned source material to a specific public receipt.</p>
            </div>
            <div className="control-grid">
              {controls.map(({ number, title, body, icon: Icon }) => (
                <article className="control-card" key={number}>
                  <div className="control-card-top"><span>{number}</span><Icon size={24} strokeWidth={1.65} /></div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <div className="control-card-proof"><Check size={14} /> POLICY-BACKED STATE CHANGE</div>
                </article>
              ))}
            </div>
            <div className="section-receipt"><span>FEATURE REGISTER / 03 CONTROLS</span><span>BOUNDARY: POLICY DECIDES WHAT MAY HAPPEN NEXT</span><i /></div>
          </div>
        </section>

        <section className="workflow-detail section-ink">
          <div className="container workflow-detail-grid">
            <div className="workflow-copy">
              <p className="eyebrow eyebrow-light">ONE BOUNDED ITERATION</p>
              <h2>Every action leaves a receipt.</h2>
              <p>The manager names the next allowable action. Policy and schema checks confirm that the action is permitted. A worker creates an artifact; an approver authorizes the exact artifact; one official adapter publishes it once.</p>
              <div className="receipt-strip"><span>REQUIRED OUTPUT</span><code>decision · worker · inputs · validations · idempotency key · risk flags</code></div>
            </div>
            <ol className="loop-list">
              {["Load job", "Manager next action", "Policy + schema check", "Worker or validator", "Approval packet", "Official API + receipt"].map((step, index) => (
                <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong><ArrowRight size={17} /></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="rollout-section section-paper">
          <div className="container">
            <div className="section-heading rollout-heading">
              <div>
                <p className="eyebrow">IMPLEMENTATION SEQUENCE</p>
                <h2>A 30-day controlled rollout.</h2>
              </div>
              <p>Increase authority only when the corresponding evidence, validation, and recovery procedure already exist.</p>
            </div>
            <div className="rollout-ruler" aria-hidden="true"><span>01</span><span>07</span><span>14</span><span>21</span><span>30</span></div>
            <div className="rollout-phases">
              {phases.map(([days, name, description]) => (
                <article key={days}>
                  <p>{days}</p><h3>{name}</h3><span>{description}</span>
                  <div className="phase-gate">GATE / {name === "Controls" ? "FAILED CHECK = BLOCKED" : name === "Publication" ? "ONE PLATFORM · ONE PAUSE SWITCH" : "EVIDENCE REQUIRED"}</div>
                </article>
              ))}
            </div>
            <div className="section-receipt receipt-tight"><span>ROLLOUT FILE / 30 DAYS</span><span>AUTHORITY INCREASES ONLY AFTER EVIDENCE, VALIDATION, AND RECOVERY</span><i /></div>
          </div>
        </section>

        <section className="campaign-section">
          <div className="container campaign-grid">
            <div className="campaign-image"><img src="manus-storage/caos-approval-stamp_2d3adf24.jpg" alt="Abstract approval stamp visual" /></div>
            <div className="campaign-copy">
              <p className="eyebrow">CAMPAIGN-READY, NOT UNATTENDED</p>
              <div className="artifact-tag"><span>CAMPAIGN FILE / 01</span><i /> READY FOR REVIEW</div>
              <h2>Operate a campaign as a chain of accountable content jobs.</h2>
              <p>Each post, edit, or media variation should start with owned sources and a specific target. The system can accelerate drafting and evidence assembly without turning an entire campaign into an unchecked publishing loop.</p>
              <ul className="check-list">
                <li><Check size={17} /> Keep source ownership and rights attached to every job.</li>
                <li><Check size={17} /> Limit each publish action to one named platform adapter.</li>
                <li><Check size={17} /> Record a receipt before any retry is considered.</li>
              </ul>
              <Link href="/project" className="text-link">Read the project dossier <ArrowRight size={17} /></Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="container"><span>CONTENT AGENT OPERATING SYSTEM</span><span>FEATURE FILE / 02</span></div></footer>
    </div>
  );
}
