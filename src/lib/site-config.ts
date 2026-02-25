/**
 * site-config.ts
 * ─────────────────────────────────────────────────
 * Single source of truth for all cross-site factual data.
 *
 * Edit values here and they'll propagate everywhere.
 * Purely presentational / layout data stays local to each component.
 */

// ── Branding ────────────────────────────────────

export const brand = {
    name: "Bandong Ryok",
    nameFull: "Bandong Ryok I.T.F Taekwon-Do Club",
    nameShort: "Bandong Ryok I.T.F",
    tagline: "Discipline, respect, and self-improvement through ITF Taekwondo.",
    description:
        "Building tomorrow's champions through ITF Taekwondo. Discipline, respect, and self-improvement for every student.",
    logoAlt: "Bandong Ryok Logo",
    logos: {
        light: "/logo.png",
        dark: "/dark-logo.png",
    },
} as const;

// ── Instructor / Personnel ──────────────────────

export const instructor = {
    firstName: "Yasini",
    lastName: "Saidi",
    fullName: "Yasini Saidi",
    title: "Sabumnim",
    displayName: "Sabumnim Yasini Saidi",
    shortName: "Instructor Yasini",
    rank: "3rd Dan",
    rankNumber: 3,
    role: "Instructor and Head Coach",
    specialty: "ITF Taekwondo Instructor",
    photo: "/sensei.jpeg",
    bio: "Highly skilled and experienced Taekwondo instructor with years of teaching ITF Taekwondo. Proven track record of developing students' technical skills, physical fitness, and mental toughness.",
    quote:
        "I focus on discipline, respect, and self-improvement, empowering students to reach their full potential.",
    skills: [
        { label: "Extensive Knowledge", value: 99 },
        { label: "Technical Expertise", value: 98 },
        { label: "Teaching Ability", value: 90 },
        { label: "Demonstration Skills", value: 97 },
    ],
} as const;

// ── Contact ─────────────────────────────────────

export const contact = {
    email: "info@bandongryok.com",
    phone: "+263  0710366407",
    phoneDisplay: "+263 0779212468",
    whatsapp: "+263 77 921 2468",
    location: "Citadel, Chitungwiza,  Harare, Zimbabwe",
} as const;

// ── Schedule ────────────────────────────────────

export const schedule = {
    trainingDays: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"] as readonly string[],
    hoursDisplay: "Sat–Wed: 5 PM – 9 PM",
    sessions: [
        { name: "ITF Taekwondo — Session 1", time: "5:00 PM – 7:00 PM", shortTime: "5–7 PM" },
        { name: "ITF Taekwondo — Session 2", time: "7:00 PM – 9:00 PM", shortTime: "7–9 PM" },
    ],
    trainingDaysPerWeek: 5,
    sessionsPerDay: 2,
} as const;

// ── Pricing ─────────────────────────────────────

export const pricing = {
    joiningFee: "$10",
    monthlyFee: "$10",
    privateLessons: "TBD",
} as const;

// ── Social Media ────────────────────────────────

export const socials = {
    facebook: "#",
    instagram: "#",
    twitterX: "#",
    pinterest: "#",
} as const;

// ── Stats / Metrics ─────────────────────────────

export const stats = {
    yearsTeaching: 10,
    studentsTrained: 100,
} as const;

// ── Copyright & Attribution ─────────────────────

export const footer = {
    copyright: `© ${new Date().getFullYear()} ${brand.nameFull}. All Rights Reserved.`,
    madeBy: {
        name: "Wessley N.",
        url: "https://wessleyn.me",
    },
} as const;
