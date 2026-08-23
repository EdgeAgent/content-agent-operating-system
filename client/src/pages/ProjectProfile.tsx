/**
 * Operative Ledger style reminder: the project profile is an editorial dossier with honest
 * constraints, crisp black metadata, evidence-led imagery, and a visible pink routing accent.
 */
import { ArrowUpRight, FileText, Github, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";

const principles = [
  ["Draft freely", "Use specialized workers to research, write, edit, and prepare artifacts within a scoped job."],
  ["Validate deterministically", "Use observable checks for state, schema, rights, costs, and duplication before the workflow advances."],
  ["Approve explicitly", "A named person authorizes a specific artifact, not a vague future version or a casual instruction."],
  ["Publish deliberately", "Make one scoped official platform action, record the receipt, and check it before retrying."],
];

export default function ProjectProfile() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="profile-hero">
          <div className="ledger-rail"><span>PROJECT DOSSIER / 03</span></div>
          <div className="container profile-hero-grid">
            <div>
              <p className="eyebrow eyebrow-light">OPEN ARCHITECTURE GUIDE</p>
              <h1>Build the proof, not the <span>spectacle.</span></h1>
            </div>
            <div className="profile-abstract">
              <p>The Content Agent Operating System is a public blueprint for content teams that want automation to remain controlled, legible, and reviewable.</p>
              <div className="profile-stats"><div><strong>12</strong><span>source pages</span></div><div><strong>30</strong><span>day rollout</span></div><div><strong>01</strong><span>publish action</span></div></div>
            </div>
          </div>
        </section>

        <section className="project-body section-paper">
          <div className="container dossier-grid">
            <aside className="dossier-side">
              <p>PROJECT PROFILE</p>
              <dl>
                <div><dt>FORMAT</dt><dd>Architecture guide</dd></div>
                <div><dt>FOCUS</dt><dd>Controlled content ops</dd></div>
                <div><dt>STANDARD</dt><dd>Traceable completion</dd></div>
                <div><dt>STATUS</dt><dd><i /> Public reference</dd></div>
              </dl>
            </aside>
            <article className="dossier-main">
              <p className="eyebrow">THE OPERATING POSITION</p>
              <div className="artifact-tag"><span>DOSSIER STATUS</span><i /> SOURCE-GROUNDED PUBLIC REFERENCE</div>
              <h2>Automation becomes valuable when it can be reconstructed.</h2>
              <p className="lead-paragraph">This project rejects the idea that a content team needs a single all-powerful agent. Instead, it establishes a work graph: a manager routes bounded work, specialists create artifacts, deterministic systems validate state, and a named owner authorizes an exact final action.</p>
              <div className="principle-list">
                {principles.map(([title, text], index) => <div key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}.</h3><p>{text}</p></div></div>)}
              </div>
            </article>
          </div>
        </section>

        <section className="source-section">
          <div className="container source-grid">
            <div className="source-visual"><img src="manus-storage/caos-evidence-archive_1d88273f.jpg" alt="Archival evidence cards and receipt strips" /></div>
            <div className="source-copy">
              <p className="eyebrow">SOURCE MATERIAL</p>
              <div className="section-receipt receipt-compact"><span>ARCHIVE / 01</span><span>12-PAGE FIELD BRIEF</span><i /></div>
              <h2>From field brief to implementation guide.</h2>
              <p>This public project is built from the supplied <em>Content Agent Operating System</em> field brief. The README and feature guide translate its operating model, role separation, rollout sequence, capability choices, and control rules into a navigable reference.</p>
              <div className="source-actions">
                <a href="https://github.com/EdgeAgent/content-agent-operating-system" target="_blank" rel="noreferrer" className="action-link action-link-dark"><Github size={18} /> View repository <ArrowUpRight size={16} /></a>
                <Link href="/features" className="action-link"><FileText size={18} /> Read the feature guide <ArrowUpRight size={16} /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="constraints-section section-ink">
          <div className="container constraints-grid">
            <div><p className="eyebrow eyebrow-light">NON-NEGOTIABLE RULE</p><h2>The stack can change. The evidence chain cannot.</h2></div>
            <div className="constraint-card"><div className="constraint-label"><span>HIGH AUTHORITY STATE</span><i /></div><ShieldAlert size={24} /><p>Publishing authority is not earned by a model’s fluency. It is constrained by source rights, validation evidence, named approval, an idempotent key, and a recorded receipt.</p><div className="constraint-rule">RULE / NO PROOF, NO PUBLIC ACTION</div></div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="container"><span>CONTENT AGENT OPERATING SYSTEM</span><span>PROJECT DOSSIER / 03</span></div></footer>
    </div>
  );
}
