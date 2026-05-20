// ═══════════════════════════════════════════════════
// REPORTED.LIVE — INCIDENT REPORTS DATABASE
// ═══════════════════════════════════════════════════
// To add a new report, copy the template and paste
// it before the last ]; then push to GitHub.
//
// TEMPLATE:
// {
//   id: 8,                          ← next number
//   category: "cryptid",           // cryptid / ghost / ufo / alien / unexplained / demonic / humanoid / atmospheric / other
//   title: "Large Winged Figure Spotted",
//   city: "Chicago",
//   state: "IL",                    // 2-letter state code
//   date: "2026-05-20",             // YYYY-MM-DD format
//   description: "Full witness account here.",
//   reporter: "witness_username",
//   image: ""                       // leave blank or "images/filename.jpg"
// },
// ═══════════════════════════════════════════════════

var reports = [
  {
    id: 1,
    status: "verified",
    category: "cryptid",
    title: "Mothman Sighting Near Willis Tower",
    city: "Chicago",
    state: "IL",
    date: "2026-05-12",
    description: "Witnessed a large winged figure hovering near the top of the Willis Tower at approximately 11:45pm. It did not move for several minutes before ascending vertically and disappearing. Three other people on the street saw it. The eyes were red and visible from at least 200 feet below. This is the third reported sighting in Chicago this year.",
    reporter: "anonymous_witness_4471",
    image: "images/moth1.png"
  },
  {
    id: 2,
    status: "verified",
    category: "ufo",
    title: "Formation of Lights — No Sound",
    city: "Phoenix",
    state: "AZ",
    date: "2026-05-08",
    description: "Seven orange lights in a V formation hovered over the city for approximately 22 minutes before disappearing simultaneously. No sound whatsoever. Hundreds of witnesses. Local news reported it as flares but the lights were stationary and wind was blowing southeast — opposite direction of drift. Video captured on three separate phones.",
    reporter: "phoenix_skywatcher",
    image: ""
  },
  {
    id: 3,
    status: "pending",
    category: "ghost",
    title: "Full Apparition — Gettysburg Battlefield",
    city: "Gettysburg",
    state: "PA",
    date: "2026-04-28",
    description: "During an evening tour of the battlefield, our group of eight people all simultaneously saw a figure in period military clothing standing near the treeline. When our guide shone a light on it, it vanished. The temperature dropped approximately 20 degrees in that spot. Our audio recorder captured sounds consistent with distant cannon fire despite no reenactments being scheduled.",
    reporter: "battlefield_tour_guide",
    image: ""
  },
  {
    id: 4,
    status: "pending",
    category: "demonic",
    title: "Entity in Bedroom — Third Night Running",
    city: "Salem",
    state: "MA",
    date: "2026-05-15",
    description: "Third consecutive night I have woken at 3am to a figure standing in the corner of my bedroom. It is tall, completely black, and when I turn on the light it is gone but the room smells of sulfur for about ten minutes. My dog barks at that corner even when nothing is visible. Last night it moved toward the bed. I am not sleeping in that room anymore.",
    reporter: "sleepless_in_salem",
    image: ""
  },
  {
    id: 5,
    status: "verified",
    category: "cryptid",
    title: "Bigfoot Track Line — Olympic Peninsula",
    city: "Forks",
    state: "WA",
    date: "2026-04-15",
    description: "Found a track line in mud near the Hoh River that measured 17 inches long and showed a clear bipedal stride of approximately 5 feet. The tracks continued for roughly 200 yards before entering dense forest. I made plaster casts of three of the clearest prints. A wildlife biologist I contacted said they are not consistent with any known animal in the region.",
    reporter: "olympic_peninsula_hiker",
    image: ""
  },
  {
    id: 6,
    status: "unverified",
    category: "alien",
    title: "Contact Event — Missing Time",
    city: "Roswell",
    state: "NM",
    date: "2026-05-01",
    description: "Driving home on Route 285 at approximately 9pm. Bright light came down ahead of the road. Next thing I knew I was pulled over on the side of the road and it was 2:47am. I have no memory of the intervening six hours. My car has a strange scorch mark on the roof that wasn't there before and I have a small triangular mark on my left forearm that appeared overnight.",
    reporter: "nm_route285_driver",
    image: ""
  },
  {
    id: 7,
    status: "pending",
    category: "unexplained",
    title: "Repeated Knocking — No Source Found",
    city: "Savannah",
    state: "GA",
    date: "2026-05-18",
    description: "For three weeks our entire neighborhood has heard knocking from beneath the street at 2am exactly. The city sent a crew to investigate and found no pipe activity, no animals, and no geological explanation. The sound is rhythmic — three knocks, pause, three knocks. It moves up the street block by block each night as if something is traveling underground.",
    reporter: "savannah_resident_2026",
    image: ""
  }
];
