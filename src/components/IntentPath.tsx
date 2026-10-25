"use client";

import { useState } from "react";

const examples = [
  {
    id: "visibility",
    label: "I want to be found for a service",
    structure: "A focused service page, supported by useful topic pages",
    nextStep: "Make the next step clear and easy to take",
  },
  {
    id: "enquiries",
    label: "I want more enquiries from my website",
    structure: "A clear offer, relevant proof, and a focused contact path",
    nextStep: "Invite the right visitor to start a conversation",
  },
  {
    id: "launch",
    label: "I am launching a new offer",
    structure: "A dedicated landing page with supporting search content",
    nextStep: "Connect the offer to a useful enquiry action",
  },
];

export function IntentPath() {
  const [selectedId, setSelectedId] = useState(examples[0].id);
  const selected = examples.find((example) => example.id === selectedId) ?? examples[0];

  return (
    <div className="intent-demo" data-intent-demo>
      <div className="intent-demo__topline">
        <span className="micro-label">An illustrative example</span>
        <span className="demo-status"><span aria-hidden="true" /> Explore a path</span>
      </div>

      <fieldset className="intent-choices">
        <legend>Start with a business goal</legend>
        {examples.map((example, index) => (
          <button
            className={selected.id === example.id ? "intent-choice is-selected" : "intent-choice"}
            type="button"
            key={example.id}
            aria-pressed={selected.id === example.id}
            onClick={() => setSelectedId(example.id)}
          >
            <span className="intent-choice__number">0{index + 1}</span>
            <span>{example.label}</span>
            <span className="intent-choice__mark" aria-hidden="true">↗</span>
          </button>
        ))}
      </fieldset>

      <div className="path-map" aria-live="polite" aria-atomic="true">
        <div className="path-map__route" aria-hidden="true">
          <span className="route-dot route-dot--start" />
          <span className="route-line" />
          <span className="route-dot route-dot--middle" />
          <span className="route-line route-line--second" />
          <span className="route-dot route-dot--end" />
        </div>
        <div className="path-map__steps">
          <article className="path-step path-step--start">
            <span className="path-step__label">Search intent</span>
            <p>{selected.label}</p>
          </article>
          <article className="path-step path-step--middle">
            <span className="path-step__label">Page structure</span>
            <p>{selected.structure}</p>
          </article>
          <article className="path-step path-step--end">
            <span className="path-step__label">Next step</span>
            <p>{selected.nextStep}</p>
          </article>
        </div>
      </div>
      <p className="intent-demo__note">
        The route changes with the goal. This is a planning illustration, not a promise of rankings or leads.
      </p>
    </div>
  );
}
