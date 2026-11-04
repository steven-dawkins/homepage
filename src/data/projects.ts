import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    title: 'Abingdon Marathon 2026 Photo Finder',
    year: 2026,
    summary:
      'A searchable index of 14,470 official race photos, built by reading runners’ bib numbers with a local vision model so every runner can find their photos.',
    details: [
      'The official Abingdon Marathon photos were published as eight Flickr albums with no way to search them, so finding yourself meant scrolling through thousands of images. I built a pipeline that downloads the photos, reads the race number on each runner with a locally hosted vision-language model, and publishes a static site where you can look up photos by race number or name.',
      'Bib reading runs entirely on a laptop GPU (RTX 3070 Ti, 8 GB) using Qwen2.5-VL served by llama.cpp. A second, faster pass uses a small YOLO person detector to find runners first, then sends a contact sheet of their torsos to the model, which read more bibs correctly at a lower cost per photo.',
      'The readings are combined with Flickr tags and the official results into one index. Camera clocks are checked against runners whose numbers were read and wrong clocks are corrected. Each finisher’s passing time at every photo location is estimated from their chip time, so a runner’s page also lists photos taken just as they went by.',
    ],
    highlights: [
      '14,470 photos across 8 albums processed end to end',
      'Local vision-model bib reading, with GPU temperature throttling for long runs',
      'Adaptive backoff to cope with Flickr rate limiting during downloads',
      'Camera clock drift correction and per-runner passing-time estimates',
      'Static React + TypeScript site that hotlinks images, so only an index is published',
      'Automatically deployed to GitHub Pages with GitHub Actions',
    ],
    tags: ['Python', 'React', 'TypeScript', 'llama.cpp', 'Qwen2.5-VL', 'YOLO', 'GitHub Actions'],
    links: [
      {
        label: 'Live site',
        url: 'https://steven-dawkins.github.io/abingdon-marathon-photos-2026/#/',
      },
      {
        label: 'Source on GitHub',
        url: 'https://github.com/steven-dawkins/abingdon-marathon-photos-2026',
      },
    ],
  },
]
