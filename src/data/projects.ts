import healthThumb from '../assets/thumbs/health.webp'
import lily58Thumb from '../assets/thumbs/lily58.webp'
import marathonPhotosThumb from '../assets/thumbs/marathon-photos.webp'
import lily58Finished from '../assets/lily58/lily58-finished.webp'
import lily58Matrix from '../assets/lily58/lily58-matrix.webp'
import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    slug: 'abingdon-marathon-photos',
    thumbnail: {
      src: marathonPhotosThumb,
      alt: 'The photo finder’s search page, with a box to search by race number or name.',
    },
    title: 'Abingdon Marathon 2026 Photo Finder',
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
  {
    slug: 'lily58-keyboard',
    thumbnail: {
      src: lily58Thumb,
      alt: 'Close-up of the hand-soldered switch matrix with diodes and wiring.',
    },
    title: 'Handwired Lily58 Wireless Keyboard',
    summary:
      'A split keyboard built from the ground up to learn how keyboards work: hand-soldered hardware to my own design and a hand-written driver, later extended to Bluetooth with Claude.',
    details: [
      'I wanted to understand how keyboards work from the ground up, so I built both the hardware and the software myself. Every switch is wired by hand in a diode matrix I designed, around a Raspberry Pi Pico 2 W in each half, with a LiPo battery, a slide switch and a 3.5 mm TRS cable linking the two halves.',
      'The driver is my own hand-written code: it scans the key matrix and reports key presses to the computer. I later adapted it to also work over Bluetooth LE, extending it with Claude, so the keyboard now works over USB or wirelessly.',
      'The case started from an existing printable Lily58 model, which I adapted to fit the Pico 2 W and battery. Python scripts generate the modified case, keycap frame, board clamps and legended keycaps, with automatic fit checks and a 3D viewer so I can check the assembly before printing. A step-by-step photo guide documents the build.',
    ],
    highlights: [
      'Hand-soldered 28-key diode matrix per half, to my own design',
      'Hand-written key-scanning driver, extended to Bluetooth LE with Claude',
      'Runs over USB or Bluetooth, with a TRS cable linking the two halves',
      'Parametric Python scripts for the case, frame, clamps and printable keycaps, with automatic fit checks',
      'Step-by-step build guide with photos',
    ],
    tags: ['Electronics', 'Soldering', 'Arduino', 'Raspberry Pi Pico', 'Bluetooth LE', 'Python', '3D printing'],
    images: [
      {
        src: lily58Matrix,
        alt: 'Underside of the switch plate showing a hand-soldered matrix of 28 switches with diodes, bare-wire rows and columns, and a bundle of coloured wires leaving the top.',
        caption: 'The hand-soldered switch matrix before it went into the case.',
      },
      {
        src: lily58Finished,
        alt: 'One half of the finished keyboard in its blue 3D-printed case, with black and blue printed keycaps and a few bare switches still to be capped.',
        caption: 'One half assembled, with 3D-printed keycaps going on.',
      },
    ],
    links: [
      {
        label: 'Original case model (Printables)',
        url: 'https://www.printables.com/model/1321348-handwired-lily58',
      },
    ],
  },
  {
    slug: 'marathon-training-dashboard',
    thumbnail: {
      src: healthThumb,
      alt: 'The HRV tile from the dashboard, showing a 28-day average and a small trend line.',
    },
    title: 'Marathon Training Dashboard',
    summary:
      'A data pipeline and public dashboard that turns years of Apple Health exports into a personalised marathon training plan and shows progress against it.',
    details: [
      'Apple Health exports are multi-gigabyte XML files, and I delete old data from my phone to free space, so no single export holds my full history. I wrote a streaming extractor that reads several overlapping exports in place, dedupes samples across them with the newest export winning, and writes one clean CSV per metric.',
      'A summary step turns those into per-run, weekly and recovery statistics, and a plan generator produces a 25-week day-by-day schedule that is kept consistent with the weekly volume targets. I also matched parkrun results against watch workouts to use them as fitness markers.',
      'The dashboard is a single hand-written HTML, SVG and JavaScript page with no external libraries. It has tabs for overview, recovery, fitness, the plan and runs, a table view for every chart, and light and dark themes. Because the repo is public, the build uses a strict privacy allowlist so only aggregates and basic per-run figures are published, never routes, locations or raw samples.',
    ],
    highlights: [
      'Streams and dedupes 1–2 GB Apple Health XML exports across overlapping files',
      'Pandas summaries for training load, recovery trends and aerobic efficiency',
      'Generated 25-week training plan and day-by-day schedule',
      'Dependency-free interactive dashboard with accessible charts and tab navigation',
      'Privacy-filtered build so personal data stays out of the public site',
      'Published to GitHub Pages from the repo’s docs folder',
    ],
    tags: ['Python', 'pandas', 'HTML', 'SVG', 'JavaScript', 'Data visualisation', 'GitHub Pages'],
    links: [
      { label: 'Live dashboard', url: 'https://steven-dawkins.github.io/health' },
      { label: 'Source on GitHub', url: 'https://github.com/steven-dawkins/health' },
    ],
  },
]
