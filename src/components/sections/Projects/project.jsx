"use client"

import "./project.scss"
import React, { useRef } from "react"
import { projectContents } from "../../../../content/projectContents"
import { kebabCase } from "@/utils/kebabCase"
import { PPMonument, poppins } from "@/utils/fonts"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import useMatchMedia from "@/hooks/useMatchMedia"

export default function Project({
  title,
  tags,
  href,
  src,
  i,
  targetScale,
  globalProgress,
  range,
}) {
  const projectTargetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: projectTargetRef,
    offset: ["start end", "start start"],
  })
  const isMobile = useMatchMedia("(max-width: 768px)")

  const IMAGE_SCALE = useTransform(scrollYProgress, [0, 1], [2, 1])
  const CARD_SCALE = useTransform(globalProgress, range, [1, targetScale])

  return (
    <div className="project" ref={projectTargetRef}>
      <motion.div
        className={`project-content ${PPMonument.variable} ${poppins.variable}`}
        style={{
          scale: CARD_SCALE,
          top: isMobile
            ? `calc(0vh + ${i * 50}px)`
            : `calc(-5vh + ${i * 50}px)`,
        }}
      >
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <div className="image-wrapper">
            <motion.div className="bg-image" style={{ scale: IMAGE_SCALE }}>
              <Image
                src={`/imagesnew/${i + 1}.png`}
                alt={title}
                fill
                priority={true}
              />
            </motion.div>
            <motion.div
              className="project-image-wrapper"
              style={{ scale: IMAGE_SCALE }}
            >
              <Image
                src={`${src}.png`}
                alt={title}
                width={400}
                height={500}
                placeholder="blur"
                blurDataURL={`${src}-small.png`}
                className="project-image"
              />
            </motion.div>
          </div>
          <div className="body">
            <h3 className="title">{title}</h3>
            <div className="tags">
              {tags.map((tag, i) => (
                <span key={`tag__${i}`} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </motion.div>
    </div>
  )
}
