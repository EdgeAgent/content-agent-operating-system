/**
 * Operative Ledger style reminder: editorial layout, paper/ink contrast, pink routing lines,
 * rare chartreuse proof signals, deliberately asymmetric composition, and no generic UI cards.
 */
import { ArrowDown, ArrowRight, FileCheck2, Github, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";

const heroUrl = "manus-storage/caos-hero-control-room_067ace4d.jpg";

const roles = [
  ["01", "Manager", "Routes the job", "May select an allowlisted worker, request review, or raise an exception. May not self-approve, invent tools, or publish on casual instruction."],
  ["02", "Specialists", "Create artifacts", "May research sources, draft content, propose edit specifications, and support visual work. May not alter policy or advance unvalidated work."],
  ["03", "Deterministic", "Verify facts of state", "May check schemas, formats, rights fields, budgets, and duplicates. May not make editorial or authority judgments."],
  ["04", "Approver + API", "Authorize and record", "May approve one artifact and make a scoped official action. May not silently retry or approve a changed artifact."],
];

const costs = [
  ["Free prototype", "$0.00", 0, "Bounded experiments"],
  ["Economical fallback", "$0.40", 2, "Queue recovery"],
  ["Premium manager", "$9.00", 40, "Consistent control"],
  ["Frontier escalation", "$22.50", 100, "Difficult exceptions"],
];

export default function Home() {
  const jumpToWorkflow = () => document.getElementById("workflow")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="hero-section" style={{ backgroundImage: `linear-gradient(90deg, rgba(11,12,12,.97) 0%, rgba(11,12,12,.89) 48%, rgba(11,12,12,.54) 100%), url(${heroUrl})` }}>
          <div className="hero-grid-overlay" />
          <div className="container hero-content">
            <div className="hero-kicker"><span>FIELD BRIEF / 01</span><span>ROLL OUT / ARCHITECTURE / ECONOMICS</span></div>
            <div className="hero-main">
              <div>
                <p className="eyebrow eyebrow-light">CONTROLLED CONTENT OPERATIONS</p>
                <h1>A content agent that <span>does work.</span></h1>
                <p className="hero-lede">A 30-day rollout for a controlled multi-agent production pipeline: source material in, approved content out, and a receipt for every public action.</p>
                <div className="hero-actions hero-action-deck">
                  <button type="button" className="button-primary" onClick={jumpToWorkflow}>Inspect the workflow <ArrowDown size={17} /></button>
                  <Link href="/features" className="button-secondary">Read feature guide <ArrowRight size={17} /></Link>
                  <Link href="/project" className="button-secondary">View project profile <ArrowRight size={17} /></Link>
                  <a href="https://github.com/EdgeAgent/content-agent-operating-system" target="_blank" rel="noreferrer" className="button-secondary">View repository <Github size={17} /></a>
                </div>
              </div>
              <aside className="operating-position">
                <p>OPERATING POSITION</p>
                <span>Draft freely.</span><span>Validate deterministically.</span><span>Approve explicitly.</span><span>Publish deliberately.</span>
              </aside>
            </div>
            <div className="hero-footer"><span>PREPARED FOR CONTENT OPERATORS</span><strong>01</strong><span>CONTROLLED SYSTEMS &gt; CHATBOT SPECTACLE</span></div>
          </div>
        </section>

        <section className="overview-band section-paper">
          <div className="container overview-grid">
            <div className="section-heading compact"><p className="eyebrow">THE STANDARD</p><h2>Traceable completion—not artificial autonomy.</h2></div>
            <p>The valuable system is not the one that appears most independent. It is the one that can produce a correct content artifact, show the supporting evidence, identify the owner of the action, and recover without duplicating a public post.</p>
            <div className="proof-fact"><ShieldCheck size={22} /><span>ONE JOB / ONE APPROVAL / ONE RECEIPT</span></div>
          </div>
          <div className="container section-receipt"><span>RECEIPT / OVERVIEW-01</span><span>PROOF STANDARD: SOURCE → APPROVAL → PUBLIC ACTION</span><i /></div>
        </section>

        <section id="workflow" className="workgraph-section section-paper">
          <div className="ledger-rail"><span>WORK GRAPH / 02</span></div>
          <div className="container">
            <div className="section-heading section-heading-split">
              <div><p className="eyebrow">OPERATING MODEL</p><h2>Build a work graph—not a super-agent.</h2></div>
              <p>The manager coordinates a bounded job. Specialist workers return artifacts. Deterministic controls decide whether the work may advance.</p>
            </div>
            <div className="workgraph" aria-label="Content job architecture workflow">
              <div className="graph-node node-brief"><small>INPUT</small><strong>BRIEF</strong></div>
              <div className="graph-arrow" />
              <div className="graph-node node-manager"><small>CONTROL PLANE</small><strong>MANAGER<br />AGENT</strong></div>
              <div className="graph-arrow" />
              <div className="worker-cluster"><div><small>RESEARCH</small><span>rights + sources</span></div><div><small>WRITING</small><span>script + caption</span></div><div><small>EDIT PLAN</small><span>shots + timing</span></div><div><small>QA</small><span>technical + claims</span></div></div>
              <div className="graph-arrow" />
              <div className="graph-node node-approval"><small>AUTHORITY GATE</small><strong>HUMAN<br />APPROVAL</strong></div>
              <div className="graph-arrow" />
              <div className="graph-node node-receipt"><small>OFFICIAL API</small><strong>PUBLISH<br />RECEIPT</strong></div>
            </div>
            <div className="workgraph-notes"><div><b>RULE / 01</b> No worker owns the whole workflow.</div><div>Managers plan and route. Workers create narrow, schema-validated outputs. Publishers act only after job-specific approval matches the final artifact.</div><div><b>FEEDBACK LOOP</b> Receipt + analytics return to planning; they do not auto-rewrite policy.</div></div>
          </div>
        </section>

        <section className="roles-section section-paper">
          <div className="container roles-grid">
            <div className="roles-intro"><p className="eyebrow">SYSTEM ROLES</p><h2>Separate the roles.</h2><p>A strong manager is not a universal worker. It is a constrained decision-maker surrounded by specialists and controls.</p><blockquote>Models may <span>recommend.</span> Policy decides what may happen next.</blockquote></div>
            <div className="role-list">{roles.map(([number, role, title, body]) => <article key={number}><div><span>{number} / {role}</span><h3>{title}</h3></div><p>{body}</p></article>)}</div>
          </div>
          <div className="container section-receipt receipt-tight"><span>AUTHORITY MAP / 04 ROLES</span><span>NO ROLE OWNS THE WHOLE WORKFLOW</span><i /></div>
        </section>

        <section className="economics-section section-ink">
          <div className="container economics-grid">
            <div className="economics-intro"><p className="eyebrow eyebrow-light">ECONOMICS / DIRECTIONAL TOKEN COSTS</p><h2>Free, economical paid, and frontier paid.</h2><p>A low token price is useful only when the queue remains reliable. The best operating stack prices reliability and review workload—not just output tokens.</p><div className="monthly-volume"><span>MONTHLY WORKLOAD</span><strong>30 JOBS<br />2.34M TOKENS</strong><small>Assumes one content job/day, 60K input + 18K output tokens/job, and 12 model calls/job.</small></div></div>
            <div className="cost-chart" role="img" aria-label="Directional monthly token cost comparison: Free prototype 0 dollars, economical fallback 0.40 dollars, premium manager 9 dollars, frontier escalation 22.50 dollars.">
              <div className="chart-caption"><span>STACK</span><span>EST. / MO</span><span>OPERATIONAL BENEFIT</span></div>
              {costs.map(([name, cost, width, benefit], index) => <div className="cost-row" key={name}><div><strong>{name}</strong><small>{benefit}</small></div><b className={index === 0 ? "free-cost" : ""}>{cost}</b><div className="cost-bar"><i style={{ width: `${width}%` }} /></div></div>)}
              <p className="chart-footnote">Source figures are illustrative token estimates from the field brief. They exclude rendering, storage, data transfer, official platform APIs, human review, and incident handling.</p>
              <div className="control-state"><span>CONTROL STATE / COST CEILING</span><span>PAID ESCALATION REQUIRES EXPLICIT POLICY</span><i /></div>
            </div>
          </div>
        </section>

        <section className="proof-section section-paper">
          <div className="container proof-grid">
            <div className="proof-image"><img src="manus-storage/caos-evidence-archive_1d88273f.jpg" alt="Evidence cards, receipt strip, and verification material" /></div>
            <div className="proof-copy"><p className="eyebrow">AUTHORITY BOUNDARY</p><h2>Every transition names the evidence.</h2><p>The manager produces a structured next action. Code validates the action, executes an allowlisted step, persists the result, and either advances, requests review, or blocks.</p><div className="structured-output"><div><FileCheck2 size={18} /><span>REQUIRED STRUCTURED OUTPUT</span></div><code>{`{ decision, target_state, worker_or_tool, input_artifact_ids, required_validations, idempotency_key, reason, risk_flags }`}</code></div><Link href="/project" className="text-link">Read the project profile <ArrowRight size={17} /></Link></div>
          </div>
        </section>

        <section className="closing-section">
          <div className="container closing-grid"><div><p className="eyebrow eyebrow-light">NEXT DECISION</p><h2>Build the proof, not the <span>spectacle.</span></h2><p>Choose one content format. Assemble the evidence base. Integrate one platform. Name one approval owner.</p></div><div className="closing-checks"><div><span>01</span><strong>Choose one content format.</strong></div><div><span>02</span><strong>Assemble the evidence base.</strong></div><div><span>03</span><strong>Integrate one platform.</strong></div><div><span>04</span><strong>Name one approval owner.</strong></div></div></div>
        </section>
      </main>
      <footer className="site-footer"><div className="container"><span>CONTENT AGENT OPERATING SYSTEM</span><span>CONTROLLED CONTENT OPS / 01</span></div></footer>
    </div>
  );
}
