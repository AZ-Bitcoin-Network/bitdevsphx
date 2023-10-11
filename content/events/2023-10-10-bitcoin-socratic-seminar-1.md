---
date: '2023-10-10'
title: 'Bitcoin Socratic Seminar #1'
type: Doc
---

It’s almost time for our first BitDevs Phoenix event!

## What is a Socratic Seminar?

Inspired by other BitDevs meetups around the US, our Socratic Seminar events
are formatted to foster debate, information sharing and lively discussion.

1. Discussion topics are provided ahead of the event
2. The event moderator(s) leads the audience through the topics
3. Raise your hand to grab the mic and participate in the conversation

### 🏫 Location

850 N 5th St, Phoenix, AZ 85004<br />
<a href="https://maps.app.goo.gl/JWQVHvn2yu1GkSPe9" data-no-summary>Map Link</a><br />

This venue is part of Arizona State University.

### 🚘 Parking

There is a large paid parking lot right across the street. You may also find metered parking near by and scarce free parking right in front of the building.

### 🚕 Rideshare

Uber and Lyft work great in this city.

## Topics

### Education

[ZBD Web Dev 101](https://zbd.dev/courses/webdev101/introduction)

[Web Dev 201](https://zbd.dev/courses/webdev101/html-css)

[The Bitcoin Lightning Course](https://zbd.dev/courses/lightning-network-101)

[ZBD Hackathon Course](https://www.youtube.com/playlist?list=PLaMJnpgudSAAqJV52K7_YwgtkLt2rlcK1)

[Nostr Course](https://zbd.dev/courses/nostr-101)

### 🧡 Bitcoin

[Frostsnap multisig wallet supports FROST, taproot, etc.](https://frostsnap.com/introducing-frostsnap.html)

[Machankura - onchain withdrawals, additive batching, Schnorr, FROST](https://twitter.com/Machankura8333/status/1695827471763898722)

[Milksad Security Vulnerability Disclosure](https://milksad.info/)

[Drivechains Consensus-level Logic (PR #28311) ](https://github.com/bitcoin/bitcoin/pull/28311)

[OpenSats: Long-Term Support Program for Bitcoin Core Developers](https://opensats.org/blog/announcing-lts-grant-program-to-support-bitcoin-core-contributors)

[OpenSats: First Wave of Bitcoin Grants](https://opensats.org/blog/bitcoin-grants-july-2023)

[Bitcoin Dev Kit Foundation](https://twitter.com/bitcoindevkit/status/1679127933888208899)

[Block: Update on the Mining Development Kit](https://www.mining.build/update-on-the-mining-development-kit/)

[wallet: Add CoinGrinder coin selection algorithm core #27877](https://github.com/bitcoin/bitcoin/pull/27877)

<a href="https://github.com/bitcoin-dev-project/warnet" data-no-summary>Warnet: Monitor and analyze the emergent behaviours of Bitcoin networks</a>

### ⚡️ Lightning

[Min cost flow based pay implementation (Rene Pay in CoreLN)](https://twitter.com/renepickhardt/status/1686061536937230351)

[Rewards bug on Stacker News allowed an attacker to withdraw 20m sats](https://www.nobsbitcoin.com/someone-used-a-bug-on-stacker-news-to-withdraw-20m-sats/)

[DoS: Fake Lightning Channels](https://morehouse.github.io/lightning/fake-channel-dos/)

[Anchor Outputs Channels Are Here](https://lightningdevkit.org/blog/anchor-outputs-channels-are-here/)

[Mutiny uses LDK to create the first lightning wallet for the web](https://lightningdevkit.org/blog/mutiny-uses-ldk-the-first-lightning-wallet-for-the-web/)

[[Lightning-dev] Jamming Mitigation Dry Run](https://lists.linuxfoundation.org/pipermail/lightning-dev/2023-August/004034.html)

[[Lightning-dev] option_simple_close for "unfailable" closing](https://lists.linuxfoundation.org/pipermail/lightning-dev/2023-July/004013.html)

#### Lightning Simulation Tools

- <a href="https://github.com/bitcoin-dev-project/sim-ln" data-no-summary>SimLN</a>
- <a href="https://github.com/tee8z/doppler" data-no-summary>Doppler</a>

### Fedimint

We should collaborate and create a multisig Fedimint instance to experiment with circular bitcoin economies at our meetups. here is a link to the code which has their first official release. Obviously a lot of discussion needs to go into this before we should start building anything. Some questions I can think of are:

- Who will be the custodians?
- Where will we host it?
- Who and How do we maintain it?
- Does fedimint include a front end and if not who will develop one?
- How will we onboard people? (meetup vendors and attendees)

### 🎨 User Experience

#### HRF Bounty for Bitcoin UI Kit

- <a href="https://hrfbounties.org/" data-no-summary>HRF Bounty List</a>
- <a href="https://www.bitcoinuikit.com/" data-no-summary>Bitcoin UI Kit (Figma)</a>
- <a href="https://github.com/cypherstack/bitcoin-ui-kit-penpot" data-no-summary>Awarded Submissions</a>
- <a href="https://discord.com/channels/903125802726596648/1144396832299036703" data-no-summary>Discussion in Bitcoin Design Community about modifying architecture for better FOSS collaboration in PenPot</a>

### 🧠 AI

[BitDevs Upgrade template v0.1.0-alpha released](https://github.com/atlantabitdevs/bitdevs-upgrade)

[Llama-GPT for Umbrel released](https://github.com/getumbrel/llama-gpt)

### 🔒 Infosec & Privacy

#### Roman Sterlingov Case

[Chainalysis Investigations Lead is 'Unaware' of Scientific Evidence the Surveillance Software Works](https://bitcoinmagazine.com/technical/chainalysis-investigations-lead-is-unaware-of-scientific-evidence)

[Declaration of Elizabeth A. Bisbee - Exhibit 1 — Document #149, Attachment #1](https://www.courtlistener.com/docket/59988850/149/1/united-states-v-sterlingov/)

[Malware in NPM packages](https://www.fortinet.com/blog/threat-research/malicious-packages-hiddin-in-npm?utm_source=tldrinfosec)

- It’s probably not safe to run npm install directly on you machine anymore. These packages can define arbitrary scripts that run when installed. All it takes is one dependency anywhere on the dependency tree to be compromised and your system could be compromised. Docker and dev containers is one potential solution to this problem. Other JavaScript runtimes like deno provide protections against this type of attack

### 🟣 Nostr

<a href="https://nostr.report/desktop.php" data-no-summary>The Nostr Report</a>

#### NDK v0.8.21

<a href="https://primal.net/e/note1pd3c8c5rgumvsxlh684h9tqyv4vsr9s0kh56xqt3p3mxuxtjy4xq2708ur?ref=nobsbitcoin.com" data-no-summary>PabloF7z announces new NDK</a>

<a href="https://primal.net/e/note1fdq6syw9ljmgfeuzla58mvxqu0wvyz59ewv646pl7aq43ree579qslfrzc?ref=nobsbitcoin.com" data-no-summary>PabloF7z describes monorepo structure</a>

#### Snort v0.1.13

<a href="https://primal.net/e/note1n7f7xqdcznj0n48rlt90f6a5lwzuumx3s3gpx4ytwsufqtt05w8sgq5hqx?ref=nobsbitcoin.com" data-no-summary>Kieran's release thread</a>
