"use client";
import Image from "next/image";
import { DecisionBrief } from "./decision-brief";
import { useId, useRef } from "react";
import type { CSSProperties } from "react";
import { Expand, X, ArrowUpRight } from "lucide-react";
import {
  proofAssets,
  syntheticDisclosure,
  type ProofId,
} from "@/content/proofAssets";
export default function ProofImage({
  assetId,
  hero = false,
  annotations = false,
}: {
  assetId: ProofId;
  hero?: boolean;
  annotations?: boolean;
}) {
  const asset = proofAssets[assetId];
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const id = useId();
  if (!asset.path)
    return (
      <div className="proof-fallback">
        <DecisionBrief />
      </div>
    );
  const style = {
    "--mobile-focus": asset.mobileFocus,
    "--mobile-scale": asset.mobileScale,
    "--desktop-focus": asset.desktopFocus,
  } as CSSProperties;
  function close() {
    dialog.current?.close();
  }
  return (
    <figure className={`proof ${hero ? "proof-hero" : ""}`} style={style}>
      <div className="proof-topline">
        <span className="synthetic-badge">
          <span aria-hidden="true" />
          {syntheticDisclosure}
        </span>
        <span className="asset-code" aria-hidden="true">
          {asset.asset_id}
        </span>
      </div>
      <div className="proof-frame">
        <button
          type="button"
          className="proof-open"
          ref={opener}
          onClick={() => dialog.current?.showModal()}
          aria-label={`Enlarge: ${asset.alt}`}
          aria-haspopup="dialog"
        >
          <span className="proof-viewport">
            <Image
              src={asset.path}
              alt={asset.alt}
              width={asset.width}
              height={asset.height}
              preload={hero}
              sizes="(max-width: 767px) 1200px, (max-width: 1100px) 100vw, 1240px"
              className="proof-img"
              quality={90}
            />
          </span>
          <span className="enlarge-label">
            <Expand size={14} aria-hidden="true" />
            Tap to enlarge
          </span>
        </button>
        {annotations && (
          <ol
            className="proof-annotations"
            aria-label="Inside the decision workspace"
          >
            {[
              "Decision",
              "Evidence",
              "Options",
              "Reviewed call",
              "Assumptions",
            ].map((x, i) => (
              <li key={x}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {x}
              </li>
            ))}
          </ol>
        )}
      </div>
      <figcaption>
        {asset.caption}{" "}
        <a href={asset.path} target="_blank" rel="noreferrer">
          Full-resolution image <ArrowUpRight size={12} aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </figcaption>
      <dialog
        ref={dialog}
        className="proof-dialog"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-caption`}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClose={() => opener.current?.focus()}
        onClick={(event) => {
          if (event.target === dialog.current) close();
        }}
      >
        <div className="lightbox-header">
          <div>
            <p id={`${id}-title`}>{asset.scenarioName}</p>
            <p className="synthetic-badge">{syntheticDisclosure}</p>
          </div>
          <button
            autoFocus
            type="button"
            onClick={close}
            className="close-dialog"
            aria-label="Close full-resolution image"
          >
            <X size={23} />
          </button>
        </div>
        <div className="full-image-scroll">
          <Image
            src={asset.path}
            alt={asset.alt}
            width={asset.width}
            height={asset.height}
            unoptimized
            loading="lazy"
            className="full-proof-image"
          />
        </div>
        <p id={`${id}-caption`} className="lightbox-caption">
          {asset.caption}
        </p>
        <p className="lightbox-help">
          Scroll to inspect the full image. Pinch to zoom on touch screens.
        </p>
      </dialog>
    </figure>
  );
}
